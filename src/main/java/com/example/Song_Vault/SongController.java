package com.example.Song_Vault;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Song_Vault.vault.Song;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/songs")
public class SongController {
    @Autowired
    private SongService songService;

    @GetMapping
    public Iterable<Song> getAllSongs() {
        return songService.getAllSongs();
    }

    @GetMapping("/{id}")
    public Song getSongById(@PathVariable Long id) {
        return songService.getSongById(id);
    }

    @GetMapping("/search")
    public List<Song> searchSongs(@RequestParam String query) {
        return songService.searchSongs(query);
    }

    @GetMapping("/search/artist")
    public List<Song> searchByArtist(@RequestParam String artist) {
        return songService.searchByArtist(artist);
    }

    @GetMapping("/search/genre")
    public List<Song> searchByGenre(@RequestParam String genre) {
        return songService.searchByGenre(genre);
    }

    @PostMapping
    public Song createSong(@RequestBody Song song) {
        return songService.createSong(song);
    }
}