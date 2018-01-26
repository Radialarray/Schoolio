#include <SPI.h>
#include <MFRC522.h>

#define RST_PIN         9          // Configurable, see typical pin layout above
#define SS_1_PIN        10         // Configurable, take a unused pin, only HIGH/LOW required, must be diffrent to SS 2
#define SS_2_PIN        8          // Configurable, take a unused pin, only HIGH/LOW required, must be diffrent to SS 1

#define NR_OF_READERS   1

byte ssPins[] = {SS_1_PIN, SS_2_PIN};

MFRC522 mfrc522;   // Create MFRC522 instance.

int lastValues[4];
int counter = 0;
int isPresent = 0;
int tagOnReader = 0;
int lastUID;
/**
   Initialize.
*/
void setup() {

  Serial.begin(9600); // Initialize serial communications with the PC
  while (!Serial);    // Do nothing if no serial port is opened (added for Arduinos based on ATMEGA32U4)

  SPI.begin();        // Init SPI bus

  for (uint8_t reader = 0; reader < NR_OF_READERS; reader++) {
    mfrc522.PCD_Init(ssPins[reader], RST_PIN); // Init each MFRC522 card
    Serial.print(F("Reader "));
    Serial.print(reader);
    Serial.print(F(": "));
    mfrc522.PCD_DumpVersionToSerial();
  }
}


void loop() {
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    Serial.println("No card");
    delay(2000);
    return;
  }


//check if serial has been read!!! Important, else jumps over to 'no card'
  if ( ! mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  //  Serial.println("Present");
  Serial.print(F("Card UID:"));
  mfrc522.PICC_ReadCardSerial();

  dump_byte_array(mfrc522.uid.uidByte, mfrc522.uid.size);

  delay(2000);

  mfrc522.PICC_HaltA();

}

/**
   Helper routine to dump a byte array as hex values to Serial.
*/
void dump_byte_array(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], HEX);
  }
  Serial.println();
}
