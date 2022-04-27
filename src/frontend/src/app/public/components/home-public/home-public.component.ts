import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts/posts.service';
@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.css']
})
export class HomePublicComponent implements OnInit {

  posts : any;

  constructor(
    private postService : PostsService
  ) { }

  ngOnInit(): void {
    this.postService.getAllPosts().
    subscribe( res  => {
      console.log(res)
      this.posts = res
    })

  
    

  }

}
