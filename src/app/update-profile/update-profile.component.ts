import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private httpService: httpService,
    private messageService: MessageService
  ) {}

  profileForm = this.fb.group({
    tel: ['', Validators.required],
    year: ['', Validators.required],
    location: ['', Validators.required],
  });
  ngOnInit(): void {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.httpService
        .updateProfile(
          this.profileForm.value.tel as string,
          this.profileForm.value.year?.toString() as string,
          this.profileForm.value.location as string
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
