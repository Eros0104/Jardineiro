package br.com.am.jardineiro.entity;


import javax.persistence.*;

@Entity
@SequenceGenerator(name="seed",sequenceName = "SEQ_SEED",allocationSize = 1)
public class Seed{

    @Id
    @GeneratedValue(generator = "seed", strategy = GenerationType.SEQUENCE)
    private int Codigo;

    private Usuario usuario;

    // @Column(name="NM_PLANTA")
    private String Nome;

    private boolean Frutifera;
    //@Enumerated(EnumType.STRING)
    //@Column(name = "DS_SEXO")
    private Genero Sexo;

    //@Column(name="DS_PLANTA")
    private String Descricao;


    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public int getCodigo() {
        return Codigo;
    }

    public void setCodigo(int codigo) {
        Codigo = codigo;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public boolean isFrutifera() {
        return Frutifera;
    }

    public void setFrutifera(boolean frutifera) {
        Frutifera = frutifera;
    }

    public Genero getSexo() {
        return Sexo;
    }

    public void setSexo(Genero sexo) {
        Sexo = sexo;
    }

    public String getDescricao() {
        return Descricao;
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }
}
