import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  appTitle = 'Titolo';
  tooltip = 'Tooltip'
  inputVar: string;

  changeTitle() {
    this.appTitle = 'Ho cambiato il titolo :)';
    this.inputVar = 'Ciao';
  }

  showAlert() {
    const sampleService: SampleService = new SampleService();
    sampleService.showAlert(this.inputVar);
  }

}