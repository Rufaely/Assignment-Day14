import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
@Component({
  selector: 'app-data-driven2',
  templateUrl: './data-driven2.component.html',
  styles: []
})
export class DataDriven2Component implements OnInit {

  userData:FormGroup;
  constructor(private fb:FormBuilder) {
    this.userData = fb.group({
      "id":[''],
      "name":['',Validators.required],
      "email":['',Validators.required],
      "address": fb.group({
        "street":['',Validators.required],
        "zipcode":['',[Validators.maxLength(10),Validators.required]],
        "city":['',Validators.required],
        "geo":fb.group({
          "lat":['',Validators.required],
          "lng":['',Validators.required]
      })
      }),
      "phone":['',Validators.required],
      "website":['',Validators.required],
      "company":fb.group({
        "name":['',Validators.required],
        "catchPhrase":['',Validators.required],
        "bs":['',Validators.required]
    })
    })
   }

  ngOnInit() {
  }

}
