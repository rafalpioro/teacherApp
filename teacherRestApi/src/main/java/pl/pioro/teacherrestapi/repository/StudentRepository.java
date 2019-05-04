package pl.pioro.teacherrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Student;

@RestResource
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
