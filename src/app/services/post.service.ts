import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
// import { User } from 'firebase';
import { Router } from "@angular/router";


import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // user: User;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    public router: Router) {
    // this.afAuth.authState.subscribe(user => this.user = user);
  }

  getAllPosts(): Observable<any> {
    return this.afs.collection<any>('posts', ref => ref.orderBy('time', 'desc'))
      .snapshotChanges()
      .pipe(
        map((actions: any[]) => {
          return actions.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data(),
            };
          });
        })
      );
  }

  postsMessage(message: string, ownerName: string): void {
    this.afs.collection('posts').add({
      message,
      title: ownerName,
      // user_id: this.user.uid,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(res => console.log(res));
  }
}