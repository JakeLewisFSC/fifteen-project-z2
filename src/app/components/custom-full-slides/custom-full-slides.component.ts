import {Component, Input, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'custom-full-slides',
    templateUrl: './custom-full-slides.component.html',
    styleUrls: ['./custom-full-slides.component.scss']
})
export class CustomFullSlidesComponent {
    img = 'assets/images/bg.png';
    @Input() list = [];
    @ViewChild(IonSlides, {static: true}) slides: IonSlides;

    constructor(private router: Router) {
    }

    onNext() {
        this.slides.isEnd().then(r => {
            if (!r) {
                this.slides.slideNext(1000);
            } else {
                this.router.navigateByUrl('/home');
            }
        });
    }

    onSkip() {
        this.router.navigateByUrl('/home');
    }

}
