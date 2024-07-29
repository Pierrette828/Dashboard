import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kiaalap-angular';
  constructor(private router: Router) {}
  openAddTaskDialog(): void {
    this.router.navigate(['/add-student']);
  }
}
