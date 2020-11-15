package edu.unicen.servicio.viaje.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName="id_plan")
@Data
@EqualsAndHashCode(callSuper = false)
public class Alojamiento extends Plan {

	private static final long serialVersionUID = -5761152425914128175L;
	
	@Column 
	private String tipo_alojamiento;
	@Column
	private String direccion;
	
	@Column
	private String localidad;
	
	@Column(nullable = true)
	private String numero_habitacion;
	
	@Column(nullable = true)
	private String codigo_reserva;
	

}
