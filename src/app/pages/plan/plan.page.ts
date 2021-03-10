import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-plan',
    templateUrl: './plan.page.html',
    styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
    img = 'assets/images/top.png';
    list = [
        {
            img: 'assets/images/sport/1.jpg',
            title: 'Interval Run',
            intro: 'Next Workout ● Today 40 mins',
            date: '21 August 2022 at 8:19pm',
        },
        {
            img: 'assets/images/sport/2.jpg',
            title: 'Workouts Schedule',
            intro: '3 Workouts Remaing This Week',
            date: '21 August 2022 at 8:19pm',
        },
        {
            img: 'assets/images/sport/3.jpg',
            title: 'Interval Run',
            intro: 'Next Workout ● Today 40 mins',
            date: '21 August 2022 at 8:19pm',
        },
        {
            img: 'assets/images/sport/4.jpg',
            title: 'Rope skipping',
            intro: 'Next Workout ● Today 40 mins',
            date: '21 August 2022 at 8:19pm',
        },
        {
            img: 'assets/images/sport/5.jpg',
            title: 'Muscular Training',
            intro: 'Next Workout ● Today 40 mins',
            date: '21 August 2022 at 8:19pm',
        },
        {
            img: 'assets/images/sport/6.jpg',
            title: 'Bike',
            intro: 'Next Workout ● Today 40 mins',
            date: '21 August 2022 at 8:19pm',
        }];

    constructor() {
    }

    ngOnInit() {
    }

}
