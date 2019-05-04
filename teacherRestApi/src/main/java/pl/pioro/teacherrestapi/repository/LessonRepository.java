package pl.pioro.teacherrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Lesson;


@RestResource
public interface LessonRepository extends JpaRepository<Lesson, Integer> {
}
