import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpRoutingModule } from './sign-up-routing.module';

import { SignUpComponent } from './sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUpRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [SignUpComponent]
})
export class SignUpComponentModule {}
