package br.com.am.jardineiro.entity;


import javax.persistence.*;

@Entity
@SequenceGenerator(name="status_jardineiro",sequenceName = "SEQ_STATUS")
public class Status {

    @Id
    @GeneratedValue(generator = "status_jardineiro",strategy = GenerationType.SEQUENCE)
    private int id;
    private boolean led;
    private int humidade;
    private int temperatura;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isLed() {
        return led;
    }

    public void setLed(boolean led) {
        this.led = led;
    }

    public int getHumidade() {
        return humidade;
    }

    public void setHumidade(int humidade) {
        this.humidade = humidade;
    }

    public int getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(int temperatura) {
        this.temperatura = temperatura;
    }
}
