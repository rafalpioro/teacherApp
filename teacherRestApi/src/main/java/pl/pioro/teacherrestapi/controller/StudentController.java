package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Section;
import pl.pioro.teacherrestapi.entity.Student;
import pl.pioro.teacherrestapi.repository.SectionRepository;
import pl.pioro.teacherrestapi.repository.StudentRepository;

import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/student", produces = "application/json")
@CrossOrigin
@Transactional
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public Iterable<Student> findAll(){
        return studentRepository.findAll();
    }

    @PostMapping(consumes = "application/json")
    public Student create(@RequestBody Student student){
        return studentRepository.save(student);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") int id){
        studentRepository.deleteById(id);
    }
}
