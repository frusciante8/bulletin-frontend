import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  selectedStudent: Student;

  constructor(private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit() {
        this.route.params
      .switchMap((params: Params) => this.studentsService.getStudent(+params['id']))
      .subscribe((student: Student) => this.selectedStudent = student);
  }

}
