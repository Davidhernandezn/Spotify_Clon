import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  //OBJETO UTILIZADO EN EL FRONT
  //mockCover va a ser tipo TrackModel  
  mockCover:TrackModel = {
    album: 'Hombres de Humo',
    name: 'Seseos',
    url: 'http://localhost/track.mp3',
    _id: '1',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6b/c2/49/6bc249b5-cb91-c98b-8024-7f59717dc7de/artwork.jpg/486x486bb.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
