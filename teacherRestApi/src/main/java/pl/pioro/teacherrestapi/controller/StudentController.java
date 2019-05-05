package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pl.pioro.teacherrestapi.entity.Section;
import pl.pioro.teacherrestapi.entity.Student;
import pl.pioro.teacherrestapi.entity.Subject;
import pl.pioro.teacherrestapi.enums.Filter;
import pl.pioro.teacherrestapi.enums.SortOrder;
import pl.pioro.teacherrestapi.exception.PaginationSortingException;
import pl.pioro.teacherrestapi.exception.PagingSortingErrorResponse;
import pl.pioro.teacherrestapi.repository.SectionRepository;
import pl.pioro.teacherrestapi.repository.StudentRepository;
import pl.pioro.teacherrestapi.service.StudentPaginationService;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.util.List;


@RestController
@RequestMapping(path = "/students", produces = "application/json")
@CrossOrigin(maxAge = 3600)
@Transactional
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping(params = {"page", "size"})
    public Page<Student> findAllPaginated(@RequestParam("page") int page , @RequestParam("size") int size) {

        Pageable findElements = PageRequest.of(page, size);

        Pageable secondPageWithFiveElements = PageRequest.of(1, 5);

        Page<Student> allStudebts = studentRepository.findAll(findElements);

        return allStudebts;

    }

    @GetMapping
    public Iterable<Student> allStudents(){
        return studentRepository.findAll();
    }
}