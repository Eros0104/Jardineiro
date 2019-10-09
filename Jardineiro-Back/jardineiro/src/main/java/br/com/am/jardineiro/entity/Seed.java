package br.com.am.jardineiro.entity;


import br.com.am.jardineiro.table.Coluna;

import javax.persistence.*;

@Entity
@SequenceGenerator(name="seed",sequenceName = "SEQ_SEED",allocationSize = 1)
public class Seed{

    @Id
    @GeneratedValue(generator = "seed", strategy = GenerationType.SEQUENCE)
    @Coluna(name = "Cod.", sortable = true)
    private int codigo;

    @Coluna(name = "Nome", sortable = true)
    private String nome;

    @Coluna(name = "Sexo")
    private Genero sexo;

    //@Column(name="DS_PLANTA")
    private String descricao;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
