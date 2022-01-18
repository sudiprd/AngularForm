import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hobbies } from '../model/hobbies';


@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  isSelected = false;

  // hobbieList: Hobbies[] = [
  //     {id: 1, name : " Playing "},
  //     {id: 2, name : " Reading "},
  //     {id: 3, name : " Music "},
  //     {id: 4, name : " Writing "},
  //     {id: 5, name : " Sleeping "},
  // ];

  hobbieList: Hobbies[] = [
    new Hobbies(1, 'Singing'),
    new Hobbies(2, 'Reading'),
    new Hobbies(3, 'Writing'),
    new Hobbies(4, 'Sleeping'),
    new Hobbies(5, 'Dancing')
  ];

  user = {
    firstname : '',
    lastname : '',
    gender : '  ',
    email: ' ',
    hobbies : 0
  };

  constructor() { }

  ngOnInit(): void {
    this.hobbieList
  }
  onSubmit(loginForm : NgForm) {
    let obj = loginForm.value;
    console.log(obj);
    console.log(JSON.stringify(obj));
  }
  
}
