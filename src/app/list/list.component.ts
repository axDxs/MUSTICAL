import { Component, OnInit } from '@angular/core';
import { DataTransferServiceService } from '../data-transfer-service.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  audioObj =new Audio();
  audioEvents=[
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timupdate",
    "canplay",
    "loadmetadata",
    "loadstart"
  ];
  currentTime = "00:00:00";
  duration = "00:00:00";
  durationnum = 0;
  seek = 0;
  
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

  openfile(url: any){
    this.streamObserver(url).subscribe(event => {});
    console.log(url);
  }

  streamObserver(url:any){
    return new Observable(observer => {

      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
      

      const handler = (event:Event) =>{
        console.log(event) ;
        this.seek = this.audioObj.currentTime;
        this.durationnum = this.audioObj.duration;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
      }
      this.addEvent(this.audioObj,this.audioEvents,handler)

      
      return() =>{
        this.audioObj.pause();
        this.audioObj.currentTime=0;

        this.removeEvent(this.audioObj, this.audioEvents, handler);
      }
    })

  }

  setSeekTo(ev:any){
    this.audioObj.currentTime = ev.target.value;
  }

  addEvent(obj:any,events:any,handler:any){
    events.forEach((event:any) => {
      obj.addEventListener(event,handler);
    });
   }

  
  removeEvent(obj:any,events:any,handler:any){
     events.forEach((event:any) => {
       obj.removeEventListener(event, handler);
     });
  }

  setVolume(ev:any){
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value)
  }

  pause()
  {
    this.audioObj.pause()
    console.log('clicked pause button')
  }

  previous()
  {
    this.openfile(this.finaldata[--this.index].url)
  }

  play()
  {
    this.audioObj.play();
    console.log('Clicked Play button');
  }


  next()
  {
    this.openfile(this.finaldata[++this.index].url)
  }


  stop()
  {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('clicked stop button')
  } 

  timeFormat(time:any, format="HH:mm:ss"){
    const momentTime = time*1000;
    return moment.utc(momentTime).format(format);
  }

}
