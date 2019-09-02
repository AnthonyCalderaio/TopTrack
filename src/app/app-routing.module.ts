import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListenComponentComponent } from './listen-component/listen-component.component';
import { LinkSongComponentComponent } from './link-song-component/link-song-component.component';

const routes: Routes = [
  { path: 'listen', component: ListenComponentComponent },
  { path: 'link', component: LinkSongComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
