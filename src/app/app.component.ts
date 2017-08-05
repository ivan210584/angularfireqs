import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject'

import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  //Comentario de prueba para github

  /*
  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(db: AngularFireDatabase) {
    this.sizeSubject = new Subject();
    this.items = db.list('/items', {
      query:{
        orderByChild: 'size',
        equalTo: this.sizeSubject

      }
    });
  }

  filterBy(size: string){
    this.sizeSubject.next(size);
  }
  */

  //Código para autenticarse
  constructor(public authService: AuthService){}

  login(){
      this.authService.login();
  }

  logout(){
      this.authService.logout();
  }

  

  

}
//Para corregir el error del polyfill:
//npm install promise-polyfill --save-exact
//0esWF8iZ2JdJfOai4G4gXOmIbOE2