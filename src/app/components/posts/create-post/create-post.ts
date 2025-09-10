import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-post.html',
  styleUrls: ['./create-post.css']
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
