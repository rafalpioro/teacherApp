package pl.pioro.teacherrestapi.enums;

public enum Filter {


        ID("id"),
        AGE("age");

        private String filterCode;

        private Filter(String filter) {
            this.filterCode = filter;
        }
        public String getOrderByCode() {
            return this.filterCode;
        }
}
