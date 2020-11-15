package edu.unicen.servicio.viaje.model;


import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Data	
@Table(name = "plan")
public abstract class Plan implements Serializable{
	
	private static final long serialVersionUID = -9039211687587851532L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_plan;
	@Column
	private String tipo_plan;
	@Column
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="UTC")
	private Date fecha_inicio;
	@Column
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="UTC")
	private Date fecha_fin;
	@ManyToOne
	@JsonIgnore
	private Viaje viaje;
}
