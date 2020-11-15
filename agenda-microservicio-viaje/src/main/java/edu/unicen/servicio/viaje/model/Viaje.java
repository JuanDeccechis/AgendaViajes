package edu.unicen.servicio.viaje.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
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
	private String nombre;
	@Column
	private String ciudad_origen;
	@Column
	private String ciudad_destino;
	@Column
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="UTC")
	private Date fecha_inicio;
	@Column
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="UTC")
	private Date fecha_fin;
	@Column
	private String descripcion;
	
	@ManyToOne
	@JsonIgnore
	private Usuario usuario;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "viaje")
	@JsonIgnore
	private List<Plan> planes;
	
	public Viaje() {
		super();
	}


	public Viaje(Long id_viaje, String nombre, String ciudad_origen, String ciudad_destino, Date fecha_inicio,
			Date fecha_fin, String descripcion, Usuario usuario) {
		super();
		this.id_viaje = id_viaje;
		this.nombre = nombre;
		this.ciudad_origen = ciudad_origen;
		this.ciudad_destino = ciudad_destino;
		this.fecha_inicio = fecha_inicio;
		this.fecha_fin = fecha_fin;
		this.descripcion = descripcion;
		this.usuario = usuario;
	}





	
	
	
	

}
