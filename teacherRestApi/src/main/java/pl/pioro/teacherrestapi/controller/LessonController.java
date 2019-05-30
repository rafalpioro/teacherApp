package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Lesson;
import pl.pioro.teacherrestapi.repository.LessonRepository;

import javax.transaction.Transactional;

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
}
