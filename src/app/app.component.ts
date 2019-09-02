import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TopTrack';
  constructor(private router: Router) { }

  moveToListen($event: any) {
    console.log('Event happened:', $event.target.innerHTML);
    const pageToGoTo = $event.target.innerHTML;
    if (pageToGoTo === "Main page") {
      this.router.navigateByUrl('/listen');
    }
    if (pageToGoTo === "Link a song") {
      this.router.navigateByUrl('/link');
    }




  }
}
