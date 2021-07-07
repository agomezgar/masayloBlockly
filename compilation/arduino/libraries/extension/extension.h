#ifndef extension_h
#define extension_h

class extension  {
public:
	extension();
	void ultrason(byte trig, byte echo);
	float ultrason_distance();
	void bargraphe(byte dcki, byte di);
	void bargraphe_allumer(byte del);
	void matrice16(byte sda, byte scl);
	void matrice32(byte sda, byte scl);
	void rvb(byte pinR, byte pinV, byte pinB);
	void rvb_afficher_couleur(byte red, byte green, byte blue);
	void mp3();
	void sendData(unsigned int data) ;
	void setData(unsigned char _state[]);
	void matrice16_afficher(byte s[]);
	void matrice16_effacer();
	void IIC_start(byte scl,byte sda);
	void IIC_end(byte scl,byte sda);
	void IIC_send(unsigned char send_data);

private:
	byte Rouge_pin;
	byte Vert_pin;
	byte Bleu_pin;
	byte trig_pin;
	byte echo_pin;
	byte dcki_pin;
	byte di_pin;
	byte sda_pin;
	byte scl_pin;
};

#endif