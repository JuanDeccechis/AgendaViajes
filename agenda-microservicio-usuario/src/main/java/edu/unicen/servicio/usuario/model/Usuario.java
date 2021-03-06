package edu.unicen.servicio.usuario.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Entity
@Data
@Table(name = "usuario")
@JsonIgnoreProperties(allowSetters = true, value = {"password"})
public class Usuario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_usuario;
	@ApiModelProperty(notes="name of user",name="nombre", required=true)
	@Column
	private String nombre;
	@ApiModelProperty(notes="second name of user",name="apellido", required=true)
	@Column
	private String apellido;
	@ApiModelProperty(notes="address of user",name="direccion", required=true)
	@Column
	private String direccion;
	@ApiModelProperty(notes="email of user",name="email", required=true)
	@Column
	private String email;
	@ApiModelProperty(notes="username of user",name="nombre_usuario", required=true)
	@Column(unique=true)
	private String nombre_usuario;
	@ApiModelProperty(notes="password of user",name="password", required=true)
	@Column
	private String password;
	@Column
	@ApiModelProperty(notes="number identification of user",name="dni", required=true)
	private Integer dni;
	@Column
	private boolean admin;
	


	public Usuario() {
		super();
	}
	
	
	

}
