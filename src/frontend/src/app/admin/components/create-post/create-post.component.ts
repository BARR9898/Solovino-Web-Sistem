import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  form!: FormGroup;
  sex_type: Array<string> = ['Selecciona el sexo', 'Hembra', 'Macho'];
  file!: File;
  photoSelected: string | ArrayBuffer | any;
  fileName!: string
  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.BuildForm();
  }

  ngOnInit(): void {}

  BuildForm() {
    this.form = this.formBuilder.group({
      name_pet: this.formBuilder.control('', Validators.required),
      age_pet: this.formBuilder.control('', Validators.required),
      race_pet: this.formBuilder.control('', Validators.required),
      sex_pet: this.formBuilder.control('', Validators.required),
      place_disapparence: this.formBuilder.control('', Validators.required),
      description_pet: this.formBuilder.control('', Validators.required),
      date_disapparence: this.formBuilder.control('', Validators.required),
      profile_image: this.formBuilder.control('', Validators.required),
    });
  }

  SavePost(
    name_pet: HTMLInputElement,
    age_pet: HTMLInputElement,
    race_pet: HTMLInputElement,
    sex_pet: HTMLSelectElement,
    description_pet: HTMLTextAreaElement,
    place_disapparence: HTMLInputElement,
    date_disapparence: HTMLDataElement
  ) {
    const newPost = this.form.value;
    this.postService
      .createPost(
        name_pet.value,
        age_pet.value,
        race_pet.value,
        sex_pet.value,
        description_pet.value,
        place_disapparence.value,
        date_disapparence.value,
        this.file
      )
      .subscribe((res) => {

        this.router.navigate(['admin/list-posts']);
      });
  }

  //Renderice the image
  onPhotoSelected(event: HtmlInputEvent | any) {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.file);
      console.log('Here is an image preview');
    }
    console.log(this.file);
  }
}
