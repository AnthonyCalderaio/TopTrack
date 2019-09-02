import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListenComponentComponent } from './listen-component/listen-component.component';
import { LinkSongComponentComponent } from './link-song-component/link-song-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';


// import { MaterialModule } from './material.module';


const appRoutes: Routes = [
  { path: 'listen', component: ListenComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListenComponentComponent,
    LinkSongComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
