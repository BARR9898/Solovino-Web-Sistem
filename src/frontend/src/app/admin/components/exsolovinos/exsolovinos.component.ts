import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

@Component({
  selector: 'app-exsolovinos',
  templateUrl: './exsolovinos.component.html',
  styleUrls: ['./exsolovinos.component.css']
})
export class ExsolovinosComponent implements OnInit {

  adoptionsFromServer:any=[];
  exsolovinos:any=[]
  constructor(
    private adopcionesService:AdopcionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adopcionesService.getAllAdoptions()
    .subscribe(res => {
      this.adoptionsFromServer = res
      this.saveExsolovinos(this.adoptionsFromServer)
      console.log(this.adoptionsFromServer);

    })
  }

  saveExsolovinos(adoptions:Array<any>){
    for (let index = 0; index < adoptions.length; index++) {
      if ( (adoptions[index]['is_exsolovino'] == true ) && (adoptions[index]['sterulization_pet'] == true )  )   {
        this.exsolovinos[index] = adoptions[index]
      }
    }
    console.log(this.exsolovinos);


  }

}
