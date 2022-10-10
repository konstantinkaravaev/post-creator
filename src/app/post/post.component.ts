import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() myPost: Post;
  @Output() onRemove = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  remove() {
    this.onRemove.emit(this.myPost.id);
  }
}
