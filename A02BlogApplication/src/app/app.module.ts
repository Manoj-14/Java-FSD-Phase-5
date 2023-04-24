import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { PostComponent } from './view-posts/post/post.component';

const appRoutes: Routes = [
  { path: 'AddBlog', component: BlogPostComponent },
  { path: 'ViewBlog', component: ViewPostsComponent },
];

@NgModule({
  declarations: [AppComponent, BlogPostComponent, ViewPostsComponent, PostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
