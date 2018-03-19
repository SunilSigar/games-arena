import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  term = '';
  data = '';
  private apiUrl = 'http://starlord.hackerearth.com/gamesarena';
  constructor(private http: Http){
    this.getData();
  }
  getData(){
     this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
