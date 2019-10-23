package br.com.am.jardineiro.controller;

import br.com.am.jardineiro.entity.TipoPlanta;
import br.com.am.jardineiro.repository.TipoPlantaRepository;
import br.com.am.jardineiro.table.JardineiroTable;
import br.com.am.jardineiro.table.TableFunctions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("tipo-planta")
public class TipoPlantaController {
    @Autowired
    private TipoPlantaRepository repository;
    @GetMapping
    public List<TipoPlanta> listar() {
        return repository.findAll();
    }
    @GetMapping("table")
    public JardineiroTable<TipoPlanta> table(){
        return TableFunctions.toJardineiroTable(listar());
    }
}
