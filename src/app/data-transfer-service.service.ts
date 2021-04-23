import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class DataTransferServiceService {

  arr: any;

  private data = new BehaviorSubject<Array<string>>([])
  // currentMessage = this.data.asObservable();

  getList(message:any){
    this.arr = message;
    console.log(this.arr)
  }

  setList() {
    this.data.next(this.arr);
    return this.arr
  }

  constructor() { }
}
