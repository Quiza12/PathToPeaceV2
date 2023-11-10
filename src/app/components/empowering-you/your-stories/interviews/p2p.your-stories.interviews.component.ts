import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PersonalExperience } from '../../../../classes/personal-experience';
import { PersonalExperienceEntries } from '../../../../data/personal-experience-entries.service';

@Component({
    selector: 'p2p-app-your-stories-interviews',
    templateUrl: './p2p.your-stories.interviews.component.html',
    styleUrls: ['./p2p.your-stories.interviews.component.scss']
})

export class P2pYourStoriesInterviewsComponent implements OnInit {
  focus: any;
  focus1: any;

  personalExperiences: PersonalExperience[];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.personalExperiences = new PersonalExperienceEntries().personalExperienceEntries;
  }

  santiseUrl(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
