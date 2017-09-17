import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  public list(database: string) {
    return new Promise((resolve, reject) => {
      return this.angularFireDatabase.object(database).subscribe(response => {
        resolve(response);
      });
    });
  }

  public push(database: string, data) {
    return this.angularFireDatabase.database.ref(database).push(data);
  }
}
