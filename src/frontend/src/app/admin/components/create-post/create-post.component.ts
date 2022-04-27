import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';






@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  form!:FormGroup;
  sex_type:Array<string> = ['Selecciona el sexo','Hembra','Macho'];


  constructor(
    private postService:PostsService,
    private formBuilder:FormBuilder,
    private router:Router

  ) {
    this.BuildForm()
  }

  ngOnInit(): void {
  }







  BuildForm(){
    this.form = this.formBuilder.group(
      {
        name_pet:this.formBuilder.control('',Validators.required),
        age_pet:this.formBuilder.control('',Validators.required),
        race_pet:this.formBuilder.control('',Validators.required),
        sex_pet:this.formBuilder.control('',Validators.required),
        place_disapparence:this.formBuilder.control('',Validators.required),
        description_pet:this.formBuilder.control('',Validators.required),
        date_disapparence:this.formBuilder.control('',Validators.required)
      }
    )
  }

  SavePost(){
    const newPost = this.form.value
    console.log(newPost);
    this.postService.createPost(newPost)
    .subscribe(res => {
      this.router.navigate(['admin/list-posts'])
    })


  }

}
