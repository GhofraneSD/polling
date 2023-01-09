import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipboardNumbersService {

  private _phones = new BehaviorSubject<any>([]);
  readonly phones$ = this._phones.asObservable();


  constructor() { }

  public addNumbers(phones: any) {

    this._phones.next(this._phones.getValue().concat([phones]))
  }


}
