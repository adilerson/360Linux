int led = 13;
int a = A0;
int b = A1;
void setup() {
  pinMode(led, OUTPUT);
  pinMode(a, OUTPUT);
  digitalWrite(a, HIGH);
  pinMode(b, OUTPUT);
  digitalWrite(b, HIGH);
  Serial.begin(115200);
}

String leStringSerial() {
  String conteudo = "";
  char caractere;

  // Enquanto receber algo pela serial
  while (Serial.available() > 0) {
    // Lê byte da serial
    caractere = Serial.read();
    // Ignora caractere de quebra de linha
    if (caractere != '\n') {
      // Concatena valores
      conteudo.concat(caractere);
    }
    // Aguarda buffer serial ler próximo caractere
    delay(10);
  }

  //Serial.print("Recebi: ");
  //Serial.println(conteudo);

  return conteudo;
}

void loop() {
  // Se receber algo pela serial
  if (Serial.available() > 0) {
    // Lê toda string recebida
    String recebido = leStringSerial();

    if (recebido == "0") {
      digitalWrite(led, HIGH);
      digitalWrite(b, LOW);
      delay(750);
      digitalWrite(led, LOW);
      digitalWrite(b, HIGH);
    }    

    if (recebido == "1") {
      digitalWrite(led, HIGH);
      digitalWrite(a, LOW);
      delay(750);
      digitalWrite(led, LOW);
      digitalWrite(a, HIGH);
    }



    if (recebido == "3") {
      Serial.print("Stop Gravado");
      digitalWrite(led, HIGH);
      digitalWrite(b, LOW);
      delay(4000);
      digitalWrite(led, LOW);
      digitalWrite(b, HIGH);
      
    }

     if (recebido == "4") {
      Serial.print("Start gravado");
      digitalWrite(led, HIGH);
      digitalWrite(a, LOW);
      delay(4000);
      digitalWrite(led, LOW);
      digitalWrite(a, HIGH);
      
    }

     if (recebido == "9") {
      Serial.print("Reset iniciado...");

      digitalWrite(a, LOW);
      digitalWrite(b, LOW);
      delay(3500);
      Serial.print("5 segundos...");
      digitalWrite(b, HIGH);
      delay(350);
      digitalWrite(b, LOW);
      delay(350);
      digitalWrite(b, HIGH);
      delay(350);
      digitalWrite(b, LOW);
      delay(350);
      digitalWrite(b, HIGH);      
      delay(350);
      digitalWrite(b, LOW);
      delay(350);
      digitalWrite(b, HIGH);      
      delay(50);
      digitalWrite(a, HIGH);


    }

    if (recebido == "5") {
      Serial.print("ok");
    }

  }
}
