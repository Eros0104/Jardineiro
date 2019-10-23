package br.com.am.jardineiro.controller;

import br.com.am.jardineiro.entity.Seed;
import br.com.am.jardineiro.repository.SeedRepository;
import br.com.am.jardineiro.table.JardineiroTable;
import br.com.am.jardineiro.table.TableFunctions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Seed")
public class PlantaController {
    @Autowired
    private SeedRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Seed cadastrar(@RequestBody Seed seed) {
        return repository.save(seed);
    }

    @GetMapping("{codigo}")
    public Seed buscar(@PathVariable int codigo) {
        return repository.findById(codigo).get();
    }

    @GetMapping("model")
    public Seed getModel() {
        return new Seed();
    }

    @GetMapping
    public List<Seed> listar() {
        return repository.findAll();
    }

    @GetMapping("table")
    public JardineiroTable<Seed> table(){
        return TableFunctions.toJardineiroTable(listar());
    }

    @PutMapping("{id}")
    public Seed atualizar(@RequestBody Seed seed, @PathVariable int id) {
        seed.setCodigo(id);
        return repository.save(seed);
    }

    @DeleteMapping("{codigo}")
    public void deletar(@PathVariable int codigo) {
        repository.deleteById(codigo);
    }
}
