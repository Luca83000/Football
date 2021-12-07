import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  registered!: string;

  constructor() { }

  ngOnInit(): void {
    this.registered = 'assets/Copyright.png';
  }

}
