package edu.unicen.servicio.usuario.controller;

import static org.hamcrest.CoreMatchers.any;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.unicen.servicio.usuario.dto.UsuarioDTO;
import edu.unicen.servicio.usuario.model.Usuario;
import edu.unicen.servicio.usuario.repository.UsuarioRepository;



@ExtendWith(SpringExtension.class)
@WebMvcTest(UsuarioControllerJPA.class)
class UsuarioControllerJPATest2 {
	@MockBean
	UsuarioRepository repository;
	ObjectMapper mapper =new ObjectMapper();
	
	@Autowired
	private MockMvc mvc;
	

	/*@Test
	void testUsuarioControllerJPA() {
		fail("Not yet implemented");
	}*/

	/*@Test
	void testGetUsers() throws Exception {
		RequestBuilder request=MockMvcRequestBuilders.get("/");
		MvcResult result= mvc.perform(request).andReturn();
		System.out.println(result);
		//assertEquals("1,\"Enemark\", \"Belen\", 1111",result.getResponse().getContentAsString());
	}*/

	/*	@Test
	void testGetUserById() {
		RequestBuilder request=MockMvcRequestBuilders.get("/{id}");
	}

	@Test
	void testGetUserByUserName() {
		fail("Not yet implemented");
	}

	@Test
	void testDropUsuario() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdateCliente() {
		fail("Not yet implemented");
	}
*/
	@Test
	void testLogin() throws Exception {
		UsuarioDTO request =new UsuarioDTO();
		request.setUsername("agustina");
		Usuario user =new Usuario();
		user.setNombre_usuario(request.getUsername());

		when(repository.findByUserName(request.getUsername())).thenReturn(user);
		mvc.perform(post("/usuarios/login").content(mapper.writeValueAsString(request)).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect( jsonPath("$.name").value(request.getUsername()));
		
		}

	@Test
	void testRegistro() {
		fail("Not yet implemented");
	}

}
