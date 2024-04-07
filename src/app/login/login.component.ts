import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  isSubmitted = false
  returnUrl = ''
  
  constructor(private formBuilder:FormBuilder, 
    private userService:UserService, 
    private activatedRoute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']
  }

  get formControl(){
    return this.loginForm.controls
  }

  onSubmit(){
    this.isSubmitted = true
    if(this.loginForm.invalid) return
    
    this.userService.login({email:this.formControl['email'].value, password: this.formControl['password'].value})
    .subscribe(() => {
      this.router.navigateByUrl('http://localhost:4200/employee-list')
    })
  }
}
