package pl.pioro.teacherrestapi.exception;


public class PaginationSortingException extends RuntimeException{

    private String errorMessage;
    @Override
    public String getMessage() {
        return errorMessage;
    }
    public PaginationSortingException() {
        super();
    }
    public PaginationSortingException(String errorMessage) {
        super(errorMessage);
        this.errorMessage = errorMessage;
    }
}
