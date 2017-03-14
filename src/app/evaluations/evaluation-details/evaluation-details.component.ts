import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../evaluation';
import { EvaluationsService } from '../evaluations.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentsService } from '../../students/students.service';
import { Student } from '../../students/student';

@Component({
  selector: 'app-evaluation-details',
  templateUrl: './evaluation-details.component.html',
  styleUrls: ['./evaluation-details.component.css']
})
export class EvaluationDetailsComponent implements OnInit {

  selectedEvaluation: Evaluation;
  results: {};

  constructor(private route: ActivatedRoute,
    private service: EvaluationsService,
    private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getEvaluation(+params['id']))
      .subscribe((ev: Evaluation) => {
        this.selectedEvaluation = ev;
        for (let key in this.selectedEvaluation.results) {
          console.log("Student: " + this.student(key));
        }
      });
  }

  keys() : Array<string> {
    return Object.keys(this.selectedEvaluation.results);
  }

  student(id: string): Student {
    var student: Student;

    console.log(id);

    this.studentsService.getStudent(+id).then(stu => student = stu);

    return student;
  }

  

}
