package br.com.am.jardineiro.entity;


import javax.persistence.*;

@Entity
@SequenceGenerator(name="seed",sequenceName = "SEQ_SEED",allocationSize = 1)
public class Seed{

    @Id
    @GeneratedValue(generator = "seed", strategy = GenerationType.SEQUENCE)
    private int codigo;

    // @Column(name="NM_PLANTA")
    private String nome;

    private boolean frutifera;
    //@Enumerated(EnumType.STRING)
    //@Column(name = "DS_SEXO")
    private Genero sexo;

    //@Column(name="DS_PLANTA")
    private String descricao;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

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

    public boolean isFrutifera() {
        return frutifera;
    }

    public void setFrutifera(boolean frutifera) {
        this.frutifera = frutifera;
    }
}
