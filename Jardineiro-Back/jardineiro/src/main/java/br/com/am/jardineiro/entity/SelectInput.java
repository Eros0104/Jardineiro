package br.com.am.jardineiro.entity;

public class SelectInput {
    private String value;
    private String display;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public SelectInput(String value, String display) {
        this.value = value;
        this.display = display;
    }

    public SelectInput(String valueDisplay) {
        this.value = valueDisplay;
        this.display = valueDisplay;
    }
}
