'use strict';
goog.provide('Blockly.Msg.fr');
goog.require('Blockly.Msg');

// commun à tous les blocs
Blockly.Msg.HELPURL="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi"; //ne pas traduire
Blockly.Msg.pin="sur la broche";
Blockly.Msg._AT="à";
Blockly.Msg.AV="avant";
Blockly.Msg.AR="arrière";
Blockly.Msg.high="HIGH"; //ne pas traduire
Blockly.Msg.low="LOW"; //ne pas traduire
Blockly.Msg.right="droit";
Blockly.Msg.left="gauche";
Blockly.Msg.LetR="droit & gauche";
Blockly.Msg.direction="direction";
Blockly.Msg.vitesse="vitesse ";
Blockly.Msg.CAT_STOCKAGE = "⊞ Stockage";
Blockly.Msg.CAT_numerique = "- Numérique";
Blockly.Msg.CAT_analogique = "~ Analogique";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Tableaux";
Blockly.Msg.CAT_ARDUINO_BASICS="∞ Arduino basics"
Blockly.Msg.CAT_list = "▤ Listes";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Logique";
Blockly.Msg.CAT_MATH = "∑ Maths";
Blockly.Msg.CAT_TEXT = "❝ Texte";
Blockly.Msg.CAT_VARIABLES = "↝ Variables";
Blockly.Msg.CAT_FUNCTIONS = "∬ Fonction";
Blockly.Msg.CAT_ARDUINO = "∞ Structure";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Entrée/Sortie";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Exit";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ Temps";
Blockly.Msg.CAT_actionneur = "↻ Moteur";
Blockly.Msg.CAT_com = "☎ Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- Port série";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Port série logiciel";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Moteurs pas à pas";
Blockly.Msg.CAT_ultrason = "⇣ Capteur";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ Bouche LED";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ Yeux LED ";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ LCD Écran";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "🤖  Otto";
Blockly.Msg.CAT_OTTOH = "🦸‍♂️ Humanoid";
Blockly.Msg.CAT_MASAYLO="🚗 Masaylo";
Blockly.Msg.CAT_RUPERTOBOT="🎃 Rupertobot"
Blockly.Msg.CAT_ESCORNABOT="🚜 Escornabot";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ NeoPixel";
Blockly.Msg.CAT_CASTING=" 🔄 Casting";
//wifi
Blockly.Msg.esp8266_init_tooltip="initialisation du module wifi et connection avec les paramètres indiqués";
Blockly.Msg.esp8266_1="Esp 8266";
Blockly.Msg.esp8266_2="ssid";
Blockly.Msg.esp8266_3="clé";
Blockly.Msg.esp8266_4="IP";
Blockly.Msg.esp8266_5="passerelle";
Blockly.Msg.esp8266_6="masque";
Blockly.Msg.esp8266_7=[["client", "client"],["serveur", "serveur"]];
Blockly.Msg.esp8266_8="port";
Blockly.Msg.esp8266_9=[["dynamique", "dynamic"],["statique", "static"]];
Blockly.Msg.esp8266_10="adressage";
Blockly.Msg.esp8266_recept_tooltip="reception";
Blockly.Msg.esp8266_url="http://julien.coron.free.fr/?p=928";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip="";
Blockly.Msg.esp8266_send_html="associer la page HTML";
Blockly.Msg.esp8266_send_html_title="nom: ";
Blockly.Msg.esp8266_send_html_address="adressage (vide pour principale):";
Blockly.Msg.esp8266_send_html_execute="puis courir: ";
Blockly.Msg.esp8266_start_tooltip="";
Blockly.Msg.esp8266_start="démarrer le serveur";
Blockly.Msg.esp8266_request_tooltip="";
Blockly.Msg.esp8266_request="dans la requête";
Blockly.Msg.esp8266_request_container = "on trouve";
Blockly.Msg.esp8266_wait_for_response="attendre une réponse du serveur";
Blockly.Msg.esp8266_port="port: ";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN='Interruption : quand un';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN="désactiver l'interruption sur la broche";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT="Spécifie une action à réaliser lorsqu'une interruption externe (4 modes possibles) survient sur la broche 2 ou 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT="Désactive l'interruption externe spécifiée précédement";
Blockly.Msg.LKL_MODE='est détecté sur la broche';
//FIELDDROPDOWN
Blockly.Msg.note=[["DO\u2084","261"],["RE\u2084","293"],["MI\u2084","329"],["FA\u2084","349"],["SOL\u2084","392"],["LA\u2084","440"],["SI\u2084","493"],["DO\u2085","523"],["RE\u2085","587"],["MI\u2085","659"],["FA\u2085","698"],["SOL\u2085","784"],["LA\u2085","880"]];
Blockly.Msg.tempo=[["1", "125"], ["2", "250"], ["4", "500"], ["8", "1000"], ["16", "2000"]];
Blockly.Msg.on_off=[["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink=[["lentement", "1000"],["rapidement", "100"]];
Blockly.Msg.AV_AR=[[Blockly.Msg.AV, "FORWARD"],[Blockly.Msg.AR, "BACKWARD"]];//ne pas traduire
Blockly.Msg.times=[["secondes", "s"],["millisecondes", "m"],["microsecondes", "u"]];
Blockly.Msg.time=[["secondes", "s"],["millisecondes", "m"]];
Blockly.Msg.char_lcd=[["n°1","1"],["n°2","2"],["n°3","3"],["n°4","4"],["n°5","5"],["n°6","6"],["n°7","7"],["n°8","8"]];
Blockly.Msg.rxtx=[["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]];
Blockly.Msg.FIELDDROPDOWN=[["1(état haut)", Blockly.Msg.high], ["0(état bas)",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1=[["HAUT", Blockly.Msg.high], ["BAS",Blockly.Msg.low]];
Blockly.Msg.ligne=[["1", "0"], ["2", "1"]];
Blockly.Msg.colonne=[["1","0"],["2","1"],["3","2"],["4","3"],["5","4"],["6","5"],["7","6"],["8","7"],["9","8"],["10","9"],["11","10"],["12","11"],["13","12"],["14","13"],["15", "14"],["16", "15"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF=[["allumer", Blockly.Msg.high], ["éteindre",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice=[["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar=[[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR,Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN=[['front montant', "RISING"], ['front descendant', "FALLING"], ["changement d'état", "CHANGE"], ["état bas",Blockly.Msg.low]];
Blockly.Msg.irq=[['front montant', "Pin.IRQ_RISING"], ['front descendant', "Pin.IRQ_FALLING"], ["état haut", "Pin.IRQ_HIGH_LEVEL"], ["état bas", "Pin.IRQ_LOW_LEVEL"]];
Blockly.Msg.menudht=[["humidité", "h"],["température", "t"]];
Blockly.Msg.couleur=[["bleu", "bleu"],["jaune", "jaune"],["rouge", "rouge"],["vert", "vert"]];
Blockly.Msg.sens=[["avancer", "a"],["tourner à droite", "d"],["tourner à gauche", "g"]];
//capteur
Blockly.Msg.VL53L0X="Détecteur à laser";
Blockly.Msg.VL53L0X_tooltip="initialise le détecteur.\nDétecteur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distance mesurée par laser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nretourne la distance mesurée par laser en mm";
Blockly.Msg.bme280="Détecteur de pression atmosphérique";
Blockly.Msg.bme280_tooltip="initialise le détecteur.\nDétecteur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="pression atmosphérique";
Blockly.Msg.bme280_pressure_tooltip="retourne la pression atmosphérique en hPa";
Blockly.Msg.inter="interrupteur sur";
Blockly.Msg.inter2="connecté a la broche: ";
Blockly.Msg.inter_tooltip="retourne vrai (faux) si l'interrupteur est (n'est pas) sur la position indiquée";
Blockly.Msg.mc005="présence détectée sur la broche";
Blockly.Msg.mc005_tooltip="MC005:\nretourne vrai (faux) si une présence est (n'est pas) pressé";
Blockly.Msg.bp="bouton pressé sur la broche";
Blockly.Msg.bp_tooltip="retourne vrai (faux) si un bouton poussoir est (n'est pas) pressé";
Blockly.Msg.dht11_tooltip="DHT11 :\nretourne l'humidité de l'air (de 20 à 80%) ou \n la température (de 2 à 50°C)";
Blockly.Msg.dht22_tooltip="DHT22 :\nretourne l'humidité de l'air (de 0 à 100%) ou \n la température (de -40 à 80°C)";
Blockly.Msg.suiveur_ligne="ligne noire détectée sur la broche";
Blockly.Msg.suiveur_ligne_tooltip= "CAP227 :\nretourne vrai (faux) si une ligne noire est (n'est pas) détectée";
Blockly.Msg.light= "luminosité sur la broche";
Blockly.Msg.light_tooltip= "retourne une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière";
Blockly.Msg.hum= "humidité du sol sur la broche";
Blockly.Msg.hum_tooltip= "CAP 615 :\nretourne l'humidité du sol de 0 à 100%";
Blockly.Msg.light_tooltip= "retourne une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière";
Blockly.Msg.grove_ldr= "luminosité sur la broche";
Blockly.Msg.grove_ldr_tooltip= "retourne la luminosité mesurée\n0 : aucune lumière\n100 : lumière très intense";
Blockly.Msg.potar= "position du curseur sur la broche";
Blockly.Msg.potar_tooltip= "retourne une valeur en fonction de la position du curseur\n0 : curseur à gauche\n255 : curseur à droite";
Blockly.Msg.lm35= "température sur la broche";
Blockly.Msg.lm35_tooltip="LM35 :\nretourne la température mesurée en degré celcius (de 0 à 80°)";
Blockly.Msg.ultrason_1="distance < limite";
Blockly.Msg.ultrason_2="retourne un état Haut si la distance mesurée est inférieur à la limite";
Blockly.Msg.ultrason_distance1="distance mesurée par ultrason";
Blockly.Msg.ultrason_tooltip="HC-SR04 :\ncapteur à ultrason qui permet de faire des mesures de distance (de 3 cm et 4 m)\nindiquer les broches de l'arduino sur lesquelles vont être connectées TRIG et ECHO";
Blockly.Msg.ultrason="détecteur à ultrason";
Blockly.Msg.ultrason_distance2="HC-SR04 :\nretourne la distance mesurée en cm par le détecteur à ultrason";
Blockly.Msg.ultrason_helpurl="https://www.carnetdumaker.net/articles/mesurer-une-distance-avec-un-capteur-ultrason-hc-sr04-et-une-carte-arduino-genuino/";//ne pas traduire
Blockly.Msg.pir="mouvement détecté ";
Blockly.Msg.feu="flamme détectée ";
Blockly.Msg.presence="obstacle détecté ";
Blockly.Msg.appui="appui digital ";
Blockly.Msg.pir_tooltip="HC-SR501 :\nretourne vrai (faux) si une présence est (n'est pas) détectée";
Blockly.Msg.feu_tooltip="CAP168 :\nretourne vrai (faux) si une flamme est (n'est pas) détectée";
Blockly.Msg.presence_tooltip="CAP711 :\nretourne vrai (faux) si un contact a (n'a pas) lieu";
Blockly.Msg.appui_tooltip="CAP831 :\nretourne vrai (faux) si un appui est (n'est pas) détecté";
Blockly.Msg.CAP661="impulsions sur la broche";
Blockly.Msg.CAP661_TOOLTIP="retourne le nombre de fentes (pleines + creuses) de la roue codeuse";
//bluetooth
Blockly.Msg.bluetooth1="si la donnée reçue par bluetooth";
Blockly.Msg.bluetooth1_tooltip= "réception de données par bluetooth\nconnecter le module HC-06 sur les broches 0 et 1\net croiser les broches Rx et Tx";
Blockly.Msg.bluetooth2= "envoyer par bluetooth";
Blockly.Msg.bluetooth2_tooltip= "envoie des données par bluetooth\nconnecter le module HC-06 sur les broches 0 et 1\net croiser les broches Rx et Tx";
Blockly.Msg.bluetooth_init_tooltip="";
Blockly.Msg.bluetooth_helpurl="http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=57&sid=cedb66db91596dd8926d167142dbf307";//ne pas traduire
//écran LCD
Blockly.Msg.lcd_fond="fond";
Blockly.Msg.LCD="écran LCD";
Blockly.Msg.LCDi2c_tooltip="initialise l'écran LCD I2C, de 2 lignes et 16 caractères avec rétro-éclairage RGB.\nAfficheur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.LCD_tooltip= "initialise l'écran LCD, de 2 lignes et 16 caractères, en indiquant les broches à connecter";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL= "http://electroniqueamateur.blogspot.fr/2017/01/utiliser-un-afficheur-lcd-2-x-16-avec.html";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT="afficher sur l'écran LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip="affiche le texte à l'emplacement indiqué";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP="écris le(s) texte(s) sur l'écran LCD";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1="ligne 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2="ligne 2";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT3="ligne 3";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT4="ligne 4";
Blockly.Msg.LCD_ADDRESS="direction";
Blockly.Msg.LCD_COLUMNS="colonnes";
Blockly.Msg.LCD_ROWS="lignes";
Blockly.Msg.LCD_line="ligne";
Blockly.Msg.LCD_col="colonne";
Blockly.Msg.LCD_raz="effacer l'écran LCD";
Blockly.Msg.LCD_raz_tooltip="efface l'écran";
Blockly.Msg.lcd_aff_symbole="afficher le symbole";
Blockly.Msg.lcd_aff_symbole_tooltip="affiche le symbole qui a été défini auparavant";
Blockly.Msg.lcd_symbole="déclarer le symbole";
Blockly.Msg.lcd_symbole_tooltip="définition d'un caractère pour l'afficheur LCD :\n 0 éteint une pixel\n 1 allume une pixel";
// structure
Blockly.Msg.loop="Boucle";
Blockly.Msg.init="Initialisation";
Blockly.Msg.base_setup_loop="La fonction initialisation :\nElle est utilisée pour initialiser les variables, le sens des broches...\nElle n'est exécutée qu'une seule fois\nLa fonction boucle :\nC'est la partie principale du programme, tous les blocs placés ici s'éxécuteront en boucle et indéfiniment (plusieurs milliers de fois par seconde)";
Blockly.Msg.loop_tooltip="tous les blocs placés ici s'éxécuteront en boucle et indéfiniment (plusieurs milliers de fois par seconde)";
Blockly.Msg.begin_tooltip="ce bloc permet de déclarer l'ordre dans lequel le programme doit s'exécuter";
Blockly.Msg.begin="DÉBUT du programme";
Blockly.Msg.def="Déclaration";
Blockly.Msg.def_tooltip="tous les blocs placés ici ne s'éxécuteront qu'une seule fois, c'est ici qu'on configure les différents capteurs ou actionneurs";
Blockly.Msg.END="FIN du programme";
Blockly.Msg.END_tooltip="Stoppe le programme, les blocs placés à la suite seront ignorés";
Blockly.Msg.code_tooltip="Tapez ici une instruction qui ne se trouve pas sous forme de blocs";
//matrice
Blockly.Msg.matriceLC="mettre la DEL, de la matrice";
Blockly.Msg.matrice_create_aff="Créer le bloc 'afficher le symbole %1'";
Blockly.Msg.matrice_create_symbole="Créer le bloc 'déclarer le symbole %1'";
Blockly.Msg.matrice="matrice";
Blockly.Msg.matrice8x8_tooltip="Initialisation de la matrice à 64 DEL, il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole="déclarer le symbole";
Blockly.Msg.matrice8x8_symbole_tooltip="définition d'un symbole pour la matrice :\n 0 éteint une DEL\n 1 allume une DEL";
Blockly.Msg.matrice8x8_efface="éteindre les DEL de la matrice";
Blockly.Msg.matrice8x8_aff="afficher le symbole";
Blockly.Msg.matrice8x8_scroll="Écrire du texte";
Blockly.Msg.matrice8x8_scroll_tooltip="Écrire un texte défilant sur l'écran\n(majuscules, 9 caractères";
Blockly.Msg.matrice8x8_binaire_tooltip="1 allume une DEL de la matrice et 0 l'éteint";
Blockly.Msg.matrice8x8_del_tooltip= "Allume (éteint) une DEL de la matrice en indiquant les coordonnées de celle-ci\nAttention la numérotation commence à 0";
Blockly.Msg.matrice8x8_aff_tooltip= "Affiche le symbole qui aura été préalablement défini";
Blockly.Msg.matrice8x8_efface_tooltip= "Eteint toutes les DEL de la matrice";
Blockly.Msg.matrice8x8_helpurl="http://tiptopboards.free.fr/arduino_forum/viewtopic.php?t=6&p=6";
Blockly.Msg.matrice16x8_tooltip="Initialisation de la matrice à 128 DEL.\nMatrice <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole="déclarer le symbole";
Blockly.Msg.matrice16x8_symbole_tooltip="définition d'un symbole pour la matrice :\n 0 éteint une DEL\n 1 allume une DEL";
Blockly.Msg.matrice16x8_efface="éteindre les DEL de la matrice";
Blockly.Msg.matrice16x8_aff="afficher le symbole";
Blockly.Msg.matrice16x8_binaire_tooltip="1 allume une DEL de la matrice et 0 l'éteint";
Blockly.Msg.matrice16x8_del_tooltip= "Allume (éteint) une DEL de la matrice en indiquant les coordonnées de celle-ci\nAttention la numérotation commence à 0";
Blockly.Msg.matrice16x8_aff_tooltip= "Affiche le symbole qui aura été préalablement défini";
Blockly.Msg.matrice16x8_efface_tooltip= "Eteint toutes les DEL de la matrice";
Blockly.Msg.matrice16x8_helpurl="http://";
Blockly.Msg.matrice8x8_scroll_tooltip="fait défiler le texte indiqué sur les matrices";
Blockly.Msg.matrice8x8_scroll="faire défiler";
//temps
Blockly.Msg.millis0 ="temps écoulé en";
Blockly.Msg.millis1="durée en";
Blockly.Msg.millis2="depuis le début";
Blockly.Msg.millis_tooltip="retourne le temps écoulé depuis que le programme a démarré";
Blockly.Msg.millis_start="commencer un chronométrage en";
Blockly.Msg.millis_start_tooltip="commence un chronométrage à partir du moment où le bloc est positionné";
Blockly.Msg.chrono_tooltip="retourne le temps écoulé depuis que le chronomètre a été lancé";
Blockly.Msg.ARDUINO_INOUT_Pulsein="retourne la durée en microsecondes d'une impulsion de niveau HAUT ou BAS appliquée sur une broche. Si le paramètre valeur est HAUT (BAS), le bloc attend que la broche passe à HAUT (BAS), commence alors le chronométrage, attend que la broche repasse au niveau BAS (HAUT) et stoppe alors le chronométrage";
Blockly.Msg.ARDUINO_BASE_DELAY="attendre";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP="spécifier le temps d'attente en secondes, millisecondes ou microsecondes.\nLe programe ne fait rien d'autre pendant ce laps de temps";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP="retourne la durée en millisecondes, secondes ou microsecondes depuis que le programme a commencé";
Blockly.Msg.ARDUINO_PULSEIN="durée de l'état";
Blockly.Msg.tempo_helpurl="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ExempleBlinkWithoutDelay";
Blockly.Msg.tempo_tooltip="Ce bloc vérifie si le temps indiqué est arrivé, si c'est le cas alors il éxécute les blocs placés à l'intérieur. Contrairement au bloc 'attendre' celui-ci n'est pas bloquant.";
Blockly.Msg.tempo1="toutes les";
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
//DEL
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT="la DEL de la carte";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP="éteint ou allume la DEL sur la carte Arduino";
Blockly.Msg.blink="faire clignoter la DEL de la carte";
Blockly.Msg.blink_tooltip= "la DEL de la carte clignote 1 ou 10 fois par seconde";
Blockly.Msg.del="la DEL connectée à la broche";
Blockly.Msg.del_tooltip="allume (éteint) la DEL connectée à la broche indiquée";
Blockly.Msg.bargraphe="bargraphe";
Blockly.Msg.bargraphe_allume="allumer les DEL du bargraphe jusqu'à";
Blockly.Msg.bargraphe_allume_tooltip="0 n'allume aucune DEL\n2,5 allume les 2 premières DEL et la 3ème à moitié\n10 allume toutes les DEL";
Blockly.Msg.bargraphe_tooltip="module bargraphe composé de 10 DEL (8 vertes, 1 jaune et 1 rouge), il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DCKI et DI";
Blockly.Msg.rvb_init="DEL rvb";
Blockly.Msg.rvb_init_tooltip="indiquer les broches PWM à connecter à la DEL RVB";
Blockly.Msg.rvb_set="afficher la couleur";
Blockly.Msg.rvb_set_tooltip="affiche la couleur en fonction des 3 composantes (rouge, vert, bleu)";
Blockly.Msg.pixel1="pixel RVB";
Blockly.Msg.pixel2="mettre à jour les pixels";
Blockly.Msg.pixel3="avec la couleur";
Blockly.Msg.pixel4="nombre";
Blockly.Msg.pixel5="régler la luminosité des pixels à";
Blockly.Msg.pixel6="régler la pixel";
Blockly.Msg.pixel7="allumer les pixels";
Blockly.Msg.pixel8="éteindre les pixels";

Blockly.Msg.pixel1_tooltip="module neopixel RVB\nindiquer la broche à connecter et le nombre de pixels";
Blockly.Msg.pixel2_tooltip="affiche les modifications apportées";
Blockly.Msg.pixel3_tooltip="choisir la pixel à allumer ainsi que sa couleur\nAttention la numérotation commence à 0";
Blockly.Msg.pixel4_tooltip="éteint toutes les pixels";
Blockly.Msg.pixel5_tooltip="règle la luminosité des pixels (de 0 à 255)";
//sortie
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1="mettre la broche NUMERIQUE";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP="écrire un état logique (0 ou 1) sur la broche indiquée";
Blockly.Msg.toggle="basculer l'état de la broche";
Blockly.Msg.toggle_tooltip="Toggle :\nécrire un état logique 0 si auparavant il y avait un état 1 (et inversement) sur la sortie spécifiée";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1="mettre la broche PWM";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP="envoyer une valeur comprise entre 0 et 255 sur la broche indiquée";
//entrée
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT="état de la broche NUMERIQUE";
Blockly.Msg.in_pullup ="Pull-Up";
Blockly.Msg.in_pullup_tooltip="retourne l'état logique (0 ou 1) de la broche indiquée\nretourne 1(état haut) par défaut si pull-up activé";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP="retourne l'état logique (0 ou 1) de la broche indiquée";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT="valeur de la broche ANALOGIQUE";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP="retourne une valeur comprise entre 0 et 1023";
//audio
Blockly.Msg.play="jouer";
Blockly.Msg.play_tooltip="joue la note indiquée pendant le temps indiqué\n1 temps = 125ms\n2 temps = 250ms\n4 temps = 500ms...";
Blockly.Msg.play_helpurl="";
Blockly.Msg.beep="émettre un bip sur la broche";
Blockly.Msg.beep_TOOLTIP="émet un bip (à 440Hz pendant 1s) sur la broche selectionnée";
Blockly.Msg.ARDUINO_TONE_INPUT1="émettre un son sur la broche";
Blockly.Msg.ARDUINO_TONE_INPUT2="fréquence (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3="durée (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP="émettre un son sur la broche selectionnée, à la fréquence désirée et pendant la durée souhaitée";
Blockly.Msg.ARDUINO_NOTONE_INPUT="stopper le son sur la broche";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP="arrêter le son sur la broche selectionnée";
Blockly.Msg.lp2i_mp3_helpurl="http://ouilogique.com/tests_DFPlayer/";
Blockly.Msg.lp2i_mp3_Volume="volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay="lecture automatique";
Blockly.Msg.lp2i_mp3="lecteur MP3";
Blockly.Msg.lp2i_mp3_tooltip="DFPlayer Mini mp3 :\ninitialisation du module, du volume et du mode de fonctionnement\nModule MP3 <--> Arduino\nRx(2) <---------------> Tx(1)";
Blockly.Msg.lp2i_mp3_play="lire le fichier mp3";
Blockly.Msg.lp2i_mp3_play_track_tooltip="joue le morceau indiqué";
Blockly.Msg.lp2i_mp3_play_tooltip="joue le morceau en cours";
Blockly.Msg.lp2i_mp3_pause="mettre le fichier mp3 en pause";
Blockly.Msg.lp2i_mp3_pause_tooltip="stoppe le morceau en cours" ;
Blockly.Msg.lp2i_mp3_prev="lire le fichier mp3 précédent";
Blockly.Msg.lp2i_mp3_prev_tooltip="joue le morceau précédent";
Blockly.Msg.lp2i_mp3_vol="mettre le volume à";
Blockly.Msg.lp2i_mp3_vol_tooltip="mettre le volume à la valeur indiquée [0-48]";
Blockly.Msg.lp2i_mp3_next="lire le fichier mp3 suivant";
Blockly.Msg.lp2i_mp3_next_tooltip="joue le morceau suivant";
//servomoteur
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1="orienter le servomoteur";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE="angle [0-180]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP="rotation possible entre 0 et 180 degrés";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT="actionner le servomoteur en continue";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP="actionne le servomoteur connecté à la broche spécifiée, à la vitesse indiquée et dans le sens sélectionné";
//moteur
Blockly.Msg.mot_tooltip="Shield contrôleur de moteurs L293D :\nactionne les deux moteurs (M1 et M2) pour avancer ou tourner, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.mot_stop="arrêter";
Blockly.Msg.mot_stop_tooltip="Shield contrôleur de moteurs L293D :\nstoppe les deux moteurs (M1 et M2)";
Blockly.Msg.moteur="actionner le moteur ";
Blockly.Msg.moteurstop="arrêter le moteur ";
Blockly.Msg.moteur_tooltip="met en route le moteur à courant continu connecté à la broche indiquée, à la vitesse indiquée\nvitesse=0 --> arrêt du moteur";
Blockly.Msg.moteurdagu_tooltiprs040= "Carte RS 040 :\nactionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.moteurdagu_tooltiprs040stop= "Carte RS 040 :\nstoppe un des 2 moteurs";
Blockly.Msg.moteurdagu_tooltiprs027= "Carte RS 027 :\nactionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1="v1 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2="v2 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION="direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE=Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT="avant";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE="arrière";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP="stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1="v1 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2="v2 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT="broche";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT="pas par tour";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM=Blockly.Msg.vitesse+"(RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS="nombre de pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1="moteur DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2="moteur DC 2";
Blockly.Msg.m_pap="Moteur pas à pas";
Blockly.Msg.m_pap_step="pas";
Blockly.Msg.m_pap_step1="avancer de";
Blockly.Msg.m_pap_tooltip="Initialisation d'un moteur pas à pas.\nIndiquer le nombre de pas, la vitesse en tr/min et les broches à connecter";
Blockly.Msg.m_pap_step_tooltip="actionne le moteur pas à pas du nombre de pas indiqué, l'instruction suivante ne sera éxécutée qu'une fois la rotation du moteur effectuée";
//com série
Blockly.Msg.Serial_Init="port série sur";
Blockly.Msg.Serial_Init_tooltip="Fixe le débit de communication en nombre de caractères par seconde pour la communication série";
Blockly.Msg.Serial_Write="envoyer sur le port série";
Blockly.Msg.Serial_write_tooltip="Envoie des données sur le port série";
Blockly.Msg.Serial_Write2 = "écriver ligne: ";
Blockly.Msg.Serial_write2_tooltip = "écriver ligne sur le port série avec retour chariot";

Blockly.Msg.Serial_read="donnée lue sur le port série";
Blockly.Msg.Serial_read_tooltip="retourne le premier octet de donnée entrant disponible dans le port série, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.Serial_available="quantité de données sur le port série";
Blockly.Msg.Serial_available_tooltip="retourne le nombre d'octet disponible dans la file d'attente du port série, ou 0 si rien n'est disponible";
Blockly.Msg.Serial_saut="un saut de ligne";
Blockly.Msg.Serial_saut_tooltip="retourne un saut de ligne sur le moniteur série";
Blockly.Msg.Serial_space="un séparateur";
Blockly.Msg.Serial_space_tooltip="retourne un espace sur le moniteur série";
Blockly.Msg.repl_read="commande entrée par l'utilisateur";
//com logicielle
Blockly.Msg.SSERIAL_Init="port logiciel sur Rx";
Blockly.Msg.SSERIAL_tooltip="Création d'un nouveau port de communication en utilisant les broches et la vitesse spécifiées";
Blockly.Msg.SSERIAL_Read="donnée lue sur le port logiciel";
Blockly.Msg.SSERIAL_Read_tooltip="retourne le premier octet de donnée entrant disponible dans le port logiciel, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.SSERIAL_Write="envoyer sur le port logiciel";
Blockly.Msg.SSERIAL_Write_tooltip="Envoie des données sur le port logiciel";
Blockly.Msg.SSerial_Write2= "envoyer sur le port software";
Blockly.Msg.SSerial_write2_tooltip = "Envoie des données sur le port software";

Blockly.Msg.SSERIAL_Read_tooltip="retourne le premier octet de donnée entrant disponible dans le port logiciel, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.SSERIAL_Available="quantité de données sur le port logiciel";
Blockly.Msg.SSERIAL_Available_tooltip="retourne le nombre d'octet disponible dans la file d'attente du port logiciel, ou 0 si rien n'est disponible";
// stockage
Blockly.Msg.STOCK1="stocker la donnée";
Blockly.Msg.STOCK2="à l'adresse";
Blockly.Msg.STOCK_TOOLTIP="permet d'écrire une donnée (8 bits ou un octet) dans la mémoire EEPROM, à l'adresse indiquée\nATmega328p et ATmega32u4 --> 1024 octets\nATmega2560 --> 4096 octets";
Blockly.Msg.STOCK3="lire donnée à l'adresse";
Blockly.Msg.STOCK3_TOOLTIP="retourne la donnée stockée à l'adrese indiquée (8 bits ou un octet)\nATmega328p et ATmega32u4 --> 1024 octets\nATmega2560 --> 4096 octets";
////////////OTTO DIY Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.OTTO9_HOME_TEXT = "Début";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto reprend sa position d’origine";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";// do not translate
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";// do not translate
Blockly.Msg.OTTO9_CALIBRATION='Configuration ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='Jambe ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='Pied ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='Bras ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='Utilisez de petites valeurs positives et négatives de manière itérative, changer progressivement jusqu\'à ce que les jambes soient droites et les bras à l’horizontale (servomoteurs à mi-course soit 90º).';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'Sauver les ajustement dans la mémoire (EEPROM)';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'A n\'utiliser qu\'une fois Otto en position droite (servomoteurs à mi-course soit 90º), effacer ensuite ce BLOC pour une nouvelle programmation';
Blockly.Msg.OTTO9_MOVE_TEXT = "Déplacement";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto mouvements basiques";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ Avancer", "FORWARD"], ["↓ Reculer", "BACKWARD"], ["↺ Tourner à gauche", "LEFT"], ["↻ Tourner à droite", "RIGHT"], ["Pencher à gauche", "BENDLEFT"], ["Pencher à droite", "BENDRIGHT"], ["Secouer jambe gauche", "SHAKELEFT"], ["Secouer jambe droite", "SHAKERIGHT"], ["Sauter", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ Avancer", "FORWARD"], ["↓ Reculer", "BACKWARD"], ["↺ Tourner à gauche", "LEFT"], ["↻ Tourner à droite", "RIGHT"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "Vitesse";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["Normale", "1000"],["Lente", "2000"],["Très lente", "3000"] , ["Rapide", "750"], ["Très rapide", "500"], ["Hyper rapide", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["Normale", "45"],["Lente", "20"],["Très lente", "10"] , ["Rapide", "60"], ["Très rapide", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "Danse";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto danse !";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["Moonwalk ⟵", "moonwalkerLEFT"], ["Moonwalk ⟶", "moonwalkerRIGHT"],["Crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["Flapping ↑", "flappingFRONT"], ["Flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "Taille";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["Normale", "25"], ["Petite", "10"], ["Grande", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "Mouvements";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto mouvements complexes";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["Se balancer", "swing"], ["Pointe de pieds", "updown"], ["Pas croisés", "jitter"], ["Faire la 'Ola'", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "Gestes";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Expressions sonores combinés avec des mouvements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 Très heureux","OttoSuperHappy"],["🙂 Heureux","OttoHappy"], ["🙁 Triste", "OttoSad"], ["😴 Sommeil", "OttoSleeping"], ["😕 Confus", "OttoConfused"], ["😰 Inquiet","OttoFretful"], ["😍 Amoureux","OttoLove"], ["😡 En colère", "OttoAngry"], ["🤩 Magie","OttoMagic"], ["😐  Vague","OttoWave"], ["😎 Victorieux","OttoVictory"], ["😞 Erreur","OttoFail"], ["💩 Flatulence", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "Son";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Expressions sonores";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 Très heureux","S_superHappy"], ["🙂 Heureux","S_happy"], ["😊 Courtois","S_happy_short"], ["🙁 Triste","S_sad"], ["😕 Confus", "S_confused"], ["🤗 Câlin", "S_cuddly"], ["😮 Oh (1)", "S_OhOoh"], ["😯 Oh (2)","S_OhOoh2"], ["😲 Surpris", "S_surprise"],["🤖 Connecté","S_connection"], ["🤖 Déconnecté", "S_disconnection"], ["👇 Bouton préssé","S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤  Sommeil", "S_sleeping"], ["💩 Flatulence (1)","S_fart1"], ["💩 Flatulence (2) ","S_fart2"], ["💩 Flatulence (3)","S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "Distance [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Distance comprise entre 2 cm et 400 cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "Obstacle";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["Près", "10"],["Très près", "3"],["Loin", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "Bruit mesuré";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 pour silencieux, 500 pour du bruit normal et plus de 1 000 pour un bruit très fort. Pensez également  à ajuster la sensibilité du capteur.";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "Capteur tactile";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "Teste si le capteur est touché";
Blockly.Msg.OTTO9_GETG_TEXT = "Mouvements";
Blockly.Msg.OTTO9_MOUTH_TEXT = "Bouche";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "Expression bouche pour la matrice 8x8 LEDs";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 Heureux (bouche ouverte)","happyOpen"],["🙂 Heureux (bouche fermée)","happyClosed"], ["  Sourire","smile"], ["😦 Triste (bouche ouverte)", "23"], ["🙁 Triste (bouche fermée)", "24"], ["😮 Surprise (bouche fermée)", "smallSurprise"], ["😲 Surprise (bouche ouverte)","bigSurprise"], ["😕 Embarassé","confused"],["😛 Tire la langue", "tongueOut"],["🙃 Idiot","culito"], ["😑 Sérieux","lineMouth"], ["🙄 Contrarié", "21"], ["💖 Coeur","heart"], ["🦇 Vampire (bouche ouverte)","vamp1"], ["🦇 Vampire (bouche fermée)","vamp2"], ["❌ (non)", "xMouth"], ["✅ OK", "okMouth"],["❓ interrogation", "27"], ["⚡ éclair", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "Yeux";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "Expressions du regard pour la matrice 16x8 LEDs i2C";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 Heureux","happy_bmp"],["🙂 Yeux","eyes_bmp"], ["😦 Triste","sad_bmp"], ["😡 En colère", "angry_bmp"], ["😡 Très en colère","angry2_bmp"], ["😰 Inquiet","freetful_bmp"], ["😕 Contrarié ","confused_bmp"],["😴 Sommeil","sleep_bmp"],["😍 Amoureux ","love_bmp"], ["😑 Vagues","wave_bmp"], ["🤩 Magie","magic_bmp"], ["😞 Erreur","fail_bmp"], ["🤖 Logo OTTO","logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "Texte Yeux";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " Eteindre Yeux";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "Limité à 9 caractères (lettres majuscules de A à Z, chiffres de 0 à 9 et caractères spéciaux : ; < > = @";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "Texte bouche";
Blockly.Msg.OTTO9_CLEAR_TEXT = " Effacer bouche";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Eteint tous les LEDs de la matrice 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "Bras";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "Bouger les bras !";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["Mains en l’air", "HANDSUP"], ["Saluer avec bras gauche", "HANDWAVE1"], ["Saluer avec bras droit", "HANDWAVE2"]];
Blockly.Msg.OTTO9_ARMSANGLE_TEXT="Sélectionner l'angle du bras"
Blockly.Msg.OTTO9_ARMSANGLE_CHOICE = [["GAUCHE", "left"], ["DROIT", "right"], ["LES DEUX", "both"]];
Blockly.Msg.OTTO9_LEGSANGLE_TEXT="Sélectionner l'angle de la jambe"
Blockly.Msg.OTTO9_LEGSANGLE_CHOICE = [["GAUCHE", "left"], ["DROITE", "right"], ["LES DEUX", "both"]];
Blockly.Msg.OTTO9_FOOTANGLE_TEXT="Sélectionner l'angle du pied"
Blockly.Msg.OTTO9_FOOTANGLE_CHOICE = [["GAUCHE", "left"], ["DROIT", "right"], ["LES DEUX", "both"]];
Blockly.Msg.OTTO9_APP="Installer Application Bluetooth";
Blockly.Msg.OTTO9_HUMANOID_TOOLTIP="Vous pouvez contrôler Otto Humanoïde avec une application à votre disposition sur Google Play Store";
Blockly.Msg.OTTO9_ORIENTATION="Orientation: ";
////////////MASAYLO Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.MASAYLO_START_TEXT = "Start";
Blockly.Msg.MASAYLO_START_TOOLTIP = "Declare a new robot type Masaylo";
Blockly.Msg.MASAYLO_URL = "https://github.com/agomezgar/masaylo";// do not translate
Blockly.Msg.MASAYLO_STARTPERS_TEXT="Start in pins:"
Blockly.Msg.MIA="Left A: ";
Blockly.Msg.MIB="Left B: ";
Blockly.Msg.MDA="Right A: ";
Blockly.Msg.MDB="Right B: ";
Blockly.Msg.MASAYLO_STARTPERS_TOOLTIP="Indicate pins if you didn't use default connections";
Blockly.Msg.MASAYLO_STARTPERS_URL="https://github.com/agomezgar/masaylo/blob/master/pinout/pinoutMasaylo.png";
Blockly.Msg.MASAYLO_MOVER_TEXT="Move: ";
Blockly.Msg.MASAYLO_MOVE_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"], ["stop", "STOP"]];
Blockly.Msg.MASAYLO_VELOCITY_CHOICE = [["Top", "TOP"], ["Quick", "QUICK"], ["Medium", "MEDIUM"], ["Slow", "SLOW"], ["Almost stopped", "SLOWER"]];

Blockly.Msg.MASAYLO_MOVER_TOOLTIP="Make a good choice!";
Blockly.Msg.MASAYLO_BTINIT_TEXT="Init the BT Controller";
Blockly.Msg.MASAYLO_Tx_TEXT="Tx: ";
Blockly.Msg.MASAYLO_Rx_TEXT="Rx: ";
Blockly.Msg.MASAYLO_BT_TOOLTIP="Maybe you would want BT commnunication... ";
Blockly.Msg.MASAYLO_GETDISTANCE_TEXT="Distance: ";
Blockly.Msg.MASAYLO_GETDISTANCE_TOOLTIP="Use a US sensor to detect obstacles";
Blockly.Msg.MASAYLO_GETBLACKLEFT_TEXT="Black on left";
Blockly.Msg.MASAYLO_GETBLACKLEFT_TOOLTIP="Returns 'true' when black colour is detected on left side";
Blockly.Msg.MASAYLO_GETBLACKRIGHT_TEXT="Black on right";
Blockly.Msg.MASAYLO_GETBLACKRIGHT_TOOLTIP="Returns 'true' when black colour is detected on right side";
Blockly.Msg.MASAYLO_GETBLANKLEFT_TEXT="White on left";
Blockly.Msg.MASAYLO_GETBLANCKLEFT_TOOLTIP="Returns 'true' when white colour is detected on left side";
Blockly.Msg.MASAYLO_GETBLANKRIGHT_TEXT="White on right";
Blockly.Msg.MASAYLO_GETBLANKRIGHT_TOOLTIP="Returns 'true' when white colour is detected on right side";
Blockly.Msg.MASAYLO_FORWARD_TEXT="Move forward";
Blockly.Msg.MASAYLO_FORWARD_TOOLTIP="Masaylo will move forward until new orders";
Blockly.Msg.MASAYLO_BACKWARD_TEXT="Move backward";
Blockly.Msg.MASAYLO_BACKWARD_TOOLTIP="Masaylo will move backward until new orders";
Blockly.Msg.MASAYLO_LEFT_TEXT="Turn left";
Blockly.Msg.MASAYLO_LEFT_TOOLTIP="Masaylo will turn left (anticlockwise if seen from above) until new orders";
Blockly.Msg.MASAYLO_RIGHT_TEXT="Turn right";
Blockly.Msg.MASAYLO_RIGHT_TOOLTIP="Masaylo will turn right (clockwise if seen from above) until new orders";
Blockly.Msg.MASAYLO_STOP_TEXT="Stop";
Blockly.Msg.MASAYLO_STOP_TOOLTIP="Seems clear enough to me...";
Blockly.Msg.MASAYLO_VELOCIDAD_TEXT="Move at speed: ";
////////////RUPERTOBOT Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.RUPERTOBOT_START_TEXT = "Commencer";
Blockly.Msg.RUPERTOBOT_START_TOOLTIP="Déclarer un nouveau robot de la classe rupertobot";
Blockly.Msg.RUPERTOBOT_URL="https://agomezgar.github.io/rupertobot";
Blockly.Msg.RUPERTOBOT_MODE_CHOICE= [["Faible", "(1)"], ["Fort", "(2)"]];
Blockly.Msg.RUPERTOBOT_SPIN_FORWARD="Avancer en nombre de tours: ";
Blockly.Msg.RUPERTOBOT_SPIN_BACKWARD="Reculer en nombre de tours: ";
Blockly.Msg.RUPERTOBOT_SPIN_NUMBER="Nº: ";
Blockly.Msg.RUPERTOBOT_SPIN_TOOLTIP="Indiquez le nombre de rotation et la vitesse en tr/min (un nombre négatif fera un mouvement de retour)";
Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY_TEXT="Vitesse: "
Blockly.Msg.RUPERTOBOT_SPIN_VELOCITY=[["Lent", "5"], ["Intermédiaire", "10"], ["Rapide", "15"]];
Blockly.Msg.RUPERTOBOT_DISTANCE_FORWARD="Avancer d'une distance: ";
Blockly.Msg.RUPERTOBOT_DISTANCE_BACKWARD="Reculer d'une distance: ";
Blockly.Msg.RUPERTOBOT_DISTANCE_TEXT="cm: ";
Blockly.Msg.RUPERTOBOT_DISTANCE_TOOLTIP="Indiquez la distance parcourue ";
Blockly.Msg.RUPERTOBOT_SPIN_LEFT_TOOLTIP="Tourner à gauche en indiquant le nombre de tours"
Blockly.Msg.RUPERTOBOT_SPIN_LEFT="Tourner à gauche par tours"
Blockly.Msg.RUPERTOBOT_SPIN_RIGHT_TOOLTIP="Tourner à droite en indiquant le nombre de tours"
Blockly.Msg.RUPERTOBOT_SPIN_RIGHT="Tourner à droite par tours"
Blockly.Msg.RUPERTOBOT_GRADES_LEFT_TOOLTIP="Tourner à gauche indiquant les degrés sexagésimaux"
Blockly.Msg.RUPERTOBOT_GRADES_LEFT="Tourner à gauche par degrés: "
Blockly.Msg.RUPERTOBOT_GRADES_RIGHT_TOOLTIP="Tourner à droite indiquant les degrés sexagésimaux"
Blockly.Msg.RUPERTOBOT_GRADES_RIGHT="Tourner à droite par degrés:  "
Blockly.Msg.RUPERTOBOT_IR_TOOLTIP="Pour utiliser Rupertobot comme suiveur de ligne";
////////////ESCORNABOT Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.ESCORNABOT_MODE_TEXT="Init Escornabot";
Blockly.Msg.ESCORNABOT_MODE_CHOICE= [["Weak", ""], ["Strong", "(2)"], ["Medium", "(3)"]];;
Blockly.Msg.ESCORNABOT_INIT_TOOLTIP="Mode choice: 1-> weaker but less electrical consumption, 2->Stronger, but needs more supply, 3->Intermediate mode ";
Blockly.Msg.ESCORNABOT_URL="https://escornabot.com/es/index";
Blockly.Msg.ESCORNABOT_SPIN="Spin: ";
Blockly.Msg.ESCORNABOT_SPIN_NUMBER="Nº: ";
Blockly.Msg.ESCORNABOT_SPIN_TOOLTIP="Indicate spin number(admits negative value if reverse is wanted) and velocity"
Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT="Velocity: "
Blockly.Msg.ESCORNABOT_SPIN_VELOCITY=[["Slow", "5"], ["Medium", "10"], ["Quick", "15"]];;
Blockly.Msg.ESCORNABOT_DISTANCE="Aller à distance:";
Blockly.Msg.ESCORNABOT_DISTANCE_TEXT="cm: ";
Blockly.Msg.ESCORNABOT_DISTANCE_TOOLTIP="Indiquez la distance parcourue (les valeurs négatives impliqueront un retour en arrière)";
Blockly.Msg.ESCORNABOT_TURNSPIN_TEXT="Turn by X spins: ";
Blockly.Msg.ESCORNABOT_TURNSPIN_TOOLTIP="Turn clockwise/anticlockwise (depending on wether you introduce positive or negative values of spin number you desire)";
Blockly.Msg.ESCORNABOT_TURNANGLE_TEXT="Angle spin: ";
Blockly.Msg.ESCORNABOT_ANGLE_NUMBER="Angle: "
Blockly.Msg.ESCORNABOT_TURNANGLE_TOOLTIP="Spin by angle (sign value means clockwise/anticlockwise)";
Blockly.Msg.ESCORNABOT_STOP_TEXT="Stop";
Blockly.Msg.ESCORNABOT_STOP_TOOLTIP="What did you think?  ";
Blockly.Msg.ESCORNABOT_BEEP_TEXT="Beep";
Blockly.Msg.ESCORNABOT_TIME_TEXT="ms";
Blockly.Msg.ESCORNABOT_BEEP_TOOLTIP="Beeps as long as the time you specify";
Blockly.Msg.ESCORNABOT_LEDON_TEXT="LED ON: ";
Blockly.Msg.ESCORNABOT_LEDOFF_TEXT="LED OFF: ";
Blockly.Msg.ESCORNABOT_LED_CHOICE=[["Forward", "1"], ["Backward", "3"], ["Left", "2"],["Right", "4"]];;
Blockly.Msg.ESCORNABOT_LEDON_TOOLTIP="Lights on the selected LED diode";
Blockly.Msg.ESCORNABOT_LEDOFF_TOOLTIP="Lights off the selected LED diode";
Blockly.Msg.ESCORNABOT_GETBUTTON_TEXT="Button pushed: ";
Blockly.Msg.ESCORNABOT_GETBUTTON_TOOLTIP="Check if the selected button is being pushed.";
Blockly.Msg.ESCORNABOT_BUTTON_SELECTED=[["Forward", "1"], ["Backward", "3"], ["Left", "2"],["Right", "4"],["Center", "5"]];;



Blockly.Msg.ESCORNABOT_APP_TOOLTIP="Autonomous working";
Blockly.Msg.ESCORNABOT_APP_URL="www.escornabot.com";
Blockly.Msg.ESCORNABOT_USINIT_TEXT="Ultrasound inits";
Blockly.Msg.ESCORNABOT_TRIGGER_TEXT="Trigger pin";
Blockly.Msg.ESCORNABOT_ECHO_TEXT="Echo pin";
Blockly.Msg.ESCORNABOT_GETUS_TEXT="Distance";
Blockly.Msg.ESCORNABOT_GETUS_TOOLTIP="Distance";
Blockly.Msg.ESCORNABOT_IRINIT_TEXT="Inits ir";
Blockly.Msg.ESCORNABOT_IR_TOOLTIP="Initialize infrared sensors";
Blockly.Msg.ESCORNABOT_GETBLACKLEFT_TEXT="Black left detected";
Blockly.Msg.ESCORNABOT_GETBLACKLEFT_TOOLTIP=" TRUE if black detected at left side";
Blockly.Msg.ESCORNABOT_GETBLACKRIGHT_TEXT="Black right detected";
Blockly.Msg.ESCORNABOT_GETBLACKRIGHT_TOOLTIP="TRUE if black detected at right side";
Blockly.Msg.ESCORNABOT_GETWHITELEFT_TEXT="White left detected";
Blockly.Msg.ESCORNABOT_GETWHITELEFT_TOOLTIP="TRUE if white detected at left side";
Blockly.Msg.ESCORNABOT_GETWHITERIGHT_TEXT="White right detected";
Blockly.Msg.ESCORNABOT_GETWHITERIGHT_TOOLTIP="TRUE if white detected at right side";
Blockly.Msg.ESCORNABOT_IRLEFT_TEXT="Gauche";
Blockly.Msg.ESCORNABOT_IRRIGHT_TEXT="Droite";
Blockly.Msg.STEPPERCHOICE=[["pas à pas 1", "s1"], ["pas à pas 2", "s2"]];
//Les suivants definitions sont à moi (Pardonnez moi, mon franÇais c'est très oxidé)
Blockly.Msg.matrice8x8_symbole = "définir symbole";
Blockly.Msg.matrice8x8_symbole_tooltip = "Définition d'un symbole pour la matrice LED.\n 0 éteint la LED.\n 1 allume la LED";
Blockly.Msg.matrice8x8_aff="dessiner le symbole";
Blockly.Msg.matrice8x8_aff_tooltip = "Dessine le symbole précédemment défini";
Blockly.Msg.matrice8x8_efface="effacer";
Blockly.Msg.matriceIntensity="Luminosité Matrice LED";
Blockly.Msg.rvb_red="rouge";
Blockly.Msg.rvb_green="vert";
Blockly.Msg.rvb_blue="bleu";