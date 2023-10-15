import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { P2pYourStoriesLandingComponent } from './your-stories/p2p.your-stories.landing.component';
import { P2pYourStoriesInterviewsComponent } from './your-stories/interviews/p2p.your-stories.interviews.component';
import { P2pYourStoriesPodcastsComponent } from './your-stories/podcasts/p2p.your-stories.podcasts.component';

import { P2pPeacefulActivitiesComponent } from './peaceful-activities/p2p.peaceful-activities.component';

import { P2pPeaceOfAdviceComponent } from './peace-of-advice/p2p.peace-of-advice.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        P2pYourStoriesLandingComponent,
        P2pYourStoriesInterviewsComponent,
        P2pYourStoriesPodcastsComponent,
        P2pPeacefulActivitiesComponent,
        P2pPeaceOfAdviceComponent
    ]
})
export class P2pEmpoweringYouModule { }
