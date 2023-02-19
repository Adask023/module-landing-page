import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/posts';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-my-posts-page',
  templateUrl: './my-posts-page.component.html',
  styleUrls: ['./my-posts-page.component.scss'],
})
export class MyPostsPageComponent implements OnInit {
  public posts: Post[] | any;
  constructor(private httpService: httpService) {}

  ngOnInit(): void {
    this.getMyPosts();
  }

  getMyPosts() {
    this.httpService.getMyPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }
  deletePost(id: string) {
    this.httpService.removePost(id).subscribe((res) => {
      console.log(res);
      this.getMyPosts();
    });
  }
}
