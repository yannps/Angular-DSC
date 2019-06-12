import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  names: string[];

  constructor() {
   this.names = ['Mary', 'Jose', 'Bill' , 'Anna']
   }

  ngOnInit() {
  }

}
