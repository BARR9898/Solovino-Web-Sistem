import { Component, OnInit } from '@angular/core';
import { SobreNosotrosService } from 'src/app/core/services/sobre-nosotros/sobre-nosotros.service';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  panelOpenState = false;
  infoFromServer:any = [];
  mision!:string;
  vision!:string;
  equipo:any=[];

  constructor(
    private sobreNosotrosService : SobreNosotrosService
  ) { }

  ngOnInit(): void {
    this.sobreNosotrosService.getAllInformation()
    .subscribe(infoGeted => {
      this.infoFromServer = infoGeted
      console.log(this.infoFromServer);
      this.mision = this.infoFromServer[0]['mision']
      this.vision = this.infoFromServer[0]['vision']
      this.equipo = this.infoFromServer[0]['equipo']
      console.log(this.mision);
      console.log(this.vision);
      console.log(this.equipo);



    })
  }

}
