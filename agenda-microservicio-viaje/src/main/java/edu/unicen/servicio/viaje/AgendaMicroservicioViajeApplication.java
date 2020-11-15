package edu.unicen.servicio.viaje;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"edu.unicen.servicio.viaje.controller"})
@SpringBootApplication
public class AgendaMicroservicioViajeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendaMicroservicioViajeApplication.class, args);
	}

}