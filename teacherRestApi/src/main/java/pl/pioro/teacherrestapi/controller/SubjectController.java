package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Section;
import pl.pioro.teacherrestapi.entity.Subject;
import pl.pioro.teacherrestapi.repository.SectionRepository;
import pl.pioro.teacherrestapi.repository.SubjectRepository;

import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/subject", produces = "application/json")
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
}
