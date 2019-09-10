package br.com.am.jardineiro.resource;


import br.com.am.jardineiro.entity.Usuario;
import br.com.am.jardineiro.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Usuario")
public class UsuarioResource {

    @Autowired
    private UsuarioRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario){
       return repository.save(usuario);
    }

   

}
