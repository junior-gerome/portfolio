import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "../../shared/components/project-card/project-card.component";
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { DataService } from '../../core/services/data.service';
import { BlogPost } from '../../core/models/blog.model';

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, BadgeComponent,
    ButtonComponent, LoaderComponent],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.scss",
})
export class BlogComponent implements OnInit {
  private dataService = inject(DataService);

  blogPosts: BlogPost[] = [];
  loading = true;

  ngOnInit(): void {
    this.loadBlogPosts();
  }

  loadBlogPosts(): void {
    this.dataService.getBlogPosts().subscribe({
      next: (data) => {
        this.blogPosts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading blog posts:", error);
        this.loading = false;
      },
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  getInitials(name: string): string {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  readPost(postId: number): void {
    // Navigation vers l'article complet (à implémenter)
    console.log("Reading post:", postId);
    alert("Fonctionnalité à venir : lecture complète de l'article #" + postId);
  }
}
