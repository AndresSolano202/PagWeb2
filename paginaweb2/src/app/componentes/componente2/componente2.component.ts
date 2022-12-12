import { parseHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  constructor(){}
  nombre: any;
  correo: any;
  contra: any;
  numero: any;
  confirmar:any;
 
  ngOnInit():void{
    this.recuperar()
  }

  recuperar()
  {
    this.nombre = localStorage.getItem('nombre');
    this.correo = localStorage.getItem('correo');
    this.contra = localStorage.getItem('contra');
    this.confirmar = localStorage.getItem('confirmar');
    this.numero = localStorage.getItem('numero');
  }

}
