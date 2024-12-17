import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  deviceId: string = '';
  title: string = 'BrightSign Mockup';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Extract deviceId from the query parameters
    this.route.queryParams.subscribe((params) => {
      this.deviceId = params['deviceId'] || 'N/A';
    });
    console.log(['deviceId is ', this.deviceId]);
  }
}
