import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number | string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'post-creator-repeat';

  id: number = this.getRandomId();

  posts: Post[] = [
    {
      title: 'putin khuilo',
      text: 'Putin khuilo,Putin khuilo,Putin khuilo,Putin khuilo,Putin khuilo',
      id: this.id,
    },
  ];

  getRandomId() {
    return Date.now();
  }

  updatePost(newPost: Post) {
    this.posts.unshift(newPost);
  }

  removePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
