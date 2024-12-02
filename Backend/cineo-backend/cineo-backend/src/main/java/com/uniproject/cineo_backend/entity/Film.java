package com.uniproject.cineo_backend.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "Filme") // Name der Tabelle in der Datenbank
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatisch generierte ID
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int duration;

    @Column(nullable = false)
    private int saal;

    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private String genre;

    // Getter und Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getSaal() {
        return saal;
    }

    public void setSaal(int saal) {
        this.saal = saal;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Override
    public String toString() {
        return "Film{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", duration=" + duration +
                ", saal=" + saal +
                ", time='" + time + '\'' +
                ", genre='" + genre + '\'' +
                '}';
    }
}
