package pl.pioro.teacherrestapi.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Student;

@RestResource
public interface StudentRepository extends PagingAndSortingRepository<Student, Integer> {
}
