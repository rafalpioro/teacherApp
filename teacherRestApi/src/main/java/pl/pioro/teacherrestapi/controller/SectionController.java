package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Section;
import pl.pioro.teacherrestapi.repository.SectionRepository;

import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/section", produces = "application/json")
@CrossOrigin
@Transactional
public class SectionController {

    @Autowired
    private SectionRepository sectionRepository;

    @GetMapping
    public Iterable<Section> findAll(){
        return sectionRepository.findAll();
    }

    @PostMapping(consumes = "application/json")
    public Section create(@RequestBody Section section){
        return sectionRepository.save(section);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") int id){
        sectionRepository.deleteById(id);
    }
}
