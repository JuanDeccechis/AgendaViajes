package edu.unicen.servicio.viaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.unicen.servicio.viaje.model.Plan;
@Repository
public interface  PlanRepository extends JpaRepository<Plan,Long> {

}
