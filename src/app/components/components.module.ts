import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CustomFullSlidesComponent} from './custom-full-slides/custom-full-slides.component';
import {CustomLineChartComponent} from './custom-line-chart/custom-line-chart.component';
import {ChartsModule} from 'ng2-charts';
import {CustomWalkComponent} from './custom-walk/custom-walk.component';
import {NgxGaugeModule} from 'ngx-gauge';
import {CustomStepsComponent} from './custom-steps/custom-steps.component';
import {CustomBarChartComponent} from './custom-bar-chart/custom-bar-chart.component';
import {CustomTimelineComponent} from './custom-timeline/custom-timeline.component';
import {CustomPieChartComponent} from './custom-pie-chart/custom-pie-chart.component';
//import {CustomLineChartFatComponent} from './custom-line-chart-fat/custom-line-chart-fat.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        ChartsModule,
        NgxGaugeModule,
    ],
    declarations: [
        CustomFullSlidesComponent,
        CustomLineChartComponent,
        CustomWalkComponent,
        CustomStepsComponent,
        CustomBarChartComponent,
        CustomTimelineComponent,
        CustomPieChartComponent
    ],
    exports: [
        CustomFullSlidesComponent,
        CustomLineChartComponent,
        CustomWalkComponent,
        CustomStepsComponent,
        CustomBarChartComponent,
        CustomTimelineComponent,
        CustomPieChartComponent
    ],
    entryComponents: [],
})
export class ComponentsModule {
}
