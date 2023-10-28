import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p2p-app-coaching-apply',
    templateUrl: './p2p.coaching.apply.component.html',
    styleUrls: ['./p2p.coaching.programs.component.scss']
})

export class P2pCoachingApplyComponent implements OnInit {
  focus: any;
  focus1: any;

  programs = [
    {value: 'adult-0', viewValue: 'Adult Program - Deep Intensive'},
    {value: 'adult-1', viewValue: 'Adult Program - The Deep Rebound'},
    {value: 'adult-2', viewValue: 'Adult Program - Integrative Coaching & Mentoring'},
    {value: 'child-0', viewValue: 'Child Program - Mindfulness Intensive'},
    {value: 'child-1', viewValue: 'Child Program - Skill Builder'},
    {value: 'child-2', viewValue: 'Child Program - Integrative Coaching & Mentoring'}
  ];

  constructor() { }

  ngOnInit() {}

}
