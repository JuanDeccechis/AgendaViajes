package edu.unicen.servicio.viaje.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name = "viaje")
public class Viaje {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_viaje;
	@Column
	private Long nombre;
	@Column
	private String ciudad_origen;
	@Column
	private String ciudad_destino;
	@Column
	private String detalle;
	@Column
	private Long id_usuario;
	

	public Viaje() {
		super();
	}


	public Viaje(Long id_viaje, Long nombre, String ciudad_origen, String ciudad_destino, String detalle,
			Long id_usuario) {
		super();
		this.id_viaje = id_viaje;
		this.nombre = nombre;
		this.ciudad_origen = ciudad_origen;
		this.ciudad_destino = ciudad_destino;
		this.detalle = detalle;
		this.id_usuario = id_usuario;
	}
	
	
	

}
