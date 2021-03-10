import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ChangePasswordPageRoutingModule} from './change-password-routing.module';

import {ChangePasswordPage} from './change-password.page';
import {ComponentsModule} from '../../components/components.module';
import {NoticeComponent} from '../notice/notice.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ChangePasswordPageRoutingModule,
      //ComponentsModule
  ],
declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {
}
