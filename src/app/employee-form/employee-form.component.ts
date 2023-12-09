import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { flatMap, map } from 'rxjs';
import { ApiService } from '../Service/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {

  loginForm!: FormGroup;
  error: any;
  listofEmployee: any;
  OnEdit: boolean = false;


  constructor(private fb: FormBuilder,
     private Api: ApiService, 
     private route: ActivatedRoute,
     private router:Router) { }


  ngOnInit(){

    this.loginForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      companyName: ['', Validators.required],
      salary: ['', Validators.required],
      mobileNumber: ['', Validators.required],

    })

 
    const employeeId = this.route.snapshot.params['id'];

    if (employeeId) {
      this.OnEdit = true;
      this.Api.getData(employeeId).subscribe((res: any) => {
        console.log(res);
        this.loginForm.patchValue(res.employee);
      }); 
    }
 
  }

  onSubmit() {

    const data = {
      firstname: this.loginForm.value.firstname,
      lastname: this.loginForm.value.lastname,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      companyName: this.loginForm.value.companyName,
      salary: this.loginForm.value.salary,
      mobileNumber: this.loginForm.value.mobileNumber,
    };

    if (this.OnEdit) {
      this.Api.updateEmployee(this.route.snapshot.params['id'], data)
        .subscribe((res: any) => {
          alert("Employee Details updated");
          console.log(res);
          this.router.navigate(['/dashboard']);

        },
          error => {
            alert("something want wrong for updating data")
          });
    }
    else {
      this.Api.postEmployee(data)
        .subscribe((res: any) => {
          alert("Employee Added Sucessfully")
          console.log(res);
          this.router.navigate(['/dashboard']);
        }, error => {
          alert("something want wrong for posting data")
        });
    }
    this.loginForm.reset();
  }

}



