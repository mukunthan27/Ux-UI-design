import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  arr: any = [];

  updateObj:any = [];

  constructor() { }

  async getData(value:any){
    await this.arr.push(value)
    console.log("service",value,"service array",this.arr);
    
  }
  updateData(value:any){
     this.updateObj = value;
  }


}
