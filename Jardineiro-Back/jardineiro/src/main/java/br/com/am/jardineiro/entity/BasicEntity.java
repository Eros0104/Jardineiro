package br.com.am.jardineiro.entity;

import br.com.am.jardineiro.table.Coluna;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@SequenceGenerator(name="seed",sequenceName = "SEQ_SEED",allocationSize = 1)
public class BasicEntity {
    @Id
    @GeneratedValue(generator = "seed", strategy = GenerationType.SEQUENCE)
    @Coluna(name = "Cod.", sortable = true)
    @Column(name = "pk_id")
    private int id;

    @CreatedDate
    private Date creationDate;

    public int getId() {
        return id;
    }

    public void setId(int codigo) {
        this.id = codigo;
    }
}
