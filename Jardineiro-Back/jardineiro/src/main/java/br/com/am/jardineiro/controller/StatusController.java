package br.com.am.jardineiro.controller;

import br.com.am.jardineiro.entity.Status;
import br.com.am.jardineiro.repository.StatusRepository;
import br.com.am.jardineiro.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("status")
public class StatusController {
    @Autowired
    private StatusService service;

    @GetMapping("newest")
    public Status getMostRecent() {
        return service.findTopByOrderByIdDesc();
    }

    @PostMapping
    public void save(Status status) {
        service.save(status);
    }
}
