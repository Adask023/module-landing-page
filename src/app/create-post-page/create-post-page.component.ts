import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss'],
})
export class CreatePostPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private httpService: httpService) {}

  postForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.postForm.value);
    this.httpService
      .addPost(
        this.postForm.value.title as string,
        this.postForm.value.content as string
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
