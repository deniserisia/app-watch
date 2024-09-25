import { Component, OnInit } from '@angular/core';
import { PlaywrightService } from '../../services/playwright.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
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
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Comentários: Apple Store - Usuários IOS',
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
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Comentários: Play Store - Usuários Android',
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
          label: 'Testes Automatizados na Esteira da Watch',
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

    // Gráfico de Testes para iOS e Android
    new Chart('iosAndroidTestChart', {
      type: 'bar',
      data: {
        labels: ['iOS', 'Android'],
        datasets: [{
          label: 'Quantidade de Total de Testes Realizados',
          data: [150, 120],
          backgroundColor: ['#4CAF50', '#2196F3'],
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

    // Gráfico de barras: Testes Bem-Sucedidos vs Falhas
    new Chart('combinedBarChart', {
      type: 'bar',
      data: {
        labels: ['Sucesso', 'Falhou'],
        datasets: [{
          label: 'Quantidade de Testes',
          data: [25, 5], // Exemplo de valores fictícios
          backgroundColor: ['#4CAF50', '#f44336'],
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

    // Gráfico de pizza: Distribuição das Falhas por Categoria
    new Chart('failDistributionChart', {
      type: 'pie',
      data: {
        labels: ['Login', 'Reprodução de Canais', 'Navegação em Filmes'],
        datasets: [{
          data: [2, 2, 1], // Exemplo de valores fictícios
          backgroundColor: ['#f44336', '#ff9800', '#3f51b5'],
        }]
      }
    });

    // Gráfico de linha: Progresso de Falhas e Sucessos ao Longo do Tempo
    new Chart('progressLineChart', {
      type: 'line',
      data: {
        labels: ['Versão 1', 'Versão 2', 'Versão 3', 'Versão 4'],
        datasets: [{
          label: 'Falhas',
          data: [4, 3, 2, 5], // Exemplo de valores fictícios
          borderColor: '#f44336',
          fill: false
        }, {
          label: 'Sucessos',
          data: [20, 22, 23, 25],
          borderColor: '#4CAF50',
          fill: false
        }]
      }
    });
  

    // Gráfico combinado de Desenvolvedores, Suporte e QA/Testes (Donut)
new Chart('collaboratorsDonutChart', {  // Alterado para 'collaboratorsDonutChart'
  type: 'doughnut',
  data: {
    labels: ['Desenvolvedores', 'Suporte', 'QA/Testes'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});

  }
}
