import { Component, OnInit } from '@angular/core';
// import {MatToolbarModule} from '@angular/material/toolbar';


import { AudioService } from "../services/audio.service";
import { CloudService } from "../services/cloud.service";
import { StreamState } from "../interfaces/stream-state";


@Component({
  selector: 'app-listen-component',
  templateUrl: './listen-component.component.html',
  styleUrls: ['./listen-component.component.css']
})
export class ListenComponentComponent implements OnInit {
  constructor(
    public audioService: AudioService,
    public cloudService: CloudService
  ) {
    // get media files
    // cloudService.getFiles().subscribe(files => {
    //   this.files = files;
    // });

    // // listen to stream state
    // this.audioService.getState().subscribe(state => {
    //   this.state = state;
    // });


  }
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};

  // openFile(file, index) {
  //   this.currentFile = { index, file };
  //   this.audioService.stop();
  //   this.playStream(file.url);
  // }

  // playStream(url) {
  //   this.audioService.playStream(url).subscribe(events => {
  //     // listening for fun here
  //   });
  // }

  // pause() {
  //   this.audioService.pause();
  // }

  // play() {
  //   this.audioService.play();
  // }

  // stop() {
  //   this.audioService.stop();
  // }

  // previous() {
  //   const index = this.currentFile.index - 1;
  //   const file = this.files[index];
  //   this.openFile(file, index);
  // }

  // isFirstPlaying() {
  //   return this.currentFile.index === 0;
  // }

  // isLastPlaying() {
  //   return this.currentFile.index === this.files.length - 1;
  // }

  // next() {
  //   const index = this.currentFile.index + 1;
  //   const file = this.files[index];
  //   this.openFile(file, index);
  // }

  // onSliderChangeEnd(change) {
  //   this.audioService.seekTo(change.value);
  // }

  ngOnInit() {
    console.log('HELLO')

  }

  



}
