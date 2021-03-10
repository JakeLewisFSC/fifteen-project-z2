import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-notice',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
    list = [
        {title: 'Alert 1', intro: 'Example of how alerts will display.'},
        {title: 'Alert 2', intro: 'Example of how alerts will display.'},
        {title: 'Alert 3', intro: 'Example of how alerts will display.'}
    ];

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.list = [
            {title: 'Alert 1', intro: 'Example of how alerts will display.'},
            {title: 'Alert 2', intro: 'Example of how alerts will display.'},
            {title: 'Alert 3', intro: 'Example of how alerts will display.'}
        ];
    }

    onClose() {
        this.modalCtrl.dismiss();
    }


}
