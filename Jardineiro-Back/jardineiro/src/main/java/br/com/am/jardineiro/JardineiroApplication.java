package br.com.am.jardineiro;

import br.com.am.jardineiro.MQTT.ClientMQTT;
import br.com.am.jardineiro.MQTT.ConnectionMQTT;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JardineiroApplication {

    public static void main(String[] args) {
        SpringApplication.run(JardineiroApplication.class, args);
        new ConnectionMQTT();
    }

}
