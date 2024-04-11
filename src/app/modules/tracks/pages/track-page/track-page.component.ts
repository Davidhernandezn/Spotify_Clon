import { TrackModel } from './../../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';//DATOS //IMPORTAR ARCHIVO JSON
@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
mockTracksList:Array<TrackModel> = []; //Array de tipo TrackModel
  constructor() { }

  ngOnInit(): void {
    //FORMA UNO
    //const data:any =(dataRaw as any).default//ACCEDER A PROPIEDADES DE UN DATA

    //FORMA 2, DESTRUCTURACIÓN
    const {data} : any =(dataRaw as any).default//ACCEDER A PROPIEDADES DE UN DATA

    //PRIMER CICLO DE VIDA
    //console.log('DAT',data);
    this.mockTracksList = data;//PASAMOS LOS VALORES DEL JSON
  }

}
