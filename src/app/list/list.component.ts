import { Component, OnInit } from '@angular/core';
import { DataTransferServiceService } from '../data-transfer-service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  message: any=[]
  constructor(private data: DataTransferServiceService) { }

  ngOnInit(): void {
    // this.data.currentMessage.subscribe(message => this.message = message)
    // 

    this.message = this.data.setList()
    console.log("in list component message is", this.message)
  }


}
