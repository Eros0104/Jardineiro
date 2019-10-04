package br.com.am.jardineiro.entity;


import br.com.am.jardineiro.table.Coluna;

import javax.persistence.*;

@Entity
@SequenceGenerator(name="seed",sequenceName = "SEQ_SEED",allocationSize = 1)
public class Seed{

    @Id
    @GeneratedValue(generator = "seed", strategy = GenerationType.SEQUENCE)
    private int codigo;

    // @Column(name="NM_PLANTA")
    private String nome;

   // private Classificacao classificacao; gimnospermas(planta),angiospermas(flor)

    //@Enumerated(EnumType.STRING)
    //@Column(name = "DS_SEXO")
    private Genero sexo;

    //@Column(name="DS_PLANTA")
    private String descricao;

    @Coluna(position = 0)
    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    @Coluna(position = 1)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Coluna(position = 2)
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
