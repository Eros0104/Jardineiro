package br.com.am.jardineiro.entity;

import javax.persistence.Entity;

@Entity
public class Status extends BasicEntity {
    private double umidade;
    private double temperatura;

    public double getUmidade() {
        return umidade;
    }

    public void setUmidade(double umidade) {
        this.umidade = umidade;
    }

    public double getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(double temperatura) {
        this.temperatura = temperatura;
    }
}
