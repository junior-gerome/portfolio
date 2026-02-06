import { of } from 'rxjs';
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
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/junior-gerome",
      iconPath: "assets/icons/githublogo.png",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/junior-gerome",
      iconPath: "assets/icons/LinkedInLogo.png",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/juniorNguep",
      iconPath: "assets/icons/twitterlogo.png",
    },
    {
      name: "Email",
      url: "mailto:jnguepmanyo&#64;gmail.com",
      iconPath: "assets/icons/email.png",
    },
  ];

  quickLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" },
  ];
}
