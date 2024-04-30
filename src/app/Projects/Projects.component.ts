import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.scss']
})

export class ProjectsComponent {
 
 
  setActive(option: HTMLElement) {
    const options = document.querySelectorAll('.option');
    options.forEach((opt) => {
      opt.classList.remove('active');
    });
    option.classList.add('active');
  }
}
