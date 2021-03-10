import {Component, QueryList, ViewChildren} from '@angular/core';

import {IonRouterOutlet, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ToastProvider} from './providers';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    lastBackPress = 0;
    timePeriodToExit = 2000;
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private toastProvider: ToastProvider,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.backButton();
        });
    }

    backButton() {
        this.platform.backButton.subscribeWithPriority(1, () => {
            this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
                if (this.router.url === '/home' || this.router.url === '' || this.router.url.toLowerCase().includes('tabs')) {
                    if (new Date().getTime() - this.lastBackPress < this.timePeriodToExit) {
                        navigator['app'].exitApp();
                    } else {
                        this.toastProvider.show('Press back again to exit App');
                        this.lastBackPress = new Date().getTime();
                    }
                } else if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                }
            });
        });
    }
}
