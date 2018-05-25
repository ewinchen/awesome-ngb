import { Component, OnInit } from '@angular/core';
import { CounterService } from '../posts/di/counter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private conterService: CounterService) { }

  ngOnInit() {
  }

}
