import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePermissionsComponent } from './change-permissions/change-permissions.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyPostsPageComponent } from './my-posts-page/my-posts-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent, pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'my-posts', component: MyPostsPageComponent },
      { path: 'change-permissions', component: ChangePermissionsComponent },
      { path: 'update-profile', component: UpdateProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
  { path: 'create', component: CreatePostPageComponent, pathMatch: 'full' },

  { path: 'post/:id', component: PostPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
