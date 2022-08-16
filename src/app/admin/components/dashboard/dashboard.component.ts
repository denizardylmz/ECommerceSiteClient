import { Component, OnInit } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private alertify : AlertifyService) {  }

  ngOnInit(): void {
    

  }

  m() {
    this.alertify.message("Dashboard mesajı", {messageType: MessageType.Warning, position: Position.TopLeft, delay:5})
  }

  d() {
    this.alertify.dismissAll()
  }
}
