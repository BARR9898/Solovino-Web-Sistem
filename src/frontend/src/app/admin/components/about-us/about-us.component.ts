import { Component, OnInit } from '@angular/core';
import { SobreNosotrosService } from 'src/app/core/services/sobre-nosotros/sobre-nosotros.service';
import { Router } from '@angular/router';
import { FormGroup,FormArray,Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  infoFromServer:any = []

  constructor(
    private sobreNosotrosService:SobreNosotrosService,
    private router:Router,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.sobreNosotrosService.getAllInformation()
    .subscribe(res => {
      this.infoFromServer = res;
      console.log(this.infoFromServer);

    })
  }

  aboutUsForm = this.formBuilder.group({
    equipo:this.formBuilder.array([
      this.formBuilder.group({
        nombre:this.formBuilder.control(''),
        curriculim:this.formBuilder.control('')
      })
    ]),
    mision:this.formBuilder.control(''),
    vison:this.formBuilder.control(''),

  })

}
