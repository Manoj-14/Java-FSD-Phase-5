import { Component, Input } from '@angular/core';
import { PostData } from '../view-posts.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(private httpClient: HttpClient) {}

  @Input()
  post: PostData;

  onDeletePost() {
    this.httpClient
      .delete(
        `https://blogproject-48cc7-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${this.post.id}.json`
      )
      .subscribe((res) => {
        console.log('Post deleted');
      });
  }
}
