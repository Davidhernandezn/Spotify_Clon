import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
@Input() title:string = '';//PARA ENVIAR TITULOS DIFERENTES AL MISMO COMPONENT
@Input() mode: 'small' | 'big' = 'big'; //SOLO SERA small O big YA ESTA INICIALIZADO EN big
@Input() dataTracks: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
