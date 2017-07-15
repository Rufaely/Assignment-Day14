import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { DataRequestService } from "../data-request.service";
@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  userData:FormGroup;

  constructor(private fb:FormBuilder,private dataRequestService:DataRequestService){
    this.userData = fb.group({
      "name":['',Validators.required],
      "email":['',Validators.required],
      "post": ['',Validators.compose([Validators.required,Validators.minLength(10)])]
    })
    this.userData.statusChanges.subscribe(data => console.log(data));
   }
  onSubmit() {
    console.log(this.userData.value);
  }
  onGetData(){
      this.dataRequestService.getData().subscribe(data => {
        console.log(data.name);
      this.userData.controls['name'].setValue(data.name);
      this.userData.controls['email'].setValue(data.email);
    });

    this.dataRequestService.getPost().subscribe(data =>{
       this.userData.controls['post'].setValue(data[0].body);
    });
}
  ngOnInit() {
  }

}
