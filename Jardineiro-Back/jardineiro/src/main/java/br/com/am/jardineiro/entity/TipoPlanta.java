package br.com.am.jardineiro.entity;

import br.com.am.jardineiro.table.Coluna;

import javax.persistence.Entity;

@Entity
public class TipoPlanta extends BasicEntity {
    @Coluna(name="Nome")
    private String Nome;
    private Status StatusAdequados;
}
