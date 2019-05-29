package pl.pioro.teacherrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Subject;

@RestResource
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    Subject findById(int id);
}
