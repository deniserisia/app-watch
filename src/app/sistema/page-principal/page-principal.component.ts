import { Component, OnInit } from '@angular/core';
import { PlaywrightService } from '../../services/playwright.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css'] // Corrigido styleUrl -> styleUrls
})
export class PagePrincipalComponent implements OnInit {
  testResults: any;

  constructor(private resultsService: PlaywrightService) {}

  ngOnInit(): void {
    this.resultsService.getTestResults().subscribe((data) => {
      this.testResults = data;
    });

    this.createCharts();
  }

  createCharts() {
    // Gráfico iOS
    new Chart('iosChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'iOS',
          data: [1, -2, 3, -1, 2, -3, 1, 2, -1, 3, -2, 1],
          backgroundColor: '#4CAF50',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Gráfico Android
    new Chart('androidChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Android',
          data: [2, -3, 1, -2, 3, -1, 2, -3, 1, 2, -1, 3],
          backgroundColor: '#2196F3',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Gráfico de Testes Automáticos por Navegador
    new Chart('browserChart', {
      type: 'bar',
      data: {
        labels: ['Chrome', 'Firefox', 'Edge', 'Safari'],
        datasets: [{
          label: 'Testes Automáticos',
          data: [40, 30, 20, 10],
          backgroundColor: ['#f44336', '#3f51b5', '#ff9800', '#009688'],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Gráfico de Desenvolvedores (Donut)
    new Chart('devsChart', {
      type: 'doughnut',
      data: {
        labels: ['Desenvolvedores'],
        datasets: [{
          data: [50],
          backgroundColor: ['#4CAF50'],
        }]
      }
    });

    // Gráfico de Suporte (Donut)
    new Chart('supportChart', {
      type: 'doughnut',
      data: {
        labels: ['Suporte'],
        datasets: [{
          data: [30],
          backgroundColor: ['#2196F3'],
        }]
      }
    });

    // Gráfico de QA/Testes (Donut)
    new Chart('qaChart', {
      type: 'doughnut',
      data: {
        labels: ['QA/Testes'],
        datasets: [{
          data: [20],
          backgroundColor: ['#FFC107'],
        }]
      }
    });
  }
}
