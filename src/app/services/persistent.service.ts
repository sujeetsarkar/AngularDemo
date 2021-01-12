import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistentService {

  public myData: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() { }

  setDate(data) {
    this.myData.next(data);
  }
}
