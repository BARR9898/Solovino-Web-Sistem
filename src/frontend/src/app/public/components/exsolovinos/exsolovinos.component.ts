import { Component, OnInit } from '@angular/core';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

@Component({
  selector: 'app-exsolovinos',
  templateUrl: './exsolovinos.component.html',
  styleUrls: ['./exsolovinos.component.css']
})
export class ExsolovinosComponent implements OnInit {

  adopcionesGeted:any;
  exsolovinos:any = [];
  cuantitiOfExsolovinos:number = 0;
  constructor(
    private adopcionService : AdopcionesService
  ) { }

  ngOnInit(): void {
    this.adopcionService.getAllAdoptions()
    .subscribe(respuesta => {

      let aux = 0;
      this.adopcionesGeted = respuesta
      this.cuantitiOfExsolovinos = this.adopcionesGeted.length
      for (let index = 0; index < this.adopcionesGeted.length; index++) {
        console.log(this.adopcionesGeted)
        if( (this.adopcionesGeted[index]['is_exsolovino'] === true) && (this.adopcionesGeted[index]['sterulization_pet'] )){

          this.exsolovinos[aux] = this.adopcionesGeted[index]
          aux++;

        }

      }
      this.cuantitiOfExsolovinos = this.exsolovinos.length

      console.log(this.cuantitiOfExsolovinos);


    })

  }




}
