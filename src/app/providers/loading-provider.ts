import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {SpinnerTypes} from '@ionic/core';


/**
 * @description
 */
@Injectable({providedIn: 'root'})
export class LoadingProvider {

    constructor(private loadingCtrl: LoadingController) {
    }

    async create(type: SpinnerTypes = 'bubbles') {
        const loader = await this.loadingCtrl.create({
            message: 'Please wait...',
            spinner: type,
            duration: 5000,
            showBackdrop: true,
        });
        return loader;
    }
    async create1() {
        const loader = await this.loadingCtrl.create({
            message: 'Please wait...',
            duration: 5000,
            showBackdrop: false,
        });
        return loader;
    }

    async presentWithOptions() {
        const loader = await this.loadingCtrl.create({
            spinner: 'bubbles',
            duration: 5000,
            message: 'Please wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        return loader;
    }
}
