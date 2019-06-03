package pl.pioro.teacherrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Lesson;

import java.time.LocalDateTime;


@RestResource
public interface LessonRepository extends JpaRepository<Lesson, Integer> {

    Lesson findById(int id);
    Iterable<Lesson> findByDateBetween(LocalDateTime yesterday, LocalDateTime tomorrow);
}
