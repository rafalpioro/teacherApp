package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Lesson;
import pl.pioro.teacherrestapi.repository.LessonRepository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@RestController
@RequestMapping(path = "/lessons", produces = "application/json")
@CrossOrigin
@Transactional
public class LessonController {

    @Autowired
    private LessonRepository lessonRepository;

    @GetMapping
    public Iterable<Lesson> findAll(){
        return lessonRepository.findAll();
    }

    @GetMapping("/today")
    public Iterable<Lesson> findTodayLesson(){
        LocalDateTime today = LocalDateTime.now();
        LocalDateTime tomorrow = today.plusDays(1);
        LocalDateTime yesterday = today.minusDays(1);
        return lessonRepository.findByDateBetween(yesterday, tomorrow);
    }

    @PostMapping(consumes = "application/json")
    public Lesson create(@RequestBody Lesson lesson){
        return lessonRepository.save(lesson);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") int id){
        lessonRepository.deleteById(id);
    }

    @GetMapping(path = "/{id}")
    public Lesson findById(@PathVariable("id") int id){
        return lessonRepository.findById(id);
    }

    @PutMapping(path = "/{id}", consumes = "application/json")
    public Lesson updateStudent(@PathVariable("id") int id, @RequestBody Lesson lesson) {
        Lesson lessonUpdated = lessonRepository.findById(id);
        lessonUpdated.setDate(lesson.getDate());
        lessonUpdated.setAssignment(lesson.getAssignment());
        lessonUpdated.setContent(lesson.getContent());
        lessonUpdated.setDayOfWeek(lesson.getDayOfWeek());
        lessonUpdated.setMaterials(lesson.getMaterials());
        lessonUpdated.setNextLesson(lesson.getNextLesson());
        lessonUpdated.setSection(lesson.getSection());
        lessonUpdated.setSubject(lesson.getSubject());
        lessonUpdated.setStudent(lesson.getStudent());


        return this.lessonRepository.save(lessonUpdated);
    }
}
