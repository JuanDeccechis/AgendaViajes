package edu.unicen.servicio.usuario.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//import com.github.javafaker.Faker;

import edu.unicen.servicio.usuario.repository.UsuarioRepository;
import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class LoadData {
	@Bean
	CommandLineRunner initDataBaseUsuario(@Qualifier("usuarioRepository") UsuarioRepository repository) {
//		Faker faker = new Faker(new Locale("es"));
//		List<Cliente> datos = new ArrayList<Cliente> ();
//		for (int i = 1; i <= CANTMAXCLIENTES; i++) {
//			datos.add(new Cliente(i, faker.name().lastName(), faker.name().firstName(), Integer.parseInt(faker.phoneNumber().subscriberNumber(8))));
//		}
////		datos.add(new Cliente(1,"Enemark", "Belen", 1111));
////		datos.add(new Cliente(2,"Deccechis", "Juan", 1234));
////		datos.add(new Cliente(3,"Zarrabeitia", "Mateo", 9999));
//		repository.saveAll(datos);
		return null;
	}
}
