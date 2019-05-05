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
        if (sortOrder.equals("ASC")) {
            sort = new Sort(Sort.Direction.ASC, filter);
        }

        if (sortOrder.equals("DESC")) {
            sort = new Sort(Sort.Direction.DESC, filter);
        }

        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);

        Page<Student> data = studentRepository.findAll(pageable);
        return data;
    }
}
