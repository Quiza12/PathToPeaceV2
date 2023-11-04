import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AzureService } from '../../../shared/services/azure.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'p2p-app-coaching-apply',
    templateUrl: './p2p.coaching.apply.component.html',
    styleUrls: ['./p2p.coaching.programs.component.scss']
})

export class P2pCoachingApplyComponent implements OnInit {
  focus: any;
  focus1: any;
  coachingForm: FormGroup;
  program: string;

  programs = [
    {value: 'adult-deep-intensive', viewValue: 'Adult Program - Deep Intensive'},
    {value: 'adult-deep-rebound', viewValue: 'Adult Program - The Deep Rebound'},
    {value: 'adult-coaching-mentoring', viewValue: 'Adult Program - Integrative Coaching & Mentoring'},
    {value: 'child-mindfulness-intensive', viewValue: 'Child Program - Mindfulness Intensive'},
    {value: 'child-skill-builder', viewValue: 'Child Program - Skill Builder'},
    {value: 'child-coaching-mentoring', viewValue: 'Child Program - Integrative Coaching & Mentoring'}
  ];

  constructor(private builder: FormBuilder, private azureSevice: AzureService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.program = this.programs.find(p => p.value === this.activatedRoute.snapshot.paramMap.get("program")).viewValue;
    this.coachingForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: null,
      program: new FormControl(this.program, [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      greatestChallenge: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.coachingForm.value);
    this.azureSevice.postData(this.coachingForm.value).subscribe({
      next: (v) => this.routeResult("success", "Successful call"),
      error: (e) => this.routeResult("failure", e.message),
    })

  }

  routeResult(result: string, message: string) {
    console.log(message)
    this.router.navigate(["/contact", result]);
  }

}
