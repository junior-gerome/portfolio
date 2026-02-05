import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent{


  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: "GitHub", url: "https://github.com/junior-gerome", icon: "💻" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/junior-gerome",
      icon: "💼",
    },
    { name: "Twitter", url: "https://twitter.com/juniorNguep", icon: "🐦" },
    { name: "Email", url: "mailto:jnguepmanyo&#64;gmail.com", icon: "✉️" },
  ];

  quickLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" },
  ];
}
