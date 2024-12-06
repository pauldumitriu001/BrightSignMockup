import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-info',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Import CommonModule for Angular directives like *ngIf
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css'],
})
export class DeviceInfoComponent {
  deviceId: string | null = null; 

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: { [x: string]: any }) => {
      this.deviceId =
        params['deviceID'] || params['bsnDeviceId'] || 'Unknown Device';
    });
  }
}

