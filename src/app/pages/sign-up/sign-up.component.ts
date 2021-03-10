import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {timer} from 'rxjs';
import {AlertProvider, LoadingProvider} from '../../providers';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  lForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loadingProvider: LoadingProvider,
              private alertProvider: AlertProvider,
              public auth: AuthService,
              private router: Router) {
      this.lForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(6)]],
          pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
          pwd2: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
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

  Account() {
    this.router.navigateByUrl('/login');
 }

}
