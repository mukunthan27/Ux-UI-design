import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  register = new FormGroup({
  name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
  age: new FormControl("", [Validators.required, Validators.pattern("(?:1[0-9]|[2-5][0-9]|60)$")]),
  aadhar: new FormControl("", [Validators.required, Validators.pattern("[0-9]{12}")]),
  phone: new FormControl("", [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]),
  address: new FormControl("", [Validators.required, Validators.pattern(".{10,}")])
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

  registerFunc(){
    this.service.getData(this.register.value)
    console.log("register",this.register.value)
    this.route.navigate(["submit"])
  }

}
