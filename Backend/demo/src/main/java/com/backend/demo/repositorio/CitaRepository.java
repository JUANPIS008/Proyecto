package com.backend.demo.repositorio;

import com.backend.demo.modelo.Cita;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CitaRepository extends JpaRepository<Cita, Long> {
}
