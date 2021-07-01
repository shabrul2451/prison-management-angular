import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prison-management-system';

  constructor(private router: Router){}

  goHome(){
    console.log('dekh bal hoye ja');
    
    this.router.navigateByUrl('/home');
  }
}
