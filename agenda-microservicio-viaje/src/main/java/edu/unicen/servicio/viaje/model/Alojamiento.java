package edu.unicen.servicio.viaje.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName="id_plan")
@Data
@EqualsAndHashCode(callSuper = false)
public class Alojamiento extends Plan {

	private static final long serialVersionUID = -5761152425914128175L;
	
	@Column 
	@JsonProperty("Tipo Alojamiento")
	private String tipo_alojamiento;
	@Column
	@JsonProperty("Direccion")
	private String direccion;
	
	@Column
	@JsonProperty("Localidad")
	private String localidad;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Column(nullable = true)
	@JsonProperty("Nro. Habitacion")
	private String numero_habitacion;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Column(nullable = true)
	@JsonProperty("Cod. Reserva")
	private String codigo_reserva;
	

}
