import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { fadeInAnimation } from '../animations/index'

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //animations: [moveIn],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  //user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private router: Router) { 
    //this.user = afAuth.authState;
    this.afAuth.authState.subscribe(auth => {
      if (auth){
        this.router.navigateByUrl('members');
      }
    });
  }

  loginFb(){
    //this.afAuth.auth.signInWithPopup(new firebase.)
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((success) => {
      this.router.navigateByUrl('/members');
    }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle(){
    //this.afAuth.auth.signInWithPopup(new firebase.)
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((success) => {
      this.router.navigateByUrl('/members');
    }).catch(
      (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
