import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SettingPageRoutingModule} from './setting-routing.module';

import {SettingPage} from './setting.page';
import {ComponentsModule} from '../../components/components.module';
import {NoticeComponent} from '../notice/notice.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SettingPageRoutingModule,
        ComponentsModule
    ],
    declarations: [SettingPage, NoticeComponent],
    entryComponents: [NoticeComponent]
})
export class SettingPageModule {
}
