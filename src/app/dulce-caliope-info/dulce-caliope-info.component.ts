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
      date: "13-08-2020",
      subtitle: "Me preguntan si Cali ME deja dormir",
      content: "Cali duerme, como duerme cualquier bebé de 3 meses, a veces más, a veces menos, hay noches que se tetea dormida y otras que a las 5 de la mañana quiere jugar. Lxs bebés duermen bien, duermen como bebés, el sueño es madurativo, no podemos pedirle a un bebé que duerma 8hs de corrido como lo hace un adulto (aunque existen bebés que lo hacen, si es tu caso te recomiendo que no lo cuentes, generas envidia a las mamázombies como yo). Lo que a nosotrxs nos funcionó fue generar una rutina de sueño, a la noche es baño, teta y a la cama y durante el día intento leer sus señales, reconocer los indicios que me da, bostezos, fregarse los ojos, o estar un poquito más irritable... Algo difícil de entender es que cuánto mejor duermen durante el día, mejor duermen a la noche, por eso no sirve cansarlxs de más.",
      conclusion: "Y a vos que te funciona? Sos mamá zombie o una afortunada?"
    },
    {
      title: "Anidar",
      image: "assets/img/anidar.jpg",
      date: "25-08-2020",
      subtitle: "¿Existe momento más mágico que el embarazo?",
      content: "Recuerdo la sensación de los movimientos de Cali en la panza y emano nostalgia! Crecen tan rápido. Se dice que mientras que estamos esperando a nuestros polluelos nuestro cerebro 'anida', queremos mejorar el hogar, preparar su espacio, tener todo listo para la llegada de este nuevo se. Recuerdo que en la semana 30 de embarazo estaba enloquecida por tener armada la cuna (cuna que hasta el momento habrá usado dos veces y solo para jugar). Algo muy importante que hay que tener listo siempre por cualquier eventualidad es el bolso! Yo lo prepare en la semana 27, porque ansiosa siempre, lo arme y desarme mil veces! 👜🎒",
      conclusion: "¿Que llevar en el bolso? \n Para el/la bebé: 👶 \n -3/4 mudas de ropa compuestas por: body, ranita/pantalón, batita o camperita, medias y gorro. Se recomienda que la ropita sea de algodón y preferentemente de colores claros (las prendas muy coloridas son hermosas, pero para teñirlas se utilizan muchos productos químicos que pueden dañar la piel de tu bebé, yo elegí para el primer día un ajuar completamente blanco!) Lavadas! (En el próximo post de info vamos a hablar sobre el lavado de la ropita \n -Manta recibidor \n -Manta de abrigo \n -20 pañales apro \n -Óleo y algodón \n NO sé recomiendan guantes o mitones! 🧤 Los bebés perciben a través de las manos y la boca, colocando estos elementos obstaculizamos su desarrollo y sus mecanismos de autorregulación. Si tenés miedo de que tu bebé tenga las uñitas largas y pueda lastimarse guarda en el bolso una lima fina o tijerita \n Los gorritos son muy importantes durante el primer mes de vida, lxs bebés no regulan correctamente su temperatura corporal, y como su cabecita es tan grande es por dónde más pierden calor. \n Si querés amamantar no se recomienda llevar sucedáneos (mamadera/chupete)🍼 generan confusión de succión, dificultando la lactancia. \n \n Para mamá: \n -Camisón cómodo que favorezca la lactancia si así lo desean, lo mismo los corpiños. \n -Varios cambios de bombacha (al menos 4) \n -Apósitos post parto (mínimo 10) \n -Toallón y elementos de higien \n -Colita para el pelo"
    },
    {
      title: "Crianza respetuosa",
      image: "assets/img/crianza_respetuosa.jpg",
      date: "03-09-2020",
      subtitle: "Ojalá algún día ya no sea necesario el adjetivo.",
      content: "¿Qué es y qué no es?. NO ES ✋La crianza respetuosa no se trata de amamantar, ni de hacer colecho, ni de tener a tu bebé todo el día a upa, ni de no poner límites. SI ES ser respetuosos con los tiempos de cada niñx, no adelantar ni forzar etapas, es tratar al niñx como sujeto de derecho (léase no vale el es mí hijo hago lo que quiero). Sus pilares fundamentales son el respeto, el amor y los límites no punitivos...",
      conclusion: "¿No es increíble que haya crianzas no respetuosas?"
    }
  ]

  constructor() { }

  selected: ItemInfo;

  setSelected(item: ItemInfo):void {
    this.selected = item;
    window.scroll(0,300);
  }

  ngOnInit(): void {
    this.selected=null;
  }

}
