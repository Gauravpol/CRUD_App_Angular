import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Service/api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  listofEmployee: any;
  loginForm!: FormGroup;

  constructor(private route: ActivatedRoute, private Api: ApiService) {}

  ngOnInit(): void {
    this.Api.getData(this.route.snapshot.params['id']).subscribe((res: any) => {
      console.log(res.employee);
      this.listofEmployee = res.employee;
    });
  }
}
