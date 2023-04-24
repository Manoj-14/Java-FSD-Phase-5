import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostData } from '../view-posts/view-posts.interface';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  constructor(private httpClient: HttpClient) {}

  added: boolean = false;

  onCreatePost(postsData: PostData, form: NgForm) {
    console.log(postsData);
    this.httpClient
      .post(
        'https://blogproject-48cc7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postsData
      )
      .subscribe((responsedata) => {
        if (responsedata.hasOwnProperty('name')) {
          this.added = true;
          form.reset();
        }
      });
  }
}
