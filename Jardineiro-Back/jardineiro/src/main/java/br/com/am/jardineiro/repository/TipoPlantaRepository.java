package br.com.am.jardineiro.repository;

import br.com.am.jardineiro.entity.TipoPlanta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoPlantaRepository extends JpaRepository<TipoPlanta,Integer> {
}
