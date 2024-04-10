import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:any = {
  cover:'https://i.ytimg.com/vi/ewmJXi1gkbI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgSChAMA8=&rs=AOn4CLDvSGt3OfSk7kAUFp_yuQOE1uP_hg',
  album:'Solo 3',
  name:'Una mirada'
}

  constructor() { }

  ngOnInit(): void {
  }

}
