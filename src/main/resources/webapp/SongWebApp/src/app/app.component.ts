import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { SongListComponent } from "./Song-List/song-list.component";
import { AddEditComponent } from "./add-edit/add-edit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    SongListComponent,
    AddEditComponent
],
  template: `
    <main>
      <header class="Song Vault logo">
      <img class="vault-logo" src="/assets/song-vault-logo.png" alt="Song Vault" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
        <app-song-list></app-song-list>
        <app-add-edit></app-add-edit>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SongVault';
}
