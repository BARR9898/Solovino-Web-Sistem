import { Component, Input, OnInit } from '@angular/core';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Form, FormBuilder } from '@angular/forms';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-view-adoption',
  templateUrl: './view-adoption.component.html',
  styleUrls: ['./view-adoption.component.css']
})
export class ViewAdoptionComponent implements OnInit {

  file!:File;
  id:string='';
  dataFromServer : any = [];
  fileName:string=''
  photoSelected: string | ArrayBuffer | any;
  sex_options:Array<string> = ['Hembra','Macho']
  exsolovino:Array<string> = ['Si','No']
  sterilization_options:Array<string> = ['Si','No']

  constructor(
    private adopcionService:AdopcionesService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe( params => {
      this.id = params['id']
      this.adopcionService.getAdoption(this.id)
    .subscribe(res => {
      this.dataFromServer = res
      console.log(this.dataFromServer);

      })















    })


  }



  updatePetForm = this.formBuilder.group({
    name_pet:[''],
    age_pet:[''],
    race_pet:[''],
    sex_pet:[''],
    image:[''],
    description_pet:[''],
    sterulization_pet:[''],
    is_exsolovino:[''],
    title:[''],
  })

  onPhotoSelected(event: HtmlInputEvent | any) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        console.log(this.fileName);
        //Image preview
        const reader = new FileReader();
        reader.onload = e => this.photoSelected = reader.result;
        reader.readAsDataURL(file);
        console.log(file)
        this.file = file;

    }
  }

  updatePet(
    name_pet: HTMLInputElement, 
    age_pet:HTMLInputElement, 
    race_pet: HTMLInputElement,
    sex:HTMLSelectElement, 
    description_pet:HTMLTextAreaElement,
    exsolovino:HTMLSelectElement, 
    sterilization:HTMLSelectElement
     ){
    this.setControlSexToHerValueInString(sex)
    let exsolovinoSeted = this.setControlExsolovinoToBoolean(exsolovino)
    let sterulizationSeted = this.setControlSterilziationToCorrectValue(sterilization)
    console.log(
      name_pet.value,
      age_pet.value,
      race_pet.value,
      sex.value,
      description_pet.value,
      exsolovinoSeted,
      sterulizationSeted,
      this.file);
    
   this.adopcionService.updatePet(
    this.id, 
    name_pet.value,
    age_pet.value,
    race_pet.value,
    sex.value,
    sterulizationSeted,
    description_pet.value,
    exsolovinoSeted,
    this.file)
    .subscribe(res => {
      this.router.navigate(['/admin/list-adoptions'])
    })





  }

  setControlExsolovinoToBoolean(exsolovino:HTMLSelectElement):string{
    let valueOfExsoloivno = exsolovino.value
    if( valueOfExsoloivno == this.exsolovino[0] ){
      return "true";
    }else{
     return "false";
    }

  }

  setControlSexToHerValueInString(sex:HTMLSelectElement):void{
    this.updatePetForm.controls['sex_pet'].setValue(sex.value)
  }

  setControlSterilziationToCorrectValue(data:HTMLSelectElement):string{
    console.log(data.value);

    if (data.value === 'Si') {
      return "true";
    }else{
      return "false";
    }

  }

  setValue(event:HTMLSelectElement | any){
    console.log(event.target.value);
    this.updatePetForm.controls['sex_pet'].setValue(event.target.value)
    console.log(this.updatePetForm.value);


  }

  setSexFormUpdatedPetForm(event : HTMLSelectElement | any){
    this.updatePetForm.controls['is_exsolovino'].setValue(event.target.value)
  }

  setSterilizationFormUpdatedPetForm(event : HTMLSelectElement | any){
    this.updatePetForm.controls['sterulization_pet'].setValue(event.target.value)
  }


  resetForm(){
    this.updatePetForm.reset()
  }
}
