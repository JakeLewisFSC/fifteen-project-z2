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

// Devices
export function updateNameTime(name:string, time:string){
  __FruitName = name;
  __time = time;
}

export var __humidity;
export function set_humidity(item:string){
  __humidity = item;
}
export var __index;
export function set_index(item:string){
  __index = item;
}
export var __raw;
export function set_raw(item:string){
  __raw = item;
}
export var __resistance;
export function set_resistance(item:string){
  __resistance = item;
}
export var __temperature;
export function set_temperature(item:string){
  __temperature = item;
}
export var __time;
export function set_time(item:string){
  __time = item;
}
export var __unit;
export function set_unit(item:string){
  __unit = item;
}
export var __VOC;
export function set_VOC(item:string){
  __VOC = item;
}
export var __idx;
export function set_idx(item:string){
  __idx = item;
}
export var __FruitName;
export function set_fruitname(item:string){
  __FruitName = item;
}
export var __device;
export function set_device(item:string){
  __device = item;
}
export var __img;
export function set_img(item:string){
  __img = item;
}
export var __battery;
export function set_battery(item:string){
  __battery = item;
}

//

// freshness


//


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
