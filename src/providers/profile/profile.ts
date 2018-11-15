import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User, AuthCredential } from '@firebase/auth-types';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class ProfileProvider {
  public userProfile: Reference;
  public currentUser: User;
  
  constructor() {
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`); // User is signed in.
        
      } 
    });
    }

  getUserProfile(): Reference {
    return this.userProfile;
    }

    updateName(firstName: string, lastName: string): Promise<any> {
      return this.userProfile.update({ firstName, lastName });
      }

      updateDOB(birthDate:string): Promise<any> {
        return this.userProfile.update({ birthDate });
        }

        

}
