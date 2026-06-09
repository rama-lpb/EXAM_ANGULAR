import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
