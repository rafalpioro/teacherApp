package pl.pioro.teacherrestapi.enums;

public enum SortOrder {

    ASCENDING("ASC"), DESCENDING("DESC");

    private final String sortCode;
    private SortOrder(String sortCode) {
        this.sortCode = sortCode;
    }
    public String getSortCode() {
        return this.sortCode;
    }
}
