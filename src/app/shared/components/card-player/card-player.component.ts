import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})

//CardPlayerComponent = HIJO DE SECCION GENERICA
export class CardPlayerComponent implements OnInit {
  //pasar valores de padre a hijo
  @Input() mode : 'small' | 'big' = 'small';//PUEDE SER UNO U OTRO PERO SE INICIALIZA EN SMALL
  //INICIALIZARLO O PASAR !
  @Input() track: TrackModel={_id:0,name:'',album:'',url:'',cover:''};// AL USAR ! PERMITE QUE NO NECESARIAMENTE SE INICIALICE COMO DEBE O MAS BIEN COMO TRACKMODEL

  constructor() { }

  ngOnInit(): void {
  }

}
