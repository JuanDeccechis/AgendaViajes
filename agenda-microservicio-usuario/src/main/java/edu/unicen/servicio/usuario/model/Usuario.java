package edu.unicen.servicio.usuario.model;

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
@Table(name = "usuario")
@JsonIgnoreProperties(allowSetters = true, value = {"password"})
public class Usuario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_usuario;
	@Column
	private String nombre;
	@Column
	private String apellido;
	@Column
	private String direccion;
	@Column
	private String email;
	@Column(unique=true)
	private String nombre_usuario;
	@Column
	private String password;
	@Column
	private Integer dni;
	@Column
	private boolean admin;
	


	public Usuario() {
		super();
	}
	
	
	

}
