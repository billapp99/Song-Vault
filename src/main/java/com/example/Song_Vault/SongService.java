package com.example.Song_Vault;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Song_Vault.repository.SongRepository;
import com.example.Song_Vault.vault.Song;

@Service
public class SongService {
    @Autowired
    private SongRepository songRepository;

    // Retrieve all songs
    public Iterable<Song> getAllSongs() {
        return songRepository.findAll(); // Fetches all songs from the database
    }

    // Retrieve a specific song by ID
    public Song getSongById(Long id) {
        return songRepository.findById(id).orElse(null); // Returns the song if found
    }

    // Search for songs by title
    public List<Song> searchSongs(String query) {
        return songRepository.findByTitleContaining(query); // Searches for songs with titles containing the query
    }

    // Search for songs by artist
    public List<Song> searchByArtist(String artist) {
        return songRepository.findByArtistContaining(artist); // Searches for songs by artist
    }

    // Search for songs by genre
    public List<Song> searchByGenre(String genre) {
        return songRepository.findByGenreContaining(genre); // Searches for songs by genre
    }

    // Create a new song
    public Song createSong(Song song) {
        return songRepository.save(song); // Saves the new song to the database
    }

    public void deleteSong(Long id) {
        songRepository.deleteById(id);
    }

}
