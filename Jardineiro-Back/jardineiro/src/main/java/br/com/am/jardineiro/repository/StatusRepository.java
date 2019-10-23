package br.com.am.jardineiro.repository;

import br.com.am.jardineiro.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Status,Integer> {
    Status findTopByOrderByIdDesc();
}
