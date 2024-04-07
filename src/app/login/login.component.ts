import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  isSubmitted = false
  
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  get formControl(){
    return this.loginForm.controls
  }

  onSubmit(){
    this.isSubmitted = true
    if(this.loginForm.invalid) return

    alert(`email: ${this.formControl['email'].value},
      password: ${this.formControl['password'].value}`)
  }
}
