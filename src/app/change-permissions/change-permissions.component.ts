import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-permissions',
  templateUrl: './change-permissions.component.html',
  styleUrls: ['./change-permissions.component.scss'],
})
export class ChangePermissionsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  permissionsForm = this.fb.group({
    username: ['', Validators.required],
  });

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.permissionsForm.value);
  }
}
