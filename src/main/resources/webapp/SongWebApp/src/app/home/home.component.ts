import { Component } from '@angular/core';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <section>
      <form>
        <input type="text" placeholder="Search song...">
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  songs: any[] = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songs = this.songService.getSongs();
  }
}