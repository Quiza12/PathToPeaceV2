import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AzureService } from '../../shared/services/azure.service';

@Component({
    selector: 'p2p-app-contact',
    templateUrl: './p2p.contact.component.html',
    styleUrls: ['./p2p.contact.component.scss']
})

export class P2pContactComponent implements OnInit {
  focus: any;
  focus1: any;
  contactForm: FormGroup;

  constructor(private builder: FormBuilder, private azureSevice: AzureService, private router: Router) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required]),
      program: null,
      phone: null,
      greatestChallenge: null,
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.azureSevice.postData(this.contactForm.value).subscribe({
      next: (v) => this.routeResult("success", "Successful call"),
      error: (e) => this.routeResult("failure", e.message),
    })

  }

  routeResult(result: string, message: string) {
    console.log(message)
    this.router.navigate(["/contact", result]);
  }

}
