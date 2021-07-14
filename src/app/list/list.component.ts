import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: ServiceService) { }


  async ngOnInit(): Promise<any> {
    await this.myfun();
  }

  dataArr: any = [];
  obj: any = {};

  myfun() {
    this.service.arr.forEach((d: any) => {
      this.obj = { name: d.name, age: d.age, aadhar: d.aadhar, phone: d.phone, address: d.address }
      this.dataArr.push(this.obj)
    });
    console.log("list", this.dataArr);
  }
  delete(data: any) {
    Swal.fire({
      title: 'ALERT',
      text: 'Are you sure you want to Delete ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'Back'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataArr.splice(0, this.dataArr.length)
        this.service.arr.pop(data);
        this.service.arr.forEach((d: any) => {
          this.obj = { name: d.name, age: d.age, aadhar: d.aadhar, phone: d.phone, address: d.address }
          this.dataArr.push(this.obj)
        });
      }
      else {
        console.log("data not deleted")
      }
    });

  }
  edit(data: any) {
    this.service.updateData(data);
  }


}
