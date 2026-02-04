package com.matouq.backend.controller;

import com.matouq.backend.model.Registration;
import com.matouq.backend.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationRepository registrationRepository;

    @PostMapping
    public ResponseEntity<Registration> createRegistration(@RequestBody Registration registration) {
        Registration savedRegistration = registrationRepository.save(registration);
        return ResponseEntity.ok(savedRegistration);
    }
}
