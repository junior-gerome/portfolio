import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Experience } from '@app/core/models/experience.model';
import { DataService } from '@app/core/services/data.service';
import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, BadgeComponent, LoaderComponent],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent implements OnInit {
  private dataService = inject(DataService);

  experiences: Experience[] = [];
  loading = true;

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences(): void {
    this.dataService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading experiences:", error);
        this.loading = false;
      },
    });
  }

  getItemClasses(index: number): string {
    return "flex items-center";
  }

  getCardClasses(index: number): string {
    const isEven = index % 2 === 0;
    return isEven
      ? "md:ml-auto md:mr-8 ml-16 md:w-5/12"
      : "md:mr-auto md:ml-8 ml-16 md:w-5/12";
  }

  formatDate(date: string): string {
    if (date.toLowerCase() === "présent") {
      return "Présent";
    }

    const [year, month] = date.split("-");
    const months = [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sep",
      "Oct",
      "Nov",
      "Déc",
    ];

    return `${months[parseInt(month) - 1]} ${year}`;
  }
}
