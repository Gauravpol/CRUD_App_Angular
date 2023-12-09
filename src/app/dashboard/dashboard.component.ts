import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Service/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  listofEmployee: any;
  loginForm: any;
  error: any;
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private Api: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.Api.getEmployee().subscribe(
      (res: any) => {
        console.log(res.employee);
        this.listofEmployee = res.employee;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getClass(value: number): any {
    if (value < 25000) {
      return 'class1';
    } else if (value >= 25000) {
      return 'class2';
    }
  }

  deleteEmployee(employee: any) {
    confirm('“Are you sure you want to delete?');
    this.Api.deleteEmployee(employee.employeeId).subscribe((res) => {
      this.getAllEmployee();
    });
  }
}
