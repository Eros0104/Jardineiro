package br.com.am.jardineiro.service;

import br.com.am.jardineiro.entity.Status;
import br.com.am.jardineiro.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

@Service
public class StatusService {
    @Autowired
    private StatusRepository repository;

    public StatusService(){}

    public Status findTopByOrderByIdDesc(){
        return repository.findTopByOrderByIdDesc();
    }

    public void save(Status status) {
        repository.save(status);
    }
}
