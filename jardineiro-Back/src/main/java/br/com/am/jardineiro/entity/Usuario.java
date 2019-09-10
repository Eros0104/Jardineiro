package br.com.am.jardineiro.entity;


import javax.persistence.*;
import java.util.List;

@Entity
@SequenceGenerator(name="usuario",sequenceName = "SQ_USUARIO")
public class Usuario {

    @GeneratedValue(generator = "usuario",strategy = GenerationType.SEQUENCE)
    private int Id;
    private String Nome;
    private String Senha;
    private List<Seed> seeds;




    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getSenha() {
        return Senha;
    }

    public void setSenha(String senha) {
        Senha = senha;
    }

    public List<Seed> getSeeds() {
        return seeds;
    }

    public void setSeeds(List<Seed> seeds) {
        this.seeds = seeds;
    }
}
