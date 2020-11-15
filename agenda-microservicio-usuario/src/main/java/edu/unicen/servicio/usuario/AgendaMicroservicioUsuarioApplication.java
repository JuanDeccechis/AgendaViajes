package edu.unicen.servicio.usuario;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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

import edu.unicen.servicio.usuario.segurity.JWTAuthorizationFilter;

@SpringBootApplication
public class AgendaMicroservicioUsuarioApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendaMicroservicioUsuarioApplication.class, args);
	}



	@EnableWebSecurity
	@ComponentScan(basePackages = { "com.baeldung.security","(default package)" })
	@Configuration
	class WebSecurityConfig extends WebSecurityConfigurerAdapter {

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.csrf().disable()
			.cors().configurationSource(corsConfigurationSource())
			.and()
			.addFilterAfter(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, "/usuarios/login").permitAll()
			.antMatchers(HttpMethod.POST, "/usuarios/register").permitAll()
			.mvcMatchers("/swagger-ui/**", "/configuration/**", "/swagger-resources/**", "/v2/api-docs","/v3/api-docs","/webjars/**").permitAll()
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

}
