package br.com.am.jardineiro.entity;


import br.com.am.jardineiro.table.Coluna;

import javax.persistence.*;

@Entity
public class Seed extends BasicEntity{
    @Coluna(name = "Nome", sortable = true)
    private String nome;

    @Coluna(name = "Sexo")
    private Genero sexo;

    private TipoPlanta tipoPlanta;

    public String getNome() { return nome; }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Genero getSexo() {
        return sexo;
    }

    public void setSexo(Genero sexo) {
        this.sexo = sexo;
    }
}
