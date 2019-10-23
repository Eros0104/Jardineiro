package br.com.am.jardineiro.controller;

import br.com.am.jardineiro.entity.Genero;
import br.com.am.jardineiro.entity.SelectInput;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("genero")
public class GeneroController {

    @GetMapping
    public Genero[] listar() {
        return Genero.values();
    }
    @GetMapping("select")
    public List<SelectInput> getSelectInput(){
        List<SelectInput> resp = new ArrayList<SelectInput>();
        Genero[] generos = listar();
        for(Genero genero : generos)
            resp.add(new SelectInput(genero.toString()));
        return resp;
    }
}
