import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { race } from 'rxjs';
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
  fileName: string = '';
  photoSelected: string | ArrayBuffer | any;
  file!:File;
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

    //Renderice the image
    onPhotoSelected(event: HtmlInputEvent | any) {


      if(event.target.files && event.target.files[0]){
        this.file = <File>event.target.files[0];
        //Image preview
        const reader = new FileReader();
        reader.onload = e => this.photoSelected = reader.result;
        reader.readAsDataURL(this.file);
        console.log('Here is an image preview');


      }
      console.log(this.file)
    }

  createAdoptionForm = this.formBuilder.group(
    {
      name_pet: this.formBuilder.control(''),
      age_pet: this.formBuilder.control(''),
      race_pet: this.formBuilder.control(''),
      sex_pet: this.formBuilder.control(''),
      title: this.formBuilder.control(''),
      profile_image: this.formBuilder.control(''),
      sterulization_pet: this.formBuilder.control(''),
      description_pet: this.formBuilder.control(''),
      is_exsolovino: this.formBuilder.control('')
    }
  )

  saveAdoption(name_pet: HTMLInputElement, age_pet:HTMLInputElement, race_pet: HTMLInputElement,
    sex:HTMLSelectElement, sterilization:HTMLSelectElement, description_pet: HTMLTextAreaElement,
    exsolovino:HTMLSelectElement,
    title:HTMLInputElement){



    let setExsolovino = this.setControlIsExsolovinoToCorrectValue(exsolovino)
    let setSterilization = this.setControlSterilziationToCorrectValue(sterilization)
    const newAdoption = this.createAdoptionForm.value
    console.log(newAdoption);

     this.adoptionServices.createAdoption(name_pet.value,age_pet.value,race_pet.value,sex.value,setSterilization,description_pet.value,
    setExsolovino,title.value,this.file)


   .subscribe(res => {
      this.router.navigate(['/admin/list-adoptions'])
    })



  }




  setControlIsExsolovinoToCorrectValue(data:HTMLSelectElement):string{
    if (data.value === 'Si') {
      return "true";
    }else if (data.value === 'No'){
      return "false";
    }
    return "false"

  }

  setControlSterilziationToCorrectValue(data:HTMLSelectElement):string{
    if (data.value === 'Si') {
      return "true";
    }else if(data.value === 'No'){
      return "false";
    }
    return "false"
  }






}
