package edu.unicen.servicio.viaje.controller;

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

import edu.unicen.servicio.viaje.dto.ViajeDTO;
import edu.unicen.servicio.viaje.model.Viaje;
import edu.unicen.servicio.viaje.repository.ViajeRepository;

@RestController
@RequestMapping("viajes")
public class ViajeControllerJPA {
	
	@Qualifier("viajeRepository")
	@Autowired
	private ViajeRepository repository = null;
	
	public ViajeControllerJPA (@Qualifier("viajeRepository") ViajeRepository repository) {
		this.repository = null;
	}
	
	
	
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
	
	@GetMapping("/viajes/{id}") 
	@CrossOrigin
	public ResponseEntity<Viaje> getViajeByName(@PathVariable Long idViaje) {
		try {
			Viaje viajes = repository.findByName(idViaje);
			if (viajes == null) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(viajes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
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
	
	@PostMapping("/")
	@CrossOrigin
	public ResponseEntity<Viaje> agregarViaje(@RequestBody Viaje v) { 
		return new ResponseEntity<>(repository.save(v), HttpStatus.OK);
	}

	
	@PutMapping("/{id}")
	@CrossOrigin
	public ResponseEntity<Viaje> updateViaje(@RequestBody Viaje v, @PathVariable Long id) { 
		if (repository.existsById(id)) {
			return new ResponseEntity<>(repository.save(v), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	/*private String getJWTToken(String username) {
		String secretKey = "mySecretKey";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER");
		
		String token = Jwts
				.builder()
				.setId("softtekJWT")
				.setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512,
						secretKey.getBytes()).compact();

		return "Bearer " + token;
	}*/

}
