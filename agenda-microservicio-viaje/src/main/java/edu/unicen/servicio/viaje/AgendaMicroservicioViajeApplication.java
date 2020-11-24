package edu.unicen.servicio.viaje;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import edu.unicen.servicio.viaje.segurity.JWTAuthorizationFilter;


import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.Contact;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@EnableSwagger2
@ComponentScan(basePackages = {"edu.unicen.servicio.viaje.controller"})
@SpringBootApplication
public class AgendaMicroservicioViajeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendaMicroservicioViajeApplication.class, args);

	}

	@EnableWebSecurity
	@ComponentScan(basePackages = { "com.baeldung.security" })
	@Configuration
	class WebSecurityConfig extends WebSecurityConfigurerAdapter {
		

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.csrf().disable()
			.cors().configurationSource(corsConfigurationSource())
			.and()
			.addFilterAfter(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
			.authorizeRequests().antMatchers("/webjars/**").permitAll()
			.mvcMatchers("/swagger-ui/**", "/configuration/**", "/swagger-resources/**", "/v2/api-docs","/v3/api-docs","/webjars/**", "/**/**/**", "/login", "/error/**").permitAll()
			.requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
			.anyRequest().authenticated();

		}

		@Bean
		public BCryptPasswordEncoder passwordEncoder() {
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			return bCryptPasswordEncoder;
		}

		@Bean
		public WebMvcConfigurer CORSConfigurer(){
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**")
					.allowedOrigins("*")
					.allowedMethods("GET", "POST", "PUT","DELETE");
				}
			};
		}

		@Bean
		CorsConfigurationSource corsConfigurationSource() {
			CorsConfiguration configuration = new CorsConfiguration();
			configuration.setAllowedOrigins(Arrays.asList("*"));
			configuration.setAllowedMethods(Arrays.asList("GET","POST"));
			configuration.setAllowCredentials(true);
			//the below three lines will add the relevant CORS response headers
			configuration.addAllowedOrigin("*");
			configuration.addAllowedHeader("*");
			configuration.addAllowedMethod("*");
			UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
			source.registerCorsConfiguration("/**", configuration);
			return source;
		}


	}

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("edu.unicen.servicio.viaje.controller"))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo())
				.securityContexts(Arrays.asList(securityContext()))
			    .securitySchemes(Arrays.asList(apiKey()));
	}
	
	private SecurityContext securityContext() { 
	    return SecurityContext.builder().securityReferences(defaultAuth()).build(); 
	} 
	 
	private List<SecurityReference> defaultAuth() { 
	    AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything"); 
	    AuthorizationScope[] authorizationScopes = new AuthorizationScope[1]; 
	    authorizationScopes[0] = authorizationScope; 
	    return Arrays.asList(new SecurityReference("JWT", authorizationScopes)); 
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("REST API")
				.description("The REST API for demo swagger.").termsOfServiceUrl("")
				.contact(new Contact("RICH LEE", "", "rich.lee@gmail.com"))
				.license("Apache License Version 2.0")
				.licenseUrl("https://www.apache.org/licenses/LICENSE-2.0")
				.version("0.0.1")
				.build();
	}

	private ApiKey apiKey() { 
	    return new ApiKey("JWT", "Authorization", "header"); 
	}



}