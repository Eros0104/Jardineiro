package br.com.am.jardineiro.service;

import br.com.am.jardineiro.entity.Status;
import br.com.am.jardineiro.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatusService {
    @Autowired
    private StatusRepository statusRepository;

    public StatusService(){}


    public void save(Status status) {
        statusRepository.save(status);
    }
}
