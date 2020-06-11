import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/core/model/user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: any;
  password: any;
  form: UserLogin = new UserLogin();
  ngOnInit(): void {
  }
  login(): void {
    if (this.form.username == 'adminadmin' && this.form.password == 'adminadmin') {
      this.router.navigate(['admin']);
    } else {
      alert('Invalid credentials');
    }
  }
}
