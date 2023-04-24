import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostData } from '../view-posts.interface';
import { HttpClient } from '@angular/common/http';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(private blogPostService: BlogPostService) {}

  @Input()
  post: PostData;

  @Output()
  postDeleted = new EventEmitter<{ deleted: boolean }>();

  onDeletePost() {
    this.blogPostService.deletePost(this.post.id).subscribe(() => {
      this.postDeleted.emit({ deleted: true });
    });
  }
}
