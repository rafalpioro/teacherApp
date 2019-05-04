package pl.pioro.teacherrestapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.pioro.teacherrestapi.entity.Student;
import pl.pioro.teacherrestapi.repository.StudentRepository;

@Service
@CrossOrigin
public class StudentPaginationService {

    @Autowired
    private StudentRepository studentRepository;
    public Page<Student> findStudentsByCondition(String filter, String sortOrder, int pageNumber, int pageSize) {

        Sort sort = null;
        if (filter.equals("ASC")) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, filter));
        }

        if (filter.equals("DESC")) {
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, filter));
        }

        Pageable pageable = new PageRequest(pageNumber, pageSize, sort);

        Page<Student> data = studentRepository.findAll(pageable);
        return data;
    }
}
