import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule],
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

  cancelPost() {
   alert('cancelar post')
  }
}
