package edu.unicen.servicio.viaje.dto;

public class ViajeDTO {
	
	String id;
	String nombre_usuario;
	
	String token;

	public ViajeDTO(String nombre_usuario, String token) {
		super();
		this.nombre_usuario = nombre_usuario;
		this.token = token;
	}

	public ViajeDTO() {
		super();
	}

	
	
}
