import { Component, OnInit } from '@angular/core';
import {StuffService} from '../stuffs/stuff-service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {
  stuffList: any = [];
  constructor(private httpService: StuffService) { }

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
