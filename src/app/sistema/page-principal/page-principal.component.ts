import { Component, OnInit } from '@angular/core';
import { PlaywrightService } from '../../services/playwright.service';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.css'
})
export class PagePrincipalComponent implements OnInit{
    testResults: any;
  
    constructor(private resultsService: PlaywrightService) {}
  
    ngOnInit(): void {
      this.resultsService.getTestResults().subscribe((data) => {
        this.testResults = data;
      });
    }
    
}
