import {Component, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {ModalController} from '@ionic/angular';
//import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import {ActivatedRoute} from '@angular/router';
//
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
//
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export var __email ="";
export var __id = ""
export function setEmail(email:string){
    __email = email;
}
export function setid(id:string){
    __id = id;
}


@Component({
    selector: 'app-setting',
    templateUrl: './change-password.page.html',
    styleUrls: ['./change-password.page.scss'],
    encapsulation: ViewEncapsulation.None
})


export class ChangePasswordPage implements OnInit {


    constructor(

        ) {
    }

  ngOnInit() {
  
  }


}
