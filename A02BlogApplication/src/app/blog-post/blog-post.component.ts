import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostData } from '../view-posts/view-posts.interface';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  constructor(
    private httpClient: HttpClient,
    private blogPostService: BlogPostService
  ) {}

  added: boolean = false;

  onCreatePost(postsData: PostData, form: NgForm) {
    this.blogPostService.createPost(postsData).subscribe((respData) => {
      if (respData.hasOwnProperty('name')) {
        this.added = true;
        form.reset();
      }
    });
  }
}
