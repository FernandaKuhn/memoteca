import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';
import { CreatePost } from "./components/posts/create-post/create-post";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, CreatePost],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('memoteca');
}
