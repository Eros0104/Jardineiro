package br.com.am.jardineiro.MQTT;

import org.hibernate.engine.jdbc.connections.internal.ConnectionProviderInitiator;

public class ConnectionMQTT {
    public ConnectionMQTT(){
        ClientMQTT clienteMQTT = new ClientMQTT("tcp://broker.hivemq.com:1883", null, null);
        clienteMQTT.iniciar();
        new Listener(clienteMQTT, "ArduinoeCia", 0);
    }
}
