package com.example.loanapplication.repository;

// package com.example.loanapplication.repository;

import com.example.loanapplication.model.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
}
