package br.com.am.jardineiro.table;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ColumnTable {
    @JsonProperty("field")
    private String value;
    @JsonProperty("headerName")
    private String name;

    public ColumnTable(String value, String name) {
        this.value = value;
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
