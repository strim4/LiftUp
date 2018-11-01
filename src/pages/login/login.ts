import { Component } from '@angular/core';

import {
  Alert,
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  NavParams
  } from 'ionic-angular';

  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
public loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController,public authProvider: AuthProvider,formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: [
      '',
      Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
      ]
      });
  }

  goToSignup():void {
    this.navCtrl.push('SignupPage');
    }
    goToResetPassword():void {
    this.navCtrl.push('ResetPasswordPage');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
