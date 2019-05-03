package pl.pioro.teacherrestapi.entity;

import javax.persistence.*;
import java.sql.Time;

@Entity(name ="students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "class")
    private String clas;

    @Column(name = "age")
    private int age;

    @Column(name = "knowledge_level")
    private String knowledgeLevel;

    @Column(name="aim")
    private String aim;

    @Column(name="times_weekly")
    private int timesWeekly;

    @Column(name = "day_of_week")
    private String dayOfWeek;

    @Column(name = "time")
    private Time time;


    public Student(){

    }

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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getClas() {
        return clas;
    }

    public void setClas(String clas) {
        this.clas = clas;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getKnowledgeLevel() {
        return knowledgeLevel;
    }

    public void setKnowledgeLevel(String knowledgeLevel) {
        this.knowledgeLevel = knowledgeLevel;
    }

    public String getAim() {
        return aim;
    }

    public void setAim(String aim) {
        this.aim = aim;
    }

    public int getTimesWeekly() {
        return timesWeekly;
    }

    public void setTimesWeekly(int timesWeekly) {
        this.timesWeekly = timesWeekly;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
