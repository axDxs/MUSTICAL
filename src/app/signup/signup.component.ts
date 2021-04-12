import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public http: HttpClient, public router: Router ) { }

  name = new FormControl('');
  psw = new FormControl('');
  repsw = new FormControl('');

  ngOnInit(): void {
  }

  submit()
  {
    console.log("inside submit function")
    console.log(this.name.value,this.psw.value)
    if(this.repsw.value!=this.psw.value){
      alert("passwords do not match")
    }
    else{
      let body = {
        name:this.name.value,
        password:this.psw.value
      }
      console.log(body)
        this.http.post('http://localhost:8000/signUp',body).subscribe( res =>{
        console.log(res)
        if(res != null){
          alert("New User Created")
          this.router.navigate([''])
        }
        else
          alert("")
        })
      }
  }

}
