package edu.unicen.servicio.viaje.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName="id_plan")
@Data
@EqualsAndHashCode(callSuper = false)
public class Transporte extends Plan{

	private static final long serialVersionUID = 7922499776482054186L;
	
	@Column
//	@JsonProperty("Ciudad Origen")
	private String ciudad_origen;
	
	@Column 
//	@JsonProperty("Ciudad Destino")
	private String ciudad_destino;
	
	@Column 
//	@JsonProperty("Tipo Transporte")
	private String tipo_transporte;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
//	@JsonProperty("Terminal Salida")
	@Column (nullable = true)
	private String terminal_salida;
//	@JsonProperty("Terminal Llegada")
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Column (nullable = true)
	private String terminal_llegada;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Column (nullable = true)
//	@JsonProperty("Cod. Reserva")
	private String codigo_reserva;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Column(nullable = true)
//	@JsonProperty("Nro. Asiento")
	private Long nro_asiento;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Column (nullable = true)
//	@JsonProperty("Nro. Viaje")
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
