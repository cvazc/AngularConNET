import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent {
  @Input({ required: true })
  peliculas!: any[];

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Inception',
      fechaLanzamiento: new Date('2010-07-16'),
      precio: 1300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    });
  }

  remover(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual : any) => peliculaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice, 1);
  }
}
