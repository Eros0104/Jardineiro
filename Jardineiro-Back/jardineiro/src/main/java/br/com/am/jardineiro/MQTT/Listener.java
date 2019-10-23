package br.com.am.jardineiro.MQTT;

import br.com.am.jardineiro.controller.StatusController;
import br.com.am.jardineiro.entity.Status;
import br.com.am.jardineiro.repository.StatusRepository;
import br.com.am.jardineiro.service.StatusService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.eclipse.paho.client.mqttv3.IMqttMessageListener;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class Listener implements IMqttMessageListener {
    public Listener(ClientMQTT clienteMQTT, String topico, int qos) {
        clienteMQTT.subscribe(qos, this, topico);
    }
    @Autowired
    private StatusService service;
    @Override
    public void messageArrived(String topico, MqttMessage mm) throws Exception {
        Status status = new ObjectMapper().readValue(new String(mm.getPayload()), Status.class);

        service.save(status);

        System.out.println("Mensagem recebida:");
        System.out.println("\tTópico: " + topico);
        System.out.println("\tMensagem: " + new String(mm.getPayload()));
    }
}
