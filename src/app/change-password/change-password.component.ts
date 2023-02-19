import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { httpService } from '../services/http-req.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private httpService: httpService,
    private messageService: MessageService
  ) {}

  passwordForm = this.fb.group({
    old: ['', Validators.required],
    new: ['', Validators.required],
  });
  ngOnInit(): void {}

  onSubmit() {
    if (this.passwordForm.valid) {
      this.httpService
        .changePassword(
          this.passwordForm.value.old as string,
          this.passwordForm.value.new as string
        )
        .subscribe((res) => {
          console.log(res);
          this.messageService.add({
            severity: 'success',
            summary: 'Hasło zostało zmienione',
          });
          this.passwordForm.reset();
        });
    }
  }
}
