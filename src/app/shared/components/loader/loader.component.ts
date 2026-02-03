import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: "app-loader",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.scss",
})
export class LoaderComponent {
  @Input() size: "sm" | "md" | "lg" = "md";
  @Input() text?: string;
  @Input() fullScreen = false;

  get containerClasses(): string {
    const base = "flex flex-col items-center justify-center";
    const fullScreenClass = this.fullScreen
      ? "fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50"
      : "py-8";
    return `${base} ${fullScreenClass}`;
  }

  get spinnerClasses(): string {
    const base =
      "animate-spin rounded-full border-4 border-gray-300 border-t-primary-600";
    const sizes = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
    };
    return `${base} ${sizes[this.size]}`;
  }
}
