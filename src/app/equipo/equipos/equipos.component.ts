import { Component, OnInit } from '@angular/core';
import { Equipo } from '../interfaces/equipo';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  constructor() { }

  equipo: Equipo;

  equipos: Equipo[] = [
    {
      idequipo: 1,
      ubicacionBlade: '1-1-1',
      serieBlade: 'LDT004257',
      ipBlade: '10.222.22.10',
      macBlade: '0005.8250.8afc',
      ipSwBlade: 'string',
      puertoBlade: 'string'
    },
    {
      idequipo: 2,
      ubicacionBlade: '1-1-2',
      serieBlade: 'LDT004257',
      ipBlade: '10.222.22.10',
      macBlade: '0005.8250.8afc',
      ipSwBlade: 'string',
      puertoBlade: 'string'
    },

  ];

  ngOnInit(): void {
  }

}
