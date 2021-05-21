import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/Shared/services/log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ErrorAuth: boolean
  loginForm :FormGroup
  constructor(private fb:FormBuilder,
    private logInService :LogInService,
    private router : Router
    ) { }

  ngOnInit(): void {
    const currentEmployee = this.logInService.currentEmployee
    if(currentEmployee){
      this.router.navigate(["/home/suppliers"])

    }
    this.buildForm();
  }

  buildForm(){
    this.loginForm = this.fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required],
    })
  }
  logIn(){
    const fd = new FormData();
    fd.append("username",this.loginForm.controls["username"].value )
    fd.append("password", this.loginForm.controls["password"].value)
    this.logInService.LogIn(fd).subscribe(data=>{
      this.ErrorAuth =false

      this.router.navigate(["/home/suppliers"])
    }, error=>{
        this.ErrorAuth =true
    })
  }
}
