import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
    list = [
        {
            title: 'healthy Living',
            intro: '15 / 15 moto 1,',
            intro1: 'sub moto',
            img: 'assets/images/1.png'
        },
        {
            title: 'healthy sleep',
            intro: '15 / 15 moto 2,',
            intro1: 'sub moto',
            img: 'assets/images/2.png'
        },
        {
            title: 'fresh food & water',
            intro: '15 / 15 moto 3,',
            intro1: 'sub moto',
            img: 'assets/images/3.png'
        },
        {
            title: 'Responsive Design',
            intro: '15 / 15 moto 4,',
            intro1: 'sub moto',
            img: 'assets/images/4.png'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
