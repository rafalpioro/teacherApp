package pl.pioro.teacherrestapi.enums;

public enum SortOrder {

    ASCENDING("ASC"), DESCENDING("DESC");

    private final String sortCode;
    private SortOrder(String direction) {
        this.sortCode = direction;
    }
    public String getSortCode() {
        return this.sortCode;
    }
}
