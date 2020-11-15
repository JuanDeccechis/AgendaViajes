package edu.unicen.servicio.viaje.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName="id_plan")
@Data
@EqualsAndHashCode(callSuper = false)
public class Transporte extends Plan{

	private static final long serialVersionUID = 7922499776482054186L;
	
	@Column
	private String ciudad_origen;
	
	@Column 
	private String ciudad_destino;
	
	@Column 
	private String tipo_transporte;
	
	@Column (nullable = true)
	private String terminal_salida;
	
	@Column (nullable = true)
	private String terminal_llegada;
	
	@Column (nullable = true)
	private String codigo_reserva;
	
	@Column(nullable = true)
	private Long nro_asiento;
	
	@Column (nullable = true)
	private Long nro_viaje;

	public Transporte(String ciudad_origen, String ciudad_destino, Long nro_asiento, Long nro_viaje) {
		super();
		this.ciudad_origen = ciudad_origen;
		this.ciudad_destino = ciudad_destino;
		this.nro_asiento = nro_asiento;
		this.nro_viaje = nro_viaje;
	}

	public Transporte() {
		super();
	}
	
	
	
	
}
