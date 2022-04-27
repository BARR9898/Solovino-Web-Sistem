import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}


@Component({
  selector: 'app-create-adoption',
  templateUrl: './create-adoption.component.html',
  styleUrls: ['./create-adoption.component.css']
})
export class CreateAdoptionComponent implements OnInit {

  adoptionsFromServer : any = []
  sex_options : Array<string> = ['Macho','Hembra']
  sterilization_options : Array<string> = ['Si','No']
  exsolovino_options : Array<string> = ['Si','No']

  constructor(
    private adoptionServices:AdopcionesService,
    private router: Router,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {


  }

  createAdoptionForm = this.formBuilder.group(
    {
      name_pet: this.formBuilder.control(''),
      age_pet: this.formBuilder.control(''),
      race_pet: this.formBuilder.control(''),
      sex_pet: this.formBuilder.control(''),
      sterulization_pet: this.formBuilder.control(''),
      description_pet: this.formBuilder.control(''),
      is_exsolovino: this.formBuilder.control('')
    }
  )

  saveAdoption(sex:HTMLSelectElement, exsolovino:HTMLSelectElement, sterilization:HTMLSelectElement){


    this.setControlSexToCorrectValue(sex)
    this.setControlIsExsolovinoToCorrectValue(exsolovino)
    this.setControlSterilziationToCorrectValue(sterilization)
    this.setControlAgePetToCorrectVale()
    const newAdoption = this.createAdoptionForm.value
    console.log(newAdoption);

     this.adoptionServices.createAdoption(newAdoption)


   .subscribe(res => {
      this.router.navigate(['/admin/list-adoptions'])
    })



  }

  setControlSexToCorrectValue(data:HTMLSelectElement){
    this.createAdoptionForm.controls['sex_pet'].setValue(data.value)
  }

  setControlIsExsolovinoToCorrectValue(data:HTMLSelectElement){
    console.log(data.value);

    if (data.value === 'Si') {
      this.createAdoptionForm.controls['is_exsolovino'].setValue(true)
    }else if (data.value === 'No'){
      this.createAdoptionForm.controls['is_exsolovino'].setValue(false)
    }

  }

  setControlSterilziationToCorrectValue(data:HTMLSelectElement){
    console.log(data.value);

    if (data.value === 'Si') {
      this.createAdoptionForm.controls['sterulization_pet'].setValue(true)
    }else if(data.value === 'No'){
      this.createAdoptionForm.controls['sterulization_pet'].setValue(false)
    }

  }

  setControlAgePetToCorrectVale(){
    let ageInNumber = this.createAdoptionForm.controls['age_pet'].value
    let ageToStirng = ageInNumber.toString()
    this.createAdoptionForm.controls['age_pet'].setValue(ageToStirng)

  }



}
