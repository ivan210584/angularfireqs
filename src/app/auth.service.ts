import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth){
    this.user = afAuth.authState;
    /*this.user.subscribe(auth=>{
      if (auth){
        //alert('ya se firmo')
        console.log(this.user)
      }
    })*/
  }

  login(){
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
