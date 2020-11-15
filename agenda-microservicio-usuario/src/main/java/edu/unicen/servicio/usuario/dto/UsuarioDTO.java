package edu.unicen.servicio.usuario.dto;

public class UsuarioDTO {
	
	Long id;
	
	String username;
	
	String token;
	
	String[] roles;

	public UsuarioDTO(Long id, String nombre_usuario, String token, String[] roles) {
		super();
		this.id = id;
		this.username = nombre_usuario;
		this.token = token;
		this.roles = roles;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String[] getRoles() {
		return roles;
	}

	public void setRoles(String[] roles) {
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	

	
	
}
