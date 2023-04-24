import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  constructor(private httpClient: HttpClient) {}
  onCreatePost(postsData: { title: string; content: string }, form: NgForm) {
    console.log(postsData);
    this.httpClient
      .post(
        'https://blogproject-48cc7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postsData
      )
      .subscribe((responsedata) => {
        console.log(responsedata);
      });
  }
}
