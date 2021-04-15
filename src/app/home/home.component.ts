import { Component, OnInit } from '@angular/core';
import { DataTransferServiceService } from '../data-transfer-service.service'
import { Router } from '@angular/router'
// import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  arr: any=[]
  message: any=[]
  happy: any
  sad: any
  angry: any
  flirty: any
  inlove: any
  sleepy: any
  cranky: any
  constructor(private data: DataTransferServiceService, public router: Router) { }

  ngOnInit(): void {
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  cb1() {
    if ( this.happy == true ) {
      this.happy = false;
    }
    else{
      this.happy = true
    }
  }

  cb2() {
    if ( this.sad == true ) {
      this.sad = false;
    }
    else{
      this.sad = true
    }
  }

  cb3() {
    if ( this.angry == true ) {
      this.angry = false;
    }
    else{
      this.angry = true
    }
  }

  cb4() {
    if ( this.flirty == true ) {
      this.flirty = false;
    }
    else{
      this.flirty = true
    }
  }

  cb5() {
    if ( this.inlove == true ) {
      this.inlove = false;
    }
    else{
      this.inlove = true
    }
  }

  cb6() {
    if ( this.sleepy == true ) {
      this.sleepy = false;
    }
    else{
      this.sleepy = true
    }
  }

  cb7() {
    if ( this.cranky == true ) {
      this.cranky = false;
    }
    else{
      this.cranky = true
    }
  }

  submit(){
    if(this.happy == true){
      this.message.push("you feel Happy")
      // console.log(this.message)
      console.log("You feel Happy")
    }
    if(this.sad == true){
      this.message.push("you feel Sad")
      console.log("You feel Sad")
    }
    if(this.angry == true){
      this.message.push("you feel Angry")
      console.log("You feel Angry")
    }
    if(this.flirty == true){
      this.message.push("you feel Flirty")
      console.log("You feel Flirty")
    }
    if(this.inlove == true){
      this.message.push("you feel Romantic")
      console.log("You feel Romantic")
    }
    if(this.sleepy == true){
      this.message.push("you feel Sleepy")
      console.log("You feel Sleepy")
    }
    if(this.cranky == true){
      this.message.push("you feel Cranky")
      console.log("You feel Cranky")
    }
    console.log(this.message)
    this.data.getList(this.message);
    this.router.navigate(['list'])
  }
}
