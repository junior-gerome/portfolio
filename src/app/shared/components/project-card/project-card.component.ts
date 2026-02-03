import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: "app-project-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.scss",
})
export class ProjectCardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt: string = "Card image";
  @Input() hoverable = true;

  get projectcardClasses(): string {
    const base =
      "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300";
    const hover = this.hoverable ? "hover:shadow-xl hover:-translate-y-1" : "";
    return `${base} ${hover}`;
  }
}
