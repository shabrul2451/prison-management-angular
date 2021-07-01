import { Component, OnInit } from '@angular/core';
import { StuffService } from './stuff-service';

@Component({
  selector: 'app-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.scss']
})
export class StuffsComponent implements OnInit {
  // @ts-ignore
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
