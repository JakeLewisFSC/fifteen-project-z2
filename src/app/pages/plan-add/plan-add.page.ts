import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SuccessModalComponent} from '../../components/success-modal/success-modal.component';
import {timer} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-plan-add',
    templateUrl: './plan-add.page.html',
    styleUrls: ['./plan-add.page.scss'],
})
export class PlanAddPage implements OnInit {
    selectCate = 'bicycle';
    cateList = ['bicycle', 'walk', 'body', 'american-football'];

    constructor(private modalCtrl: ModalController,
                private router: Router) {
    }

    ngOnInit() {
    }

    onCate(cate) {
        this.selectCate = cate;
    }

    async onSave() {
        const modal = await this.modalCtrl.create({
            component: SuccessModalComponent,
        });
        await modal.present();

        timer(2000).subscribe(r => {
            modal.dismiss().then(() => this.router.navigateByUrl('/tabs/statistics'));
        });
    }

}
