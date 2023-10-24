import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page', //lo que utilizamos para llamar el html
  templateUrl: './home-page.component.html', //dirección del html
  styleUrls: ['./home-page.component.css'] //estilos que solo afectan al componente
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
