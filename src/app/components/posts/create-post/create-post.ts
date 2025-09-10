import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css'
})
export class CreatePost {

  post = {
    id: '1',
    content: 'This is a sample post content.',
    author: 'John Doe',
    model: '',
  }

  constructor() { }

  createPost() {
   alert('Post created')
  }

}
