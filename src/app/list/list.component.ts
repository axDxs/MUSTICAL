import { Component, OnInit } from '@angular/core';
import { DataTransferServiceService } from '../data-transfer-service.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  audioObj =new Audio();
  
  files=[
    {
    url :"./assets/songs/song1/mp3",
    name :'Heart of life'
   },
   {
     url :"./assets/songs/song2/mp3",
     name :"New Light"
   }

  ];
  openfile(url: any){
    console.log(url);
    
  }

  pause()
  {
    console.log('clicked pause button')
  }

  previous(){
    console.log('clicked previous button')
  }

  play(){
    console.log('Clicked Play button');
    
  }


  next(){
    console.log('clicked next button')
  }


  stop(){
    console.log('clicked stop button')
  }

  
  message: any=[]
  finaldata: any
  constructor(private data: DataTransferServiceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.message = this.data.setList()
    console.log("in list component message is", this.message)

    while(this.message.length < 7){
      this.message.push("null");
    }

    let body = {
      tag1:this.message[0],
      tag2:this.message[1],
      tag3:this.message[2],
      tag4:this.message[3],
      tag5:this.message[4],
      tag6:this.message[5],
      tag7:this.message[6],
    }
    console.log(body)
    this.http.post('http://localhost:8000/list',body).subscribe( res =>{
      console.log(Object.keys(res).length)
      if(Object.keys(res).length != 0){
        this.finaldata = res;
        console.log("Final data is",this.finaldata)
      }
      else
        alert("No Playlist found for you")
    })
  }


}
