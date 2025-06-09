// src/app/header/header.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Needed for routerLink on the logo
import { ViewportScroller } from '@angular/common'; // Import ViewportScroller
import { Router } from '@angular/router'; // Also import Router to navigate to root before scrolling

@Component({
  selector: 'app-header',
  standalone: true, // Assuming this is a standalone component for imports to work directly
  imports: [CommonModule, RouterLink], // Add RouterLink here
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  // Inject ViewportScroller and Router
  constructor(private scroller: ViewportScroller, private router: Router) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // New method to handle scrolling
  goToSection(sectionId: string): void {
    // First, navigate to the root path (your landing page)
    // This is important if the user is on a different route
    this.router.navigate(['/']).then(() => {
      // Then, scroll to the specific element
      this.scroller.scrollToAnchor(sectionId);
    });

    // Close mobile menu after clicking a link
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}