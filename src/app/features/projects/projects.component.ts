import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Project } from '@app/core/models/project.model';
import { DataService } from '@app/core/services/data.service';
import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';
import { ProjectCardComponent } from '@app/shared/components/project-card/project-card.component';

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    ButtonComponent,
    LoaderComponent,
    BadgeComponent
],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent implements OnInit {
  private dataService = inject(DataService);

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  loading = true;
  selectedFilter = "Tous";
  filters = ["Tous", "Featured", "Angular", "java", "Spring boot"];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.dataService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.filteredProjects = data;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading projects:", error);
        this.loading = false;
      },
    });
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;

    if (filter === "Tous") {
      this.filteredProjects = this.projects;
    } else if (filter === "Featured") {
      this.filteredProjects = this.projects.filter((p) => p.featured);
    } else {
      this.filteredProjects = this.projects.filter((p) =>
        p.technologies.some((tech) =>
          tech.toLowerCase().includes(filter.toLowerCase()),
        ),
      );
    }
  }

  openLink(url: string): void {
    window.open(url, "_blank", "noopener noreferrer");
  }
}