import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { SobreNosotrosService } from 'src/app/core/services/sobre-nosotros/sobre-nosotros.service';
import { Router } from '@angular/router';
import { FormGroup,FormArray,Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  infoFromServer:Array<any> = []
  id:string = ""

  constructor(
    private sobreNosotrosService:SobreNosotrosService,
    private router:Router,
    private formBuilder:FormBuilder,
    private detectorRef:ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.sobreNosotrosService.getAllInformation()
    .subscribe((res:any) => {
      this.infoFromServer = res;
      this.id = res[0]['_id']
      console.log(this.id);
      console.log(this.infoFromServer);
      console.log(this.infoFromServer[0]['equipo']);
      console.log();


    })



  }

  ngAfterViewInit():void{
    this.detectorRef.detectChanges()
  }

  savePersonTeam(){
    const newInfo = this.aboutUsForm.value
    this.sobreNosotrosService.updateInfo(this.id,newInfo)
    .subscribe(res => {
      location.reload()
    })

  }

  aboutUsForm = this.formBuilder.group({
    equipo: this.formBuilder.array([
      this.formBuilder.group({
        'nombre': this.formBuilder.control(''),
        'curriculum': this.formBuilder.control(''),
      }),
    ]),
    mision:this.formBuilder.control(''),
    vision:this.formBuilder.control(''),

  })

  get equipo() {
    return this.aboutUsForm.get('equipo') as FormArray
  }

  addPersonTeam() {
    let personsTeamArray = this.aboutUsForm.get('equipo') as FormArray;
    let newPersonTeam = this.formBuilder.group({
      'nombre': this.formBuilder.control(''),
      'curriculum': this.formBuilder.control(''),
    })

    personsTeamArray.push(newPersonTeam)


  }

  deletePersonTeam(i: number) {
    this.equipo.removeAt(i)
  }
}
