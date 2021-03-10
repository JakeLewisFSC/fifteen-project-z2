import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import {NgxGaugeModule} from 'ngx-gauge';
import {ChartsModule} from 'ng2-charts';
import {ComponentsModule} from '../../components/components.module';
import {UnityComponent} from '../../unity/unity.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatisticsPageRoutingModule,
        NgxGaugeModule,
        ChartsModule,
        ComponentsModule,
        
    ],
  declarations: [UnityComponent,StatisticsPage]
})
export class StatisticsPageModule {}
