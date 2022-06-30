import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public description : string;
  public name : string;
  public welcome : string;
  public site: string

  constructor() {
    this.description = 'Soy artista visual, programador Web Full Stack, creador de contenido y estudiante de contabilidad, egresado del Instituto Politécnico del Noroeste (INPONOR) del técnico de informática. En este portafolio podrás ver todos mis proyectos y mis conocimentos en el área de informática principalmente en la programación tanto en el apartado web, de escritorio y de aplicaciones de terminal de línea de comandos.';
    this.name = "José Nathaniel Bonilla"
    this.welcome = "Bienvenidos"
    this.site = "La herramientas son importantes, pero el conociemto hace la diferencia."
  }

  ngOnInit(): void {
  }

}
