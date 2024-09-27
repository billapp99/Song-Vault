package com.example.Song_Vault.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.Song_Vault.vault.Song;





public interface SongRepository extends CrudRepository<Song, Long> {
    List<Song> findByTitleContaining(String title);
    List<Song> findByArtistContaining(String artist);
    List<Song> findByGenreContaining(String genre);
}
