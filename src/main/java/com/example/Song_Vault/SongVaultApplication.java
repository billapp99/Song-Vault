package com.example.Song_Vault;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.Song_Vault.repository.SongRepository;
import com.example.Song_Vault.vault.Song;

@SpringBootApplication
public class SongVaultApplication {

	public static void main(String[] args) {
		SpringApplication.run(SongVaultApplication.class, args);
	}
	@Bean
	ApplicationRunner init(SongRepository repository) {
		return args -> {
			Stream.of(
				new Song(null, "Billie Jean", "Micheal Jackson", "Pop", "01-02-1982"),
				new Song(null, "Bohemian Rhapsody", "Queen", "Rock", "11-21-1975"),
				new Song(null,"Let there be love", "Nat King Cole","Jazz", "03-01-1962" )
			).forEach(song -> {
				repository.save(song); //Saves each song to the repository
			});
		};
	}

}