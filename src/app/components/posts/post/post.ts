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

  private imageMap: Record<string, string> = {
    'model-one': '/modelo1.png',
    'model-two': '/modelo2.png',
    'model-three': '/modelo3.png'
  };

  get imageSrc(): string {
    return this.imageMap[this.post.model] || '/modelo1.png';
  }

}
