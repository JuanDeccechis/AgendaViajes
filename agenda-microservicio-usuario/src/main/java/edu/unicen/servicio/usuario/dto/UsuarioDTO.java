package edu.unicen.servicio.usuario.dto;

public class UsuarioDTO {
	
	String nombre_usuario;
	
	String token;

	public UsuarioDTO(String nombre_usuario, String token) {
		super();
		this.nombre_usuario = nombre_usuario;
		this.token = token;
	}

	public UsuarioDTO() {
		super();
	}

	public String getNombre_usuario() {
		return nombre_usuario;
	}

	public void setNombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
	
}
