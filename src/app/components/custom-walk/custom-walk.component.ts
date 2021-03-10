import {Component} from '@angular/core';

@Component({
    selector: 'custom-walk',
    templateUrl: './custom-walk.component.html',
    styleUrls: ['./custom-walk.component.scss'],
})
export class CustomWalkComponent {
    gaugeType = 'full';
    gaugeValue = 70.7;
    gaugeLabel = 'Month';
    gaugeAppendText = 'min';

    thresholdConfig = {
        0: {color: 'green'},
        40: {color: 'lightskyblue'},
        75.5: {color: 'red'}
    };

    list = [
        {icon: 'bicycle', color: 'primary', title: '30 min Activity 1', date: 'Start 10:10 AM'},
        {icon: 'ios-walk', color: 'tertiary', title: '30 min Activity 2', date: 'Start 10:40 AM'},
        {icon: 'stats', color: 'tertiary', title: '60 min Activity 3', date: 'Start 6:10 PM'}
    ];

    constructor() {
    }

}
