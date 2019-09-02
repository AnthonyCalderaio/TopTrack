import { Component, OnInit } from '@angular/core';
// import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-listen-component',
  templateUrl: './listen-component.component.html',
  styleUrls: ['./listen-component.component.css']
})
export class ListenComponentComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
    console.log('HELLO')
    
  }

  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state;
  currentFile: any = {};

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }

}
