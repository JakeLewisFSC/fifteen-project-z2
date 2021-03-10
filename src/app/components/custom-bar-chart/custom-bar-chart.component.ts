import {Component} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
    selector: 'custom-bar-chart',
    templateUrl: './custom-bar-chart.component.html',
    styleUrls: ['./custom-bar-chart.component.scss'],
})
export class CustomBarChartComponent {
    public barChartOptions: ChartOptions = {
        responsive: true,
        scales: {xAxes: [{}], yAxes: [{}]},
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: Label[] = ['6AM', '8AM', '10AM', '11AM', '1PM', '2PM', '3PM'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];

    public barChartData: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Rest'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Stress'}
    ];

    constructor() {
    }
}
