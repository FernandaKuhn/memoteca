import { Routes } from '@angular/router';
import { CreatePost } from './components/posts/create-post/create-post';
import { ListPost } from './components/posts/list-post/list-post';

export const routes: Routes = [
  { path: 'create-post', component: CreatePost },
  { path: 'list-post', component: ListPost },
  { path: '', redirectTo: '/list-post', pathMatch: 'full' }
];
