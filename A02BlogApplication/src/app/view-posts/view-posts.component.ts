import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostData } from './view-posts.interface';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css'],
  providers: [BlogPostService],
})
export class ViewPostsComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private blogPostService: BlogPostService
  ) {}

  dbPosts: PostData[] = [];
  fetching: boolean = true;
  errorMessage = null;

  ngOnInit(): void {
    this.fetchposts();
  }

  fetchposts() {
    this.blogPostService.fetchposts().subscribe(
      (posts) => {
        this.dbPosts = posts;
        this.fetching = false;
      },
      (err) => {
        this.fetching = false;
        this.errorMessage = err.error.error;
      }
    );
  }
  onPostDelete() {
    this.fetchposts();
  }
}
