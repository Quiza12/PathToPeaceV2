import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalExperience } from '../../../../classes/personal-experience';
import { PersonalExperienceEntries } from '../../../../data/personal-experience-entries.service';

@Component({
    selector: 'p2p-app-your-stories-interviews-view',
    templateUrl: './p2p.your-stories.interviews.view.component.html',
    styleUrls: ['./p2p.your-stories.interviews.component.scss']
})

export class P2pYourStoriesInterviewsViewComponent implements OnInit {
  focus: any;
  focus1: any;

  personalExperiences: PersonalExperience[];
  curPersonalExperience: PersonalExperience;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.personalExperiences = new PersonalExperienceEntries().personalExperienceEntries;
    this.loadPersonalExperienceForView(this.activatedroute.snapshot.paramMap.get("id"));
  }

  loadPersonalExperienceForView(id: string) {
    for (var i = 0; i <= this.personalExperiences.length; i++) {
        if (this.personalExperiences[i].id === id) {
          this.curPersonalExperience = this.personalExperiences[i];
      }
    }
  }

}
