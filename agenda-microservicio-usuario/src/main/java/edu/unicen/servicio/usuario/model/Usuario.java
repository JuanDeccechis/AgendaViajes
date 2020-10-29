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
	@Column
	private String nombre_usuario;
	@Column
	private String password;
	@Column
	private Integer dni;
	
	
	
	public Usuario(Long id_usuario, String nombre, String apellido, String direccion, String email,
			String nombre_usuario, String password, Integer dni) {
		super();
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.direccion = direccion;
		this.email = email;
		this.nombre_usuario = nombre_usuario;
		this.password = password;
		this.dni = dni;
	}


	public Usuario() {
		super();
	}
	
	
	

}
