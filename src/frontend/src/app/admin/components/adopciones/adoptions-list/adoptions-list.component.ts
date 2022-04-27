import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';
import { Adopcion } from 'src/app/core/models/adopcion';
@Component({
  selector: 'app-adoptions-list',
  templateUrl: './adoptions-list.component.html',
  styleUrls: ['./adoptions-list.component.css']
})
export class AdoptionsListComponent implements OnInit {



  adoptionsFromServer:any=[];

  constructor(
    private adopcionesService:AdopcionesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.adopcionesService.getAllAdoptions()
    .subscribe(res => {
      this.adoptionsFromServer = res
      console.log(this.adoptionsFromServer);

    })
  }

  deleteAdoption(id:string){
    if(confirm('Desea eliminar este elemento?')){
      this.adopcionesService.deleteAdoption(id)
      .subscribe(res => {
        location.reload()
      })
    }

  }

}
