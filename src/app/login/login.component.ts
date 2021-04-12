import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }
  // 

  name = new FormControl('');
  psw = new FormControl('');

  ngOnInit(): void {
  }
   
  submit()
  {
    console.log("inside submit function")
    console.log(this.name.value,this.psw.value)
    let body = {
      name:this.name.value,
      password:this.psw.value
    }
    this.http.post('http://localhost:8000/login',body).subscribe( res =>{
      console.log(Object.keys(res).length)
      if(Object.keys(res).length != 0){
        this.router.navigate(['home'])
      }
      else
        alert("Invalid Credentials")
    })
  }
}

