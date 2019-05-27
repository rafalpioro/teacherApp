package pl.pioro.teacherrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import pl.pioro.teacherrestapi.entity.Section;



@RestResource
public interface SectionRepository extends JpaRepository<Section, Integer> {

  Section findById(int id);
}
