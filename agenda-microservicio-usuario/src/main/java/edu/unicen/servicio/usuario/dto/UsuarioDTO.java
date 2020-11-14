package edu.unicen.servicio.usuario.dto;

public class UsuarioDTO {
	
	String username;
	
	String token;

	public UsuarioDTO(String nombre_usuario, String token) {
		super();
		this.username = nombre_usuario;
		this.token = token;
	}

	public UsuarioDTO() {
		super();
	}

	public String getNombre_usuario() {
		return username;
	}

	public void setNombre_usuario(String nombre_usuario) {
		this.username = nombre_usuario;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
	
}
