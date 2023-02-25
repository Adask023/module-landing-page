import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private httpService: httpService) {}

  registerForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    location: ['', Validators.required],
    age: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.httpService
        .register(
          this.registerForm.value.login as string,
          this.registerForm.value.password as string,
          this.registerForm.value.phone as string,
          this.registerForm.value.age?.toString() as string,
          this.registerForm.value.location as string
        )
        .subscribe((res) => {
          console.log(res);
          this.registerForm.reset();
        });
    }
  }
}
