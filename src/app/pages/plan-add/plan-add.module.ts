import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PlanAddPageRoutingModule} from './plan-add-routing.module';

import {PlanAddPage} from './plan-add.page';
import {SuccessModalComponent} from '../../components/success-modal/success-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlanAddPageRoutingModule
    ],
    declarations: [PlanAddPage, SuccessModalComponent],
    entryComponents: [SuccessModalComponent]
})
export class PlanAddPageModule {
}
