import { Injectable } from '@angular/core';
import { Post } from 'src/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  posts =[
    new Post(1,"message1","contenu1" ),
    new Post(2,"message2","contenu2" ),
    new Post(3,"message3","contenu3" ),
    new Post(4,"message4","contenu4" ),
  ];
  constructor() { }
}
