package edu.unicen.servicio.usuario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.unicen.servicio.usuario.model.Usuario;

@Repository
public interface UsuarioRepository  extends JpaRepository<Usuario,Long>{

	@Query("SELECT u FROM Usuario u WHERE u.nombre_usuario = ?1")
	Usuario findByUserName(String name);
	
}
