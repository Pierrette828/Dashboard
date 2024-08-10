import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// import { OperateurServiceService } from '../service/operateur-service.service';


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      file: [null, Validators.required],
      gender: ['', Validators.required],
      operateur: ['', Validators.required],
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // if (this.form.valid) {
    //   this.apiService.saveFormData(this.form.value).subscribe(response => {
    //     console.log('Form data saved successfully!', response);
    //   }, error => {
    //     console.error('Error saving form data', error);
    //   });
    // }
  }

}
