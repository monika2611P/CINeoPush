package com.uniproject.cineo_backend.repository;
import com.uniproject.cineo_backend.entity.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface FilmRepository extends JpaRepository<Film, Integer>{
}
