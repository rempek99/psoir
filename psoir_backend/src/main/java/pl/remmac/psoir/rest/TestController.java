package pl.remmac.psoir.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("test")
public class TestController {

    @GetMapping
    public String home() {
        return String.format("Hello, the application is currently running %s", Instant.now());
    }
}
