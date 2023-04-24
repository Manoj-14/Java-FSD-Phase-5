import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostData } from './view-posts.interface';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css'],
})
export class ViewPostsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  dbPosts: PostData[] = [];
  fetching: boolean = true;
  ngOnInit(): void {
    this.fetchposts();
  }

  fetchposts = () => {
    this.httpClient
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
      )
      .subscribe((posts) => {
        this.dbPosts = posts;
        this.fetching = false;
      });
  };
}
