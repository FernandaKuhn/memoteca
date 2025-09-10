import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';
import { CreatePost } from "./components/posts/create-post/create-post";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CreatePost],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memoteca');
}
