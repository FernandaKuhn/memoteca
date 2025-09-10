import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';
import { CreatePost } from "./components/posts/create-post/create-post";
import { ListPost } from './components/posts/list-post/list-post';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, CreatePost, ListPost, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('memoteca');
}
