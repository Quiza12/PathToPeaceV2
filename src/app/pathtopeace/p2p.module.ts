import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { P2pEmpoweringYouModule } from './empowering-you/p2p.empowering-you.module';

import { P2pHomeComponent } from './home/p2p.home.component';
import { P2pCoachingComponent } from './coaching/p2p.coaching.component';
import { P2pAboutMeComponent } from './about-me/p2p.about-me.component';
import { P2pContactComponent } from './contact/p2p.contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        P2pEmpoweringYouModule
    ],
    declarations: [
        P2pHomeComponent,
        P2pCoachingComponent,
        P2pAboutMeComponent,
        P2pContactComponent
    ]
})
export class P2pModule { }
