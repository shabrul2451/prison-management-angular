import { Component, OnInit } from '@angular/core';
import { InmatesService } from './inmates.service';

@Component({
  selector: 'app-inmates',
  templateUrl: './inmates.component.html',
  styleUrls: ['./inmates.component.scss']
})
export class InmatesComponent implements OnInit {
  stuffList: any = [];
  constructor(private httpService: InmatesService) { }

  ngOnInit(): void {
    this.getStuff();
  }
  getStuff(): any {
    this.httpService.getStuffs().subscribe(data => this.stuffList = data);
  }
  delete(id: any): any {
    this.httpService.delStuff(id).subscribe(res => {
      console.log('success');
    });
  }

}
