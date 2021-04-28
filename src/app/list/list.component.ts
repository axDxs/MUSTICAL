import { Component, OnInit } from '@angular/core';
import { DataTransferServiceService } from '../data-transfer-service.service'
import { HttpClient } from '@angular/common/http';
import { ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  audioObj =new Audio();
  // audioEvents=[
  //   "ended",
  //   "error",
  //   "play",
  //   "playing",
  //   "pause",
  //   "timupdate",
  //   "canplay",
  //   "loadmetadata",
  //   "loadstart"
  // ]
  
  index:any=0
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

  // streamObserver(url:any){
  //   return new Observable(observer => {

  //     this.audioObj.src = url;
  //     this.audioObj.load();
  //     this.audioObj.play();

  //     const handler = (event:Event) =>{
  //       console.log(event) ;

  //     }
  //     this.addEvent(this.audioObj,this.audioEvents,handler)

      
  //     return() =>{
  //       this.audioObj.pause();
  //       this.audioObj.currentTime=0;
  //     }
  //   })

  // }
  //  addEvent(obj,events,handler){

  //   events.forEach(event => {
  //     obj.addEventListener(event,handler);
  //   });
  //  }
  // removeEvent(obj,events,handler){
     
  // }
  // files=[
  //   {
  //   url :"./assets/songs/song1/mp3",
  //   name :'Heart of life'
  //  },
  //  {
  //    url :"./assets/songs/song2/mp3",
  //    name :"New Light"
  //  }

  // ];
  openfile(url: any){
     this.audioObj.src=url;
     this.audioObj.load();
     this.audioObj.play();
    //  this.streamObserver(url).subscribe(event => {});

    console.log(url);
    
  }

  pause()
  {
    this.audioObj.pause()
    console.log('clicked pause button')
  }

  previous()
  {
    if (this.index == 0)
    {
      this.index=this.finaldata.size()
    }
    this.openfile(this.finaldata[--this.index].url)
    console.log('clicked previous button')

  }

  play()
  {

    this.audioObj.play();
    console.log('Clicked Play button');
    
  }


  next()
  {
    this.openfile(this.finaldata[++this.index].url)
    // this.audioObj.pause(); 
    // this.finaldata[++this.index]
    // console.log('clicked next button',this.finaldata[this.index])
    // this.audioObj.play();
    // console.log(this.finaldata[0])
  }


  stop()
  {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('clicked stop button')
  } 

}
