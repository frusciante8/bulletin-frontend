import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[];

  constructor(private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.studentsService.getStudents().then(students => this.students = students);
  }

  gotoDetail(student: Student) {
    this.router.navigate(['students', student.id]);
  }

}
