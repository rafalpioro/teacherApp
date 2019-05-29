package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pl.pioro.teacherrestapi.entity.Subject;

import pl.pioro.teacherrestapi.repository.SubjectRepository;

import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/subjects", produces = "application/json")
@CrossOrigin
@Transactional
public class SubjectController {

    @Autowired
    private SubjectRepository subjectRepository;

    @GetMapping
    public Iterable<Subject> findAll(){
        return subjectRepository.findAll();
    }

    @PostMapping(consumes = "application/json")
    public Subject create(@RequestBody Subject subject){
        return subjectRepository.save(subject);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") int id){
        subjectRepository.deleteById(id);
    }

    @GetMapping(path = "/{id}")
    public Subject findById(@PathVariable("id") int id){
        return subjectRepository.findById(id);
    }

    @PutMapping(path = "/{id}", consumes = "application/json")
    public Subject updateSubject(@PathVariable("id") int id, @RequestBody Subject subject){
        Subject subjectUpdated = subjectRepository.findById(id);
        subjectUpdated.setTitle(subject.getTitle());
        subjectUpdated.setCategoryId(subject.getCategoryId());

        return this.subjectRepository.save(subjectUpdated);

    }
}
