

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Medi } from '../model/medi/medi.model';

@Injectable()
export class MediListService {

    private mediListRef = this.afd.list<Medi>('medi-list');

    constructor(private afd: AngularFireDatabase) { }

    getMediList() {
        return this.mediListRef;
    }

    addMedication(medi: Medi) {
        return this.mediListRef.push(medi);
       // this.afd.list('/medis-list/').push(medi);
    }

    updateNote(medi: Medi) {
        return this.mediListRef.update(medi.key, medi);
    }

    removeNote(medi: Medi) {
        return this.mediListRef.remove(medi.key);
    }
}
