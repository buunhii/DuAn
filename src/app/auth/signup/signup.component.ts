import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@/core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string = '';
  constructor(private authService: AuthService, private router: Router) {
    // taiKhoan, matKhau, email, hoTen, soDt
    this.signupForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      hoTen: new FormControl('', [Validators.required]),
      soDt: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  checkError(field: string, type?: string) {
    const control = this.signupForm.get(field);

    if (type) {
      return control?.errors?.[type];
    }

    return control?.invalid && (control?.touched || control?.dirty);
  }

  handleSignup() {
    // Sử lý chặn khi submit nhưng input có lỗi
    this.signupForm.markAllAsTouched();
    if (this.signupForm.invalid) return;
    this.authService.signup(this.signupForm.value).subscribe({
      next: (result) => {
        window.confirm(
          'Đăng kí thành công, Hãy đăng nhập để nhận nhiều ưu đãi'
        );
        this.router.navigateByUrl('/signin');
      },
      error: (error) => {
        this.error = error.error;
      },
    });
    console.log(this.signupForm.value);
  }
}
