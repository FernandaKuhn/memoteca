import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})
export class Post {

  @Input() post!: {
    content: string;
    author: string;
    model: string;
  };



}
