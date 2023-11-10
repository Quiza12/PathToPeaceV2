import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { P2pHomeComponent } from './components/home/p2p.home.component';
import { P2pCoachingComponent } from './components/coaching/p2p.coaching.component';
import { P2pCoachingAdultProgramsComponent } from './components/coaching/programs/p2p.coaching.adult-programs.component';
import { P2pCoachingChildProgramsComponent } from './components/coaching/programs/p2p.coaching.child-programs.component';
import { P2pCoachingApplyComponent } from './components/coaching/programs/p2p.coaching.apply.component';
import { P2pAboutMeComponent } from './components/about-me/p2p.about-me.component';
import { P2pContactComponent } from './components/contact/p2p.contact.component';
import { P2pContactResultComponent } from './components/contact/p2p.contact.result.component';
import { P2pYourStoriesLandingComponent } from './components/empowering-you/your-stories/p2p.your-stories.landing.component';
import { P2pYourStoriesPodcastsComponent } from './components/empowering-you/your-stories/podcasts/p2p.your-stories.podcasts.component';
import { P2pYourStoriesInterviewsComponent } from './components/empowering-you/your-stories/interviews/p2p.your-stories.interviews.component';
import { P2pYourStoriesInterviewsViewComponent } from './components/empowering-you/your-stories/interviews/p2p.your-stories.interviews.view.component';
import { P2pPeacefulActivitiesComponent } from './components/empowering-you/peaceful-activities/p2p.peaceful-activities.component';
import { P2pPeaceOfAdviceComponent } from './components/empowering-you/peace-of-advice/p2p.peace-of-advice.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                          component: P2pHomeComponent },
    { path: 'coaching',                      component: P2pCoachingComponent },
    { path: 'coaching/adult-programs',       component: P2pCoachingAdultProgramsComponent },
    { path: 'coaching/child-programs',       component: P2pCoachingChildProgramsComponent },
    { path: 'coaching/apply/:program',       component: P2pCoachingApplyComponent },
    { path: 'about',                         component: P2pAboutMeComponent },
    { path: 'contact',                       component: P2pContactComponent },
    { path: 'contact/:result',               component: P2pContactResultComponent },
    { path: 'your-stories',                  component: P2pYourStoriesLandingComponent },
    { path: 'your-stories/podcasts',         component: P2pYourStoriesPodcastsComponent },
    { path: 'your-stories/interviews',       component: P2pYourStoriesInterviewsComponent },
    { path: 'your-stories/interviews/:id',   component: P2pYourStoriesInterviewsViewComponent },
    { path: 'peaceful-activities',           component: P2pPeacefulActivitiesComponent },
    { path: 'peace-of-advice',               component: P2pPeaceOfAdviceComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
