import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../model/country';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  countries: Country[] = [
    new Country(1, 'Nepal'),
    new Country(2, 'USA'),
    new Country(3, 'Canada'),
    new Country(4, 'Australia')
  ];

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    name: ['',[ Validators.required, Validators.minLength(3)] ],
    email : ['', [ Validators.required, Validators.email]],
    number: ['',  
    [
      Validators.required, 
      Validators.minLength(10), 
      Validators.maxLength(10)
    ]
  ],
    countryId: ['', [Validators.required]],
    message : ['', [Validators.required]]
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
  get Control(){
    return this.loginForm.controls;
  }
}
