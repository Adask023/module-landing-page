import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';
import { httpService } from 'src/app/services/http-req.service';

@Component({
  selector: 'app-help-cards',
  templateUrl: './help-cards.component.html',
  styleUrls: ['./help-cards.component.scss'],
})
export class HelpCardsComponent implements OnInit {
  public posts: Post[] | any;
  constructor(private httpService: httpService) {}

  ngOnInit(): void {
    this.httpService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
