import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BlogPost } from "../models/blog.model";
import { Experience } from "../models/experience.model";
import { Project } from "../models/project.model";
import { SkillCategory } from "../models/skill.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        title: "Application de gestion d'ecole primaire",
        description:
          "Une plateforme de gestion complète avec gestion des inscription, la production des effets accademique et paiement",
        technologies: ["Angular", "MysQL", "Tailwind CSS", "Spring boot"],
        imageUrl: "assets/icons/groupescolaire.png",
        githubUrl:
          "https://github.com/junior-gerome/junior-gerome-gestion_ecole_primaire",
        liveUrl: "https://project3.com",
        featured: true,
      },
      {
        id: 2,
        title:
          "Application de gestion des note de l'Institu des beaux Art de Nkongsamba (IBA)",
        description:
          "Application de gestion avec production des releve de notes, des certificats de scaolarite, des carte d'etudiants",
        technologies: ["Blade", "Laravel", "MysQL"],
        imageUrl: "assets/icons/iba.png",
        githubUrl: "https://github.com/username/project2",
        liveUrl: "https//project2.com",
        featured: true,
      },
      {
        id: 3,
        title: "Application de Gestion de Tontine ",
        description:
          "Dashboard application de tontine et visualisations interactives de l'historgramme des cotisations",
        technologies: ["Angular", "Chart.js", "API REST", "Tailwind CSS"],
        imageUrl: "https://via.placeholder.com/400x300",
        githubUrl: "https://github.com/username/project3",
        liveUrl: "https://project3.com",
        featured: false,
      },
      {
        id: 4,
        title: "Mon Portfolio",
        description:
          "Réalisation de mon portfolio; graçe à lui vous avez une  présentation  detaillé de moi et de mes différentes réalisations",
        technologies: ["Angular", "Tailwind CSS"],
        imageUrl: "assets/icons/portfolio.png",
        githubUrl: "https://junior-gerome/portfolio/",
        liveUrl: "https://junior-gerome.github.io/portfolio/",
        featured: false,
      },
    ];
    return of(projects);
  }

  getExperiences(): Observable<Experience[]> {
    const experiences: Experience[] = [
      {
        id: 1,
        company: "Kattikach",
        position: "Développeur Frontend ",
        startDate: "2024-08",
        endDate: "Présent",
        description:
          "Développement d'applications web avec Angular et tailwind css. Lead technique sur plusieurs projets critiques.",
        technologies: ["Angular", "TypeScript", "RxJS", "NgRx"],
        location: "Douala, Cameroun",
      },
      {
        id: 2,
        company: "IBA",
        position: "Développeur Full Stack",
        startDate: "2024-06",
        endDate: "2024-12",
        description:
          "Développement full stack d'une plateforme de gestion des effets accademique. Mise en place de l'architecture frontend et backend.",
        technologies: ["Blade", "Laravel", "Mysql", "Java"],
        location: "Remote",
      },
      {
        id: 3,
        company: "LeWeb237",
        position: "Développeur Frontend Junior",
        startDate: "2025-01",
        endDate: "Présent",
        description:
          "Développement de sites web responsive et applications mobiles hybrides.",
        technologies: ["Angular", "tailwind css", "Spring boot", "MysQl"],
        location: "Douala, Cameroun",
      },
    ];
    return of(experiences);
  }

  getSkills(): Observable<SkillCategory[]> {
    const skillCategories: SkillCategory[] = [
      {
        name: "Frontend",
        skills: [
          { id: 1, name: "Javascript", level: 65, category: "frontend" },
          { id: 2, name: "Angular", level: 55, category: "frontend" },
          { id: 3, name: "TypeScript", level: 55, category: "frontend" },
          { id: 4, name: "HTML/CSS", level: 90, category: "frontend" },
          { id: 5, name: "Tailwind CSS", level: 80, category: "frontend" },
          { id: 6, name: "RxJS", level: 55, category: "frontend" },
        ],
      },
      {
        name: "Backend",
        skills: [
          { id: 7, name: "Java", level: 70, category: "backend" },
          { id: 8, name: "Spring boot", level: 55, category: "backend" },
          { id: 9, name: "MysQL", level: 50, category: "backend" },
        ],
      },
      {
        name: "Outils & Autres",
        skills: [
          { id: 10, name: "Git", level: 45, category: "tools" },
          { id: 11, name: "Docker", level: 25, category: "tools" },
          { id: 12, name: "Jest", level: 35, category: "tools" },
          { id: 13, name: "Figma", level: 25, category: "tools" },
          { id: 14, name: "Trello", level: 65, category: "tools" },
          { id: 14, name: "Slack", level: 65, category: "tools" },
        ],
      },
    ];
    return of(skillCategories);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    const posts: BlogPost[] = [
      {
        id: 1,
        title: "Les nouveautés d'Angular 18",
        excerpt:
          "Découvrez les dernières fonctionnalités d'Angular 18 et comment les utiliser dans vos projets.",
        content: "Contenu complet de l'article...",
        imageUrl: "https://via.placeholder.com/600x400",
        author: "Junior Gerome",
        publishDate: "2024-01-15",
        tags: ["Angular", "JavaScript", "Web Dev"],
        readTime: 5,
      },
      {
        id: 2,
        title: "Guide complet de Tailwind CSS",
        excerpt:
          "Maîtrisez Tailwind CSS pour créer des interfaces modernes et responsive.",
        content: "Contenu complet de l'article...",
        imageUrl: "https://via.placeholder.com/600x400",
        author: "Junior Gerome",
        publishDate: "2024-01-10",
        tags: ["CSS", "Tailwind", "Design"],
        readTime: 8,
      },
    ];
    return of(posts);
  }
 
}
