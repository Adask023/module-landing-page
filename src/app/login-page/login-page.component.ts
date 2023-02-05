import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private httpService: httpService) {}

  profileForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.httpService
        .login(
          this.profileForm.value.login as string,
          this.profileForm.value.password as string
        )
        .subscribe((res) => {
          localStorage.setItem('user', JSON.stringify(res));
        });
    }
  }
}
