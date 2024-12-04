import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GhostloadingService {
  loaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loader$$ = this.loaded$.asObservable();
  constructor() { }

  setLoader(value: boolean) {
    this.loaded$.next(value);
  }

}
