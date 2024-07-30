package controller;

// package com.example.loanapplication.controller;

import com.example.loanapplication.model.Applicant;
import com.example.loanapplication.repository.ApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicantController {

    @Autowired
    private ApplicantRepository applicantRepository;

    @PostMapping("/apply")
    public Applicant applyForLoan(@RequestBody Applicant applicant) {
        return applicantRepository.save(applicant);
    }

    @GetMapping("/applicants")
    public List<Applicant> getApplicants() {
        return applicantRepository.findAll();
    }
}
