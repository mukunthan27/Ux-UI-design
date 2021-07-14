import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:ServiceService,private route: Router) { }

  ngOnInit(): void {
  }

  register = new FormGroup({
  name: new FormControl(this.service.updateObj.name, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
  age: new FormControl(this.service.updateObj.age, [Validators.required,Validators.pattern("(?:1[0-9]|[2-5][0-9]|60)$")]),
  aadhar: new FormControl(this.service.updateObj.aadhar, [Validators.required]),
  phone: new FormControl(this.service.updateObj.phone, [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]),
  address: new FormControl(this.service.updateObj.address, [Validators.required, Validators.pattern(".{10,}")])
  });

  get name() {
    return this.register.get("name")
  }
  get age() {
    return this.register.get("age")
  }
  get aadhar() {
    return this.register.get("aadhar")
  }
  get phone() {
    return this.register.get("phone")
  }
  get address() {
    return this.register.get("address")
  }

  array:any =[];
  updateFunc(){
    this.array.push(this.register.value);
    this.service.arr = this.service.arr.map((obj1:any) => this.array.find((obj2:any) => obj2.aadhar === obj1.aadhar) || obj1);
    this.route.navigate(["submit"])
  }

}
