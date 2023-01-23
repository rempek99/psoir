package pl.remmac.psoir;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class PsoirApplication {
	public static void main(String[] args) {
		SpringApplication.run(PsoirApplication.class, args);
	}
}
