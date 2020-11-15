package edu.unicen.servicio.usuario.dto;

public class UsuarioDTO {
	
	String username;
	
	String token;
	
	String[] roles;

	public UsuarioDTO(String nombre_usuario, String token, String[] roles) {
		super();
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
	
	

	
	
}
