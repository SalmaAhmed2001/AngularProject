import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  showText = true;
  collapsed = false;
  iconSize = '24px'; // Initial icon size

  toggleIcons() {
    this.showText = !this.showText;
    this.iconSize = this.showText ? '24px' : '30px'; // Toggle icon size
    this.collapsed = !this.showText; // Toggle sidebar collapsed state
  }
}