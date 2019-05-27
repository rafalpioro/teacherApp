package pl.pioro.teacherrestapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Student;
import pl.pioro.teacherrestapi.repository.StudentRepository;
import javax.transaction.Transactional;



@RestController
@RequestMapping(path = "/students", produces = "application/json")
@CrossOrigin(maxAge = 3600)
@Transactional
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping(params = {"page", "size", "name"})
    public Page<Student> findAllPaginated(@RequestParam("page") int page , @RequestParam("size") int size, @RequestParam("name") String name) {

        Pageable findElements = PageRequest.of(page, size);

        Pageable secondPageWithFiveElements = PageRequest.of(1, 5);

        if(name.trim().equals("")) {
            Page<Student> allStudents = studentRepository.findAll(findElements);

            return allStudents;
        } else {
            Page<Student> allStudentsByName = studentRepository.findByNameIgnoreCaseContaining(name, findElements);
            return allStudentsByName;
        }

    }

    @GetMapping
    public Iterable<Student> allStudents(){
        return studentRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Student findStudentById(@PathVariable("id") int id){
        return studentRepository.findById(id);
    }

    @PostMapping (consumes = "application/json")
    public Student create(@RequestBody Student student){
        return studentRepository.save(student);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") int id){
        this.studentRepository.deleteById(id);
    }

    @PutMapping(path = "/{id}", consumes = "application/json")
    public Student updateStudent(@PathVariable("id") int id, @RequestBody Student student){
        Student studentUpdated = studentRepository.findById(id);
        studentUpdated.setName(student.getName());
        studentUpdated.setSurname(student.getSurname());
        studentUpdated.setAge(student.getAge());
        studentUpdated.setAim(student.getAim());
        studentUpdated.setClas(student.getClas());
        studentUpdated.setDayOfWeek(student.getDayOfWeek());
        studentUpdated.setKnowledgeLevel(student.getKnowledgeLevel());
        studentUpdated.setTime(student.getTime());

        return this.studentRepository.save(studentUpdated);

    }
}