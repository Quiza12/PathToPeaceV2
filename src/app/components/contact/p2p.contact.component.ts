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

  submitted = false;
  nameRequired = false;
  emailRequired = false;
  emailValidFormat = false;
  messageRequired = false;
  loading = false;

  nameCss = '';
  emailCss = '';
  messageCss = '';

  formControlSuccessCss = 'border-success';
  formControlFailureCss = 'border-danger';

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
    this.submitted = true;
    
    this.clearPreviousFormStyles();
    this.validateName();
    this.validateEmail();
    this.validateMessage();

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    this.azureSevice.postData(this.contactForm.value).subscribe({
      next: (v) => this.routeResult("success", "Successful call"),
      error: (e) => this.routeResult("failure", e.message),
    })
  }

  clearPreviousFormStyles() {
    this.nameRequired = false;
    this.emailRequired = false;
    this.emailValidFormat = false;
    this.messageRequired = false;

    this.nameCss = '';
    this.emailCss = '';
    this.messageCss = '';
  }
    
  validateName() {
    if (this.contactForm.controls['name'].errors && this.contactForm.controls['name'].errors.required == true) {
      this.nameRequired = true;
      this.nameCss = this.formControlFailureCss;
    } else {
      this.nameCss = this.formControlSuccessCss;
    }
  }

  validateEmail() {
    if (this.contactForm.controls['email'].errors) {
      if (this.contactForm.controls['email'].errors.required == true) {
        this.emailRequired = true;
        this.emailCss = this.formControlFailureCss;
      }
      if (this.contactForm.controls['email'].errors.email == true) {
        this.emailValidFormat = true;
        this.emailCss = this.formControlFailureCss;
      }
    } else {
      this.emailCss = this.formControlSuccessCss;
    }
  }

  validateMessage() {
    if (this.contactForm.controls['message'].errors && this.contactForm.controls['message'].errors.required == true) {
      this.messageRequired = true;
      this.messageCss = this.formControlFailureCss;
    } else {
      this.messageCss = this.formControlSuccessCss;
    }
  }

  routeResult(result: string, message: string) {
    console.log(message)
    this.router.navigate(["/contact", result]);
  }

}
