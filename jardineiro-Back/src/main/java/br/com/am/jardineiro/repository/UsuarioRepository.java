package br.com.am.jardineiro.repository;

import br.com.am.jardineiro.entity.Seed;
import br.com.am.jardineiro.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {

}
