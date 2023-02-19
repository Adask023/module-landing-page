import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss'],
})
export class CreatePostPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private httpService: httpService,
    private messageService: MessageService
  ) {}

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
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Post został utworzony',
        });
        this.postForm.reset();
      });
  }
}
