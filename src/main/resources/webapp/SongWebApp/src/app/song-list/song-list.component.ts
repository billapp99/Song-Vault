import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Song } from '../models/song';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
  <h1>Song List</h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Genre</th>
        <th>Release Date</th>
        <th>Cover Art</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let song of songs">
        <td>{{ song.title }}</td>
        <td>{{ song.artist }}</td>
        <td>{{ song.genre}}</td>
        <td>{{ song.releaseDate }}</td>
        <td>{{song.coverArt}}</td>
      </tr>
    </tbody>
  </table>
</div>
  `,
  styleUrl: './song-list.component.css'
})

export class SongListComponent {
  @Input() songList: Song[] = [];
  songs:Song[] = [];

  public results = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.getAll()
    console.log(this.songs)
  }
  getAll() {
    this.songService.getSongs().subscribe((results: Song[]) => {
      this.songs = results;
    })
  }
}
