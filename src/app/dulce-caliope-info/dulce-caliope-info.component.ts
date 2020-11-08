import { Component, OnInit } from '@angular/core';
import { ItemInfo } from './itemInfo';

@Component({
  selector: 'app-dulce-caliope-info',
  templateUrl: './dulce-caliope-info.component.html',
  styleUrls: ['./dulce-caliope-info.component.scss']
})

export class DulceCaliopeInfoComponent implements OnInit {

  items: ItemInfo[] =[
    {
      title: "El sueño",
      image: "assets/img/el_sueno.jpg",
      date: "20-10-2020"
    },
    {
      title: "Anidar",
      image: "assets/img/anidar.jpg",
      date: "20-10-2020"
    },
    {
      title: "Crianza respetuosa",
      image: "assets/img/crianza_respetuosa.jpg",
      date: "20-10-2020"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
