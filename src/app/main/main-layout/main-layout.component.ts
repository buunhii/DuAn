import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  currentUser: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Theo dõi biến currentUser trong authService
    this.authService.currentUser.subscribe({
      next: (data) => {
        this.currentUser = data;
      },
    });
  }
  handleLogout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.authService.setCurrentUser(null);
  }
  toSectionSmoothScroll(idSection: string) {
    document.getElementById(idSection)?.scrollIntoView({ behavior: 'smooth' });
  }
}
