import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {timer} from 'rxjs';
import {AlertProvider, LoadingProvider} from '../../providers';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

export var __email ="";
export var __id = ""
export function setEmail(email:string){
    __email = email;
}
export function setid(id:string){
    __id = id;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    lForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider,
                public auth: AuthService,
                private router: Router) {
        this.lForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
        });
    }

    ngOnInit() {
    }

    async onLogin() {
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.router.navigateByUrl('/tabs');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

    onStart() {
        this.router.navigateByUrl('/sign-up');
    }

}
