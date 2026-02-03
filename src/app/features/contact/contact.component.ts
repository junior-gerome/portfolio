import { ContactService } from './../../core/services/contact.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ToastComponent } from '@app/shared/components/toast/toast.component';

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  contactForm: FormGroup;
  isSubmitting = false;
  showToast = false;
  toastMessage = "";
  toastType: "success" | "error" = "success";

  socials = [
    { icon: "💻", url: "https://github.com/junior-gerome" },
    { icon: "💼", url: "https://linkedin.com/in/junior-gerome" },
    { icon: "🐦", url: "https://twitter.com/juniorNguep" },
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.minLength(10)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.toastMessage = response.message;
          this.toastType = "success";
          this.showToast = true;
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.toastMessage =
            "Erreur lors de l'envoi du message. Veuillez réessayer.";
          this.toastType = "error";
          this.showToast = true;
          console.error("Error sending message:", error);
        },
      });
    }
  }
}
