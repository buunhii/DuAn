import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// Router: service dùng để routing
import { Router } from '@angular/router';

import { AuthService } from '@/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  error: string = '';
  isLoading: boolean = false;

  constructor(private authSerice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleSignin() {
    // Chặn khi người dùng submit value chưa hợp lệ
    if (this.signinForm.invalid) return;

    this.isLoading = true;
    this.authSerice.signin(this.signinForm.value).subscribe({
      next: (result) => {
        this.isLoading = false;

        // Set kết quả đăng nhập cho biến currentUser trên authService
        this.authSerice.setCurrentUser(result);
        // Lưu data xuống localStorage
        localStorage.setItem('user', JSON.stringify(result));

        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
        this.error = error.error;
      },
    });
  }
}
