import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SkillCategory } from '@app/core/models/skill.model';
import { DataService } from '@app/core/services/data.service';
import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, BadgeComponent, LoaderComponent],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent implements OnInit {
  private dataService = inject(DataService);

  skillCategories: SkillCategory[] = [];
  loading = true;

  tools = [
    "VS Code",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Postman",
    "Figma",
    "Trello",
    "Slack",
  ];

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.dataService.getSkills().subscribe({
      next: (data) => {
        this.skillCategories = data;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading skills:", error);
        this.loading = false;
      },
    });
  }

  getProgressBarColor(level: number): string {
    if (level >= 80) return "bg-gradient-to-r from-green-500 to-green-600";
    if (level >= 60) return "bg-gradient-to-r from-blue-500 to-blue-600";
    if (level >= 40) return "bg-gradient-to-r from-yellow-500 to-yellow-600";
    return "bg-gradient-to-r from-red-500 to-red-600";
  }

  getBadgeVariant(level: number): "success" | "primary" | "warning" | "danger" {
    if (level >= 80) return "success";
    if (level >= 60) return "primary";
    if (level >= 40) return "warning";
    return "danger";
  }
}
