import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostData } from '../view-posts/view-posts.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private httpClient: HttpClient) {}
  createPost(postsData: PostData) {
    return this.httpClient.post(
      'https://blogproject-48cc7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postsData
    );
  }

  deletePost(id) {
    return this.httpClient.delete(
      `https://blogproject-48cc7-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
    );
  }

  fetchposts() {
    return this.httpClient
      .get(
        'https://blogproject-48cc7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArray: any = [];
          for (const key in responseData) {
            postArray.push({
              id: key,
              ...responseData[key],
            });
          }
          return postArray;
        })
      );
  }
}
