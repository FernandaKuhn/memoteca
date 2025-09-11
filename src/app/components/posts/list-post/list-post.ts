import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Post } from '../post/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule, RouterLink, Post, FormsModule],
  templateUrl: './list-post.html',
  styleUrls: ['./list-post.css']
})
export class ListPost {

  listPosts = [
    { id: '1', content: 'Primeiro post', author: 'Fernanda', model: 'X' },
    { id: '2', content: 'Segundo post', author: 'João', model: 'Y' }
  ];

}
