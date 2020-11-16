package edu.unicen.servicio.usuario.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.hibernate.mapping.ManyToOne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import edu.unicen.servicio.usuario.dto.UsuarioDTO;
import edu.unicen.servicio.usuario.model.Usuario;
import edu.unicen.servicio.usuario.repository.UsuarioRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@CrossOrigin
@RequestMapping("usuarios")
@Api(value="UsuarioControllerJpa", description="REST API for registration")
@ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
public class UsuarioControllerJPA {
	
	@Qualifier("usuarioRepository")
	@Autowired
	private UsuarioRepository repository = null;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public UsuarioControllerJPA (@Qualifier("usuarioRepository") UsuarioRepository repository) {
		this.repository = null;
	}
	
	@ApiOperation(value="Get a list with all users",response=List.class)
	@GetMapping("/") 
	@CrossOrigin
	public ResponseEntity<List<Usuario>> getUsers(Authentication auth) {
		try {
			System.out.println(auth.getName());
			List<Usuario> usuarios = repository.findAll();
			if (usuarios.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(usuarios, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	@ApiOperation(value="Get one user",response=Usuario.class)
	@GetMapping("/{id}") 
	@CrossOrigin
	public ResponseEntity<Optional<Usuario>> getUserById(@Parameter(required = true, description = "id from user")  @PathVariable Long id) {
		try {
			Optional<Usuario> usuarios = repository.findById(id);
			if (usuarios.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(usuarios, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	@ApiOperation(value="Get one user by userName",response=Usuario.class)
	@GetMapping("/username/{username}") 
	@CrossOrigin
	public ResponseEntity<Usuario> getUserByUserName(@PathVariable String username) {
		try {
			Usuario usuarios = repository.findByUserName(username);
			if (usuarios == null) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(usuarios, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	@ApiOperation(value="Drop a user by id")
	@DeleteMapping("/{id}")
	@CrossOrigin
	public ResponseEntity<String> dropUsuario(@PathVariable Long id) { 
		try {
			repository.deleteById(id);
			return new ResponseEntity<>("Se elimino el usuario",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("El usuario no existe o no se pudo eliminar",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@ApiOperation(value="Update user by id",response=Usuario.class)
	@PutMapping("/{id}")
	@CrossOrigin
	public ResponseEntity<Usuario> updateCliente(@RequestBody Usuario u, @PathVariable Long id) { 
		if (repository.existsById(id)) {
			return new ResponseEntity<>(repository.save(u), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//LOGIN 
	@ApiOperation(value="Log a user with user and pass",response=UsuarioDTO.class)
	@PostMapping("login")
	public UsuarioDTO login(@Parameter(required = true, description = "name from user")@RequestParam("user") String username, @Parameter(required = true, description = "password") @RequestParam("password") String pwd) {
		
		Usuario user = repository.findByUserName(username);
		if(passwordEncoder.matches(pwd, user.getPassword())) {
			String token = getJWTToken(user);	
			if(user.isAdmin()) {
				String[] roles = {"ROLE_USER","ROLE_ADMIN"};
				UsuarioDTO userLog = new UsuarioDTO(user.getId_usuario(),username,token,roles);
				return userLog;
			} else 	{
				String[] roles = {"ROLE_USER"};
				UsuarioDTO userLog = new UsuarioDTO(user.getId_usuario(),username,token,roles);
				return userLog;
			}			
		}
		return null;
		
	}
	
	//REGISTRO (ALTA)
	@ApiOperation(value="Register a new user",response=Usuario.class)
	@PostMapping("register")
	@CrossOrigin
	public ResponseEntity<Usuario> registro(@RequestBody Usuario u) {
		u.setId_usuario(null);
		try {
			if(u.getApellido() == null || u.getDni() == null || u.getNombre() == null
					|| u.getNombre_usuario() == null || u.getPassword() == null) {
				return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);
			} else {
				u.setPassword(passwordEncoder.encode(u.getPassword()));
				return new ResponseEntity<>(repository.save(u), HttpStatus.CREATED);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	@ApiOperation(value="Get a token",response=String.class)

	private String getJWTToken(Usuario user) {
		String secretKey = "mySecretKey";
		List<GrantedAuthority> grantedAuthorities;
		if(user.isAdmin()) {
			grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER, ROLE_ADMIN");
		} else {
			grantedAuthorities = AuthorityUtils
					.commaSeparatedStringToAuthorityList("ROLE_USER");
		}
		String token = Jwts
				.builder()
				.setId("softtekJWT")
				.setSubject(user.getNombre_usuario())
				.claim("user_id", user.getId_usuario())
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 6000000))
				.signWith(SignatureAlgorithm.HS512,
						secretKey.getBytes()).compact();

		return "Bearer " + token;
	}

}
