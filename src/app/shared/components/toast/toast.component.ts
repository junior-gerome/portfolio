import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-toast",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
})
export class ToastComponent implements OnInit {
  @Input() message = "";
  @Input() type: "success" | "error" | "warning" | "info" = "info";
  @Input() duration = 3000;
  @Output() closed = new EventEmitter<void>();

  visible = true;

  ngOnInit(): void {
    if (this.duration > 0) {
      setTimeout(() => this.close(), this.duration);
    }
  }

  get toastClasses(): string {
    const base =
      "fixed top-4 right-4 max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50 animate-slide-in";
    const types = {
      success: "border-l-4 border-green-500",
      error: "border-l-4 border-red-500",
      warning: "border-l-4 border-yellow-500",
      info: "border-l-4 border-blue-500",
    };
    return `${base} ${types[this.type]}`;
  }

  get icon(): string {
    const icons = {
      success: "✓",
      error: "✕",
      warning: "⚠",
      info: "ℹ",
    };
    return icons[this.type];
  }

  close(): void {
    this.visible = false;
    this.closed.emit();
  }
}
