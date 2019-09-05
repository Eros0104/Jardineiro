package br.com.am.jardineiro.resource;

import br.com.am.jardineiro.entity.Seed;
import br.com.am.jardineiro.repository.SeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Seed")
public class PlantaResource {

    @Autowired
    private SeedRepository repository;


    /*CRUD SEED*/

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Seed cadastrar(@RequestBody Seed seed){
        return repository.save(seed);
    }

    @GetMapping("{codigo}")
    public Seed buscar(@PathVariable int codigo){

    return repository.findById(codigo).get();
    }

    @GetMapping
    public List<Seed> listar(){
        return repository.findAll();
    }

    @PutMapping("{id}")
    public Seed atualizar(@RequestBody Seed seed, @PathVariable int id){

        seed.setCodigo(id);

        return repository.save(seed);
    }


    @DeleteMapping("{codigo}")
    public void deletar(@PathVariable int codigo){
         repository.deleteById(codigo);

    }
}
