import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  postId = null;
  postDetails: any = null;
  constructor(route: ActivatedRoute, private httpService: httpService) {
    route.params.subscribe((params) => {
      this.postId = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.postId)
      this.httpService.getPostDetails(this.postId).subscribe((res) => {
        this.postDetails = res;
        console.log(res);
      });
  }
}
