import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PlayersService {

private players: any[] = [
    {
      name: "Gabriel",
      description: "Half Spanish half Maltese one quarter Italian... (math is not my thing) Gabriel is the perfect combination to be the best Mezzo Giro player of the world ... sadly... is not.",
      img: "assets/img/gabriel.png",
      aka: "El frutero",
      nationality:"Spanish"
    },
    {
        name: "Feliciano",
        description: "Feliciano is an expert Mezzo Giro player, he always has an ace up his sleeve ... unfortunately he always plays wearing short sleeves ...",
        img: "assets/img/felix.png",
        aka: "Felix",
        nationality:"Italian"
      },
      {
        name: "Alessandro",
        description: "The boss is basically the boss ... there is no game he does not have under his control ... he dominates the championship with iron fist at least until his employees rise up against him ...",
        img: "assets/img/boss.png",
        aka: "The Boss",
        nationality:"Italian"
      },
      {
        name: "Andrea",
        description: "Andrea is always a difficult adversary, his smile, gaze and voice would make all the women in the tournament fall in love and would give him an advantage ... sadly the Mezzo Giro has no women on board, he has no chance of winning ...",
        img: "assets/img/andrea.png",
        aka: "Superman",
        nationality:"Italian"
      },
      {
        name: "Donald Trump",
        description: "Trump's first appearance in the tournament, He doesn't know how to play, but he wants to show that the USA are the best in everything ... No Koreans or Mexicans allowed...",
        img: "assets/img/trump.png",
        aka: "The Wall",
        nationality:"American"
      },
      {
        name: "Mario Ballotelli",
        description: "Overcome his problems with alcohol and drugs super Mario wants to show that he can beat anyone ... he doesn't know that the game is about to drink and drink and drink... poor Mario",
        img: "assets/img/mario.png",
        aka: "Super Mario",
        nationality:"Italian"
      },
      {
        name: "Robert Abela",
        description: "Robert's quality as Mezzo Giro player is only comparable to his fame as a politician ... does anyone know Robert? So?",
        img: "assets/img/malta.png",
        aka: "Malta's Prime Minister",
        nationality:"Maltese"
      },
      {
        name: "Alexandre Puga",
        description: "Unbeaten! Possibly the best player in history. The force is with him more than with Luke Skywalker ... He only has one rival: himself getting drunk too fast",
        img: "assets/img/puga.png",
        aka: "Tranki Tranki",
        nationality:"Spanish"
      },
  ];

    constructor() {
     }
    
     getPlayers() {
         return this.players;
     }
}