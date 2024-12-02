package com.uniproject.cineo_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.uniproject.cineo_backend.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CineoBackendApplication implements CommandLineRunner {

	@Autowired
	private FilmService filmService;

	public static void main(String[] args) {

		SpringApplication.run(CineoBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		filmService.getAllFilme().forEach(System.out::println);
	}
}
