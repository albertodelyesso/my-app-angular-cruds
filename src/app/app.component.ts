import { Component } from '@angular/core';
import { EmptyError, from } from 'rxjs';

import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';

  empleadosArray : Empleado[] = [
  {id:1, nombre: "Ruby", pais: "Argentina"},
  {id:2, nombre: "Perlita", pais: "Italia"},
  {id:3, nombre: "Michu", pais: "Rusia"},
  ];

  selectedEmpleado: Empleado = new Empleado();

  addOrEdit(){
    if(this.selectedEmpleado.id === 0){
      this.selectedEmpleado.id = this.empleadosArray.length + 1;
      this.empleadosArray.push(this.selectedEmpleado);
    }else{

    }

    this.selectedEmpleado = new Empleado();
  }
  
  openForEdit(empleado: Empleado){
    this.selectedEmpleado = empleado;
  }

  deleteEmpleado(empleado: Empleado){

    if(confirm("Está seguro que desea eliminarlo? " + empleado.nombre + " id: " + empleado.id)){
      const index = this.empleadosArray.findIndex(buscado => buscado.id === empleado.id); 
      this.empleadosArray.splice(index, 1);
    }
    this.selectedEmpleado = new Empleado();
  }

}
