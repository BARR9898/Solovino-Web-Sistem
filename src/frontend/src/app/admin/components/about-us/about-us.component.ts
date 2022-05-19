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

    //Renderice the image
    onPhotoSelected(event: HtmlInputEvent | any) {


      if(event.target.files && event.target.files[0]){
        this.file = <File>event.target.files[0];
        //Image preview
        const reader = new FileReader();
        reader.onload = e => this.photoSelected = reader.result;
        reader.readAsDataURL(this.file);
        console.log('Here is an image preview');
        console.log(this.file)
        console.log(this.photoSelected)



      }

    }


  savePersonTeam(nombre:HTMLInputElement,curriculum:HTMLTextAreaElement,mision:HTMLTextAreaElement,vision:HTMLTextAreaElement){
    const newInfo = this.aboutUsForm.value
    console.log(newInfo)
    this.sobreNosotrosService.updateInfo(this.id,newInfo)
    .subscribe(res => {
      console.log(res);

    })

  }

  aboutUsForm = this.formBuilder.group({
    equipo: this.formBuilder.array([
      this.formBuilder.group({
        'nombre': this.formBuilder.control(''),
        'curriculum': this.formBuilder.control(''),
        'image': this.formBuilder.control('')
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
