import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { P2pCoachingComponent } from './p2p.coaching.component';
import { P2pCoachingAdultProgramsComponent } from './programs/p2p.coaching.adult-programs.component';
import { P2pCoachingChildProgramsComponent } from './programs/p2p.coaching.child-programs.component';
import { P2pCoachingApplyComponent } from './programs/p2p.coaching.apply.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        P2pCoachingComponent,
        P2pCoachingAdultProgramsComponent,
        P2pCoachingChildProgramsComponent,
        P2pCoachingApplyComponent
    ]
})
export class P2pCoachingModule { }
