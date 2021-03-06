package pl.pioro.teacherrestapi.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Student;

import java.util.List;

@RestResource
public interface StudentRepository extends PagingAndSortingRepository<Student, Integer> {

    Page<Student> findByNameIgnoreCaseContaining(String name, Pageable pageable);
    Student findById(int id);
}
