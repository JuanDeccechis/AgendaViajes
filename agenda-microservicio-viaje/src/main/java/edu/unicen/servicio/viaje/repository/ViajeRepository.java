package edu.unicen.servicio.viaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.unicen.servicio.viaje.model.Viaje;

@Repository
public interface ViajeRepository  extends JpaRepository<Viaje,Long>{

	@Query("SELECT v FROM Viaje v WHERE v.nombre = ?1")
	Viaje findByName(Long name);
	
}
