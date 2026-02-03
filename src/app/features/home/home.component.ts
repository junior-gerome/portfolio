import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  stats = [
    { value: "2+", label: "Années d'expérience" },
    { value: "5+", label: "Projets réalisés" },
    { value: "2+", label: "Clients satisfaits" },
    { value: "100%", label: "Engagement" },
  ];

  features = [
    {
      icon: "⚡",
      title: "Performance",
      description:
        "Applications rapides et optimisées pour une expérience utilisateur fluide",
    },
    {
      icon: "🎨",
      title: "Design Moderne",
      description:
        "Interfaces élégantes et responsive qui s'adaptent à tous les écrans",
    },
    {
      icon: "🔒",
      title: "Sécurité",
      description:
        "Code sécurisé et respect des meilleures pratiques de développement",
    },
  ];
}
