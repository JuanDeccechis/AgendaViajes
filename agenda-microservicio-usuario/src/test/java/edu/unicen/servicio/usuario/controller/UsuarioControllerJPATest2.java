package edu.unicen.servicio.usuario.controller;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin;

@ExtendWith(SpringExtension.class)
@WebMvcTest(UsuarioControllerJPA.class)
class UsuarioControllerJPATest2 {
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

	@Test
	void testLogin() throws Exception {
		RequestBuilder requestBuilder =MockMvcRequestBuilders.post("/login").param("user", "mateo1").param("password", "1234");
	   MvcResult result=   mvc.perform(requestBuilder).andDo(print()).andExpect(status().isOk()).andExpect(cookie().exists("JSESSIONID"));
		
		}*/

	@Test
	void testRegistro() {
		fail("Not yet implemented");
	}

}
