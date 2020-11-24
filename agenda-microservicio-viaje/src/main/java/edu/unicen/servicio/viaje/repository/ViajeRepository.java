package edu.unicen.servicio.viaje.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.unicen.servicio.viaje.dto.UsuariosFavoritosReporteDTO;
import edu.unicen.servicio.viaje.dto.ZonasFavoritasReporteDTO;
import edu.unicen.servicio.viaje.dto.ZonasGeograficasVisitadasDTO;
import edu.unicen.servicio.viaje.model.Viaje;

@Repository
public interface ViajeRepository  extends JpaRepository<Viaje,Long>{

	@Query("SELECT v FROM Viaje v WHERE v.nombre = ?1")
	Viaje findByName(String name);
	
	@Query("SELECT v FROM Viaje v JOIN v.usuario u WHERE u.nombre_usuario = ?1")
	List<Viaje> findAllByUserName(String name);
	@Query("SELECT v FROM Viaje v JOIN v.usuario u WHERE u.nombre_usuario = ?1 and v.id_viaje=?2")
	List<Viaje> findIdByUserName(String name, Long id);

	@Query("SELECT v FROM Viaje v JOIN v.usuario u WHERE u.nombre_usuario = ?1 AND v.fecha_inicio BETWEEN ?2 AND ?3")
	List<Viaje> findAllByUserNameAndDates(String name, Date fechaInicio, Date fechaFin);

	@Query("SELECT v FROM Viaje v JOIN v.usuario u WHERE u.nombre_usuario = ?1 AND v.ciudad_destino=?2")
	List<Viaje> findAllByUserNameAndDestiny(String name, String zonaGeograficaDestino);
	
	@Query("SELECT u.id_usuario AS id, u.nombre AS nombre, u.nombre_usuario AS username, u.dni AS DNI, COUNT(v.id) AS cantidad FROM Viaje v JOIN v.usuario u GROUP BY v.usuario ORDER BY cantidad DESC")
	List<UsuariosFavoritosReporteDTO> usuariosRankeados();
	
	@Query("SELECT v.ciudad_destino AS nombre, COUNT(v.id) AS cantidad FROM Viaje v GROUP BY v.ciudad_destino ORDER BY cantidad DESC")
	List<ZonasFavoritasReporteDTO> destinosRankeados();
	
	@Query("SELECT DISTINCT v.ciudad_destino AS nombre FROM Viaje v")
	List<ZonasGeograficasVisitadasDTO> destinos();
}
