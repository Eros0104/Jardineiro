package br.com.am.jardineiro.entity;

import br.com.am.jardineiro.table.Coluna;

import javax.persistence.*;

@MappedSuperclass
@SequenceGenerator(name="seed",sequenceName = "SEQ_SEED",allocationSize = 1)
public class BasicEntity {
    @Id
    @GeneratedValue(generator = "seed", strategy = GenerationType.SEQUENCE)
    @Coluna(name = "Cod.", sortable = true)
    private long codigo;

    public long getCodigo() {
        return codigo;
    }

    public void setCodigo(long codigo) {
        this.codigo = codigo;
    }
}
