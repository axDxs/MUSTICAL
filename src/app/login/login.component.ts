import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   uname:any;
   psw:any;
  submit()
  {
    console.log(this.uname,this.psw)
  }
}

// Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
    // if (event.target == modal) {
        // modal.style.display = "none";
    // }
// }
