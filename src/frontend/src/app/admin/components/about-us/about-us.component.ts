import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { SobreNosotrosService } from 'src/app/core/services/sobre-nosotros/sobre-nosotros.service';
import { Router } from '@angular/router';
import { FormGroup,FormArray,Form, FormBuilder } from '@angular/forms';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  fileName: string = '';
  photoSelected: string | ArrayBuffer |  any;
  file!:File;
  infoFromServer:Array<any> = []
  id:string = ""
  equipoLength = 0;
  aux = 0;


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
      console.log(this.infoFromServer);
      this.id = this.infoFromServer[0]['_id']
      this.equipoLength = this.infoFromServer[0]['equipo'].length
      console.log(this.equipoLength);

      



    })



  }

  ngAfterViewInit():void{
    this.detectorRef.detectChanges()
  }

 

  savePersonTeam(){
    const newInfo = this.aboutUsForm.value
    this.sobreNosotrosService.updateInfo(this.id,newInfo)
    .subscribe(res => {
      console.log(res);

    })

  }

  aboutUsForm = this.formBuilder.group({
    equipo: this.formBuilder.array([
      this.formBuilder.group({
        'nombre': this.formBuilder.control(''),
        'curriculum': this.formBuilder.control('')
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
      'image': this.formBuilder.control(''),
    })

    personsTeamArray.push(newPersonTeam)


  }

  deletePersonTeam(i: number) {
    this.equipo.removeAt(i)
  }
}
