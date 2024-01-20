import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Counter-Strike 2',
      subject: 'Более двух десятилетий Counter-Strike служит примером первоклассной соревновательной игры, путь развития которой определяют миллионы игроков со всего мира. Теперь пришло время нового этапа — Counter-Strike 2. ',
      date: '',
      id: 0,
      read: false
    },
    {
      fromName: 'Dota 2',
      subject: 'Ежедневно миллионы игроков по всему миру сражаются от лица одного из более сотни героев Dota 2, и даже после тысячи часов в ней есть чему научиться. Благодаря регулярным обновлениям игра живёт своей жизнью: геймплей, возможности и герои постоянно преображаются.',
      date: '',
      id: 1,
      read: false
    },
    {
      fromName: 'Lethal Company',
      subject: 'A co-op horror about scavenging at abandoned moons to sell scrap to the Company. ',
      date: '',
      id: 2,
      read: false
    },
    {
      fromName: 'PUBG: BATTLEGROUNDS',
      subject: ' Играйте В PUBG: BATTLEGROUNDS бесплатно. Высаживайтесь в стратегически важных местах, добывайте оружие и припасы и постарайтесь выжить и остаться последней командой на одном из многочисленных полей боя. ',
      date: '',
      id: 3,
      read: false
    },
    {
      fromName: 'Baldur s Gate 3',
      subject: 'Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти. ',
      date: '',
      id: 4,
      read: false
    },
    {
      fromName: 'Euro Truck Simulator 2',
      subject: 'Станьте королем европейских дорог — водителем грузовика, который доставляет важные грузы на немалые расстояния! Вас ждут десятки городов Великобритании, Бельгии, Германии, Италии, Нидерландов, Польши и не только. Испытайте свои умения, выносливость и скорость. ',
      date: '',
      id: 5,
      read: false
    },
    {
      fromName: 'Cult of the Lamb',
      subject: 'Взращивайте собственный культ в землях лжепророков, совершайте походы по таинственным уголкам леса, объединяйте вокруг себя верных последователей и несите своё слово в массы, чтобы сделать свой культ единственным.',
      date: '',
      id: 6,
      read: false
    },
    {
      fromName: 'Hunt: Showdown',
      subject: 'Hunt: Showdown — это захватывающий PvPvE-шутер от первого лица, в котором побеждают те, кто готов рисковать. Откройте охоту на чудовищ американских болот и получите заслуженную награду — славу, снаряжение и золото. Вас ждет незабываемый опыт сетевой игры в мире',
      date: '',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
