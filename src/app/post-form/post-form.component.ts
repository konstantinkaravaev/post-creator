import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  titleInit = 'Title...';
  textInit = 'Text...';

  title = '';
  text = '';
  id = 0;

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Date.now(),
      };
      this.onAdd.emit(post);
    }
    this.title = this.text = '';
  }
}
