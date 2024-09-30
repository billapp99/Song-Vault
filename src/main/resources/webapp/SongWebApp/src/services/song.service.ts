import { Injectable } from '@angular/core';
import { HomeComponent } from '../app/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private songs = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      album: 'Album 1',
      year: 2020,
      cover: 'https://example.com/cover1.jpg'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      album: 'Album 2',
      year: 2021,
      cover: 'https://example.com/cover2.jpg'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      album: 'Album 3',
      year: 2022,
      cover: 'https://example.com/cover3.jpg'
    }
  ];

  getSongs() {
    return this.songs;
  }
}
