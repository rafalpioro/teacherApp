package pl.pioro.teacherrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.pioro.teacherrestapi.entity.Section;
import pl.pioro.teacherrestapi.entity.Student;
import pl.pioro.teacherrestapi.entity.Subject;
import pl.pioro.teacherrestapi.enums.Filter;
import pl.pioro.teacherrestapi.enums.SortOrder;
import pl.pioro.teacherrestapi.exception.PaginationSortingException;
import pl.pioro.teacherrestapi.exception.PagingSortingErrorResponse;
import pl.pioro.teacherrestapi.repository.SectionRepository;
import pl.pioro.teacherrestapi.repository.StudentRepository;
import pl.pioro.teacherrestapi.service.StudentPaginationService;

import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/student", produces = "application/json")
@CrossOrigin(maxAge = 3600)
@Transactional
public class StudentController {

    @Autowired
    private StudentPaginationService studentPaginationService;

    @GetMapping(params = {"filter", "sortOrder", "pageNumber", "pageSize"})
    @ResponseBody
    public Page<Student> findAll(@RequestParam("filter") String filter,
                                 @RequestParam("sortOrder") String sortOrder, @RequestParam("pageNumber") int pageNumber,
                                 @RequestParam("pageSize") int pageSize) {
        if (!(sortOrder.equals(SortOrder.ASCENDING.getSortCode())
                || sortOrder.equals(SortOrder.DESCENDING.getSortCode()))) {
            throw new PaginationSortingException("Invalid sort direction");
        }


        if (!(filter.equals(Filter.ID.getOrderByCode()) || filter.equals(Filter.AGE.getOrderByCode()))) {
            throw new PaginationSortingException("Invalid orderBy condition");
        }

        Page<Student> list = studentPaginationService.findStudentsByCondition(filter, sortOrder, pageNumber, pageSize);
        return list;

    }


    public ResponseEntity<PagingSortingErrorResponse> exceptionHandler(Exception ex) {
        PagingSortingErrorResponse pagingSortingErrorResponse = new PagingSortingErrorResponse();
        pagingSortingErrorResponse.setErrorCode(HttpStatus.PRECONDITION_FAILED.value());
        pagingSortingErrorResponse.setMessage(ex.getMessage());
        return new ResponseEntity<PagingSortingErrorResponse>(pagingSortingErrorResponse, HttpStatus.OK);
    }
}