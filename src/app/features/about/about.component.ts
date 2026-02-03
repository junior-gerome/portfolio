import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Toujours à la recherche de solutions créatives et modernes pour résoudre les problèmes",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Travail d'équipe et communication claire pour atteindre les objectifs communs",
    },
    {
      icon: "📚",
      title: "Apprentissage",
      description:
        "Apprentissage continu et adaptation aux nouvelles technologies et pratiques",
    },
  ];

  education = [
    {
      degree: "Licence en Genie Logiciel",
      school: "Institut Universitaire du Golfe de Guinnee (IUG)",
      year: "2023 - 2024",
    },
    {
      degree: "BTS en Genie Logiciel",
      school: "Institut Universitaire du Golfe de Guinnee (IUG)",
      year: "2022 - 2023",
    },
  ];

  certifications = [
    {
      name: "Angular Advanced Certification",
      issuer: "Google Developers",
      year: "2023",
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      year: "2021",
    },
  ];
}
