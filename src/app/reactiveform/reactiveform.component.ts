import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    firstname: [''],
    lastname : [''],
    email : ['']
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
