package edu.unicen.servicio.viaje.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;

import edu.unicen.servicio.viaje.dto.UsuariosFavoritosReporteDTO;
import edu.unicen.servicio.viaje.dto.ZonasFavoritasReporteDTO;
import edu.unicen.servicio.viaje.dto.ZonasGeograficasVisitadasDTO;
import edu.unicen.servicio.viaje.model.Plan;
import edu.unicen.servicio.viaje.model.Transporte;
import edu.unicen.servicio.viaje.model.Viaje;
import edu.unicen.servicio.viaje.repository.PlanRepository;
import edu.unicen.servicio.viaje.repository.ViajeRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("viajes")
@Api(value="ViajeControllerJpa", description="REST API for travels")
public class ViajeControllerJPA {

	@Qualifier("viajeRepository")
	@Autowired
	private ViajeRepository repository = null;
	@Qualifier("planRepository")
	@Autowired
	private PlanRepository repositoryplan=null;

	public ViajeControllerJPA (@Qualifier("viajeRepository") ViajeRepository repository, @Qualifier("planRepository") PlanRepository repositoryplan) {
		this.repository = null;
		this.repositoryplan = null;
	}


	@ApiOperation(value="Get a list with all travels",response=List.class)
	@GetMapping("/") 
	@CrossOrigin
	public ResponseEntity<List<Viaje>> getViajes(Authentication auth) {
		try {
			System.out.println(auth.getName());
			List<Viaje> viajes= repository.findAllByUserName(auth.getName());
			if (viajes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(viajes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	@ApiOperation(value="Get a list with  travels by id",response=List.class)
	@GetMapping("/{id}") 
	@CrossOrigin
	public ResponseEntity<Optional<Viaje>> getViajeById(@PathVariable Long id) {
		try {
			Optional<Viaje> viajes= repository.findById(id);
			if (viajes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(viajes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@ApiOperation(value="Drop travel by id",response=List.class)
	@DeleteMapping("/{id}")
	@CrossOrigin
	public ResponseEntity<String> dropViaje(@PathVariable Long id) { 
		try {
			repository.deleteById(id);
			return new ResponseEntity<>("Se elimino el viaje",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("El viaje no existe o no se pudo eliminar",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@ApiOperation(value="add travel",response=List.class)
	@PostMapping("/")
	@CrossOrigin
	public ResponseEntity<Viaje> agregarViaje(@RequestBody Viaje v) { 
		return new ResponseEntity<>(repository.save(v), HttpStatus.OK);
	}

	@ApiOperation(value="update travel with a new travel and id",response=List.class)
	@PutMapping("/{id}")
	@CrossOrigin
	public ResponseEntity<Viaje> updateViaje(@RequestBody Viaje v, @PathVariable Long id) { 
		if (repository.existsById(id)) {
			return new ResponseEntity<>(repository.save(v), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@ApiOperation(value="update travel with a new travel and id",response=List.class)
	@PutMapping("/plan/{id}")
	@CrossOrigin
	public ResponseEntity<Plan> updatePlan(@RequestBody Plan p, @PathVariable Long id) { 
		if (repositoryplan.existsById(id)) {
			return new ResponseEntity<>(repositoryplan.save(p), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	//agregar un plan a un viaje
	@ApiOperation(value="add new plan to travel ",response=List.class)
	@PostMapping("/{id}/plan")
	public ResponseEntity<Plan> agregarPlan(@RequestBody Plan p, @PathVariable Long id ) { 
		Viaje v =new Viaje();
		v.setId_viaje(id);
		p.setViaje(v);
		return new ResponseEntity<>(repositoryplan.save(p), HttpStatus.OK);
	}
	

	@ApiOperation(value="Drop plan by id",response=List.class)
	@DeleteMapping("/plan/{id}")
	@CrossOrigin
	public ResponseEntity<String> dropPlan(@PathVariable Long id) { 
		try {
			repositoryplan.deleteById(id);
			return new ResponseEntity<>("Se elimino el plan",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("El plan no existe o no se pudo eliminar",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//reporte de viajes del usuario en un intervalo de fechas
	@ApiOperation(value="Get a list with travels with filters by Dates",response=List.class)
	@GetMapping("/porFechas") 
	@CrossOrigin
	public ResponseEntity<List<Viaje>> getViajesPorFechas(Authentication auth, @Parameter(required = true, description = "initDate")@RequestParam("fechaInicio") String fechaInicio, @Parameter(required = true, description = "endDate")@RequestParam("fechaFin") String fechaFin) {
		try {
			System.out.println(auth.getName());
			Date dateInicio = new SimpleDateFormat("yyyy-MM-dd").parse(fechaInicio);
			Date dateFin = new SimpleDateFormat("yyyy-MM-dd").parse(fechaFin);
			List<Viaje> viajes= repository.findAllByUserNameAndDates(auth.getName(), dateInicio, dateFin);
			if (viajes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(viajes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	//reporte de viajes del usuario por destino
	@ApiOperation(value="Get a list with travels with filtersByDestiny",response=List.class)
	@GetMapping("/porDestino") 
	@CrossOrigin
	public ResponseEntity<List<Viaje>> getViajesPorDestino(Authentication auth, @Parameter(required = true, description = "destinyArea")@RequestParam("zonaGeograficaDestino") String zonaGeograficaDestino) {
		try {
			System.out.println(auth.getName());
			List<Viaje> viajes= repository.findAllByUserNameAndDestiny(auth.getName(), zonaGeograficaDestino);
			if (viajes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(viajes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	//reporte usuarios que mas viajes acumularon
	@ApiOperation(value="Get users with more travels",response=List.class)
	@GetMapping("/usuariosFavoritos") 
	@CrossOrigin
	public ResponseEntity<List<UsuariosFavoritosReporteDTO>> getUsuariosMasViajes(Authentication auth) {
		try {
			System.out.println(auth.getName());
			List<UsuariosFavoritosReporteDTO> usuariosRankeados= repository.usuariosRankeados();
			if (usuariosRankeados.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(usuariosRankeados, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	//reporte zonas geograficas mas visitadas
	@ApiOperation(value="Get destinies more visited",response=List.class)
	@GetMapping("/zonasMasVisitadas") 
	@CrossOrigin
	public ResponseEntity<List<ZonasFavoritasReporteDTO>> getDestinosMasVisitados(Authentication auth) {
		try {
			System.out.println(auth.getName());
			List<ZonasFavoritasReporteDTO> destinosRankeados= repository.destinosRankeados();
			if (destinosRankeados.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(destinosRankeados, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	//todas las zonas geograficas visitadas por algun usuario
	@ApiOperation(value="Get destinies more visited",response=List.class)
	@GetMapping("/zonasGeograficas") 
	@CrossOrigin
	public ResponseEntity<List<ZonasGeograficasVisitadasDTO>> getDestinosVisitados(Authentication auth) {
		try {
			System.out.println(auth.getName());
			List<ZonasGeograficasVisitadasDTO> destinos= repository.destinos();
			if (destinos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(destinos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
