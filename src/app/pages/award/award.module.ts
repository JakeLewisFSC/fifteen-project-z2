import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwardPageRoutingModule } from './award-routing.module';

import { AwardPage } from './award.page';
import {NgxGaugeModule} from 'ngx-gauge';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AwardPageRoutingModule,
        NgxGaugeModule
    ],
  declarations: [AwardPage]
})
export class AwardPageModule {}
