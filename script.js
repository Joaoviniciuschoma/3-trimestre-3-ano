const ctx = document.getElementById('platformChart').getContext('2d');

const platformChart = new Chart(ctx, {
    type: 'bar', // Tipo do gráfico: barras
    data: {
        labels: ['Instagram', 'PlayStation', 'WhatsApp', 'Epic Games'], // Nomes das plataformas
        datasets: [{
            label: 'Popularidade (%)', // Título do gráfico
            data: [75, 65, 85, 55], // Dados fictícios de popularidade (em %)
            backgroundColor: [
                'rgba(78, 135, 255, 0.7)', // Instagram
                'rgba(0, 0, 0, 0.7)', // PlayStation
                'rgba(37, 211, 102, 0.7)', // WhatsApp
                'rgba(255, 159, 64, 0.7)', // Pic Games
            ],
            borderColor: [
                'rgba(78, 135, 255, 1)', // Instagram
                'rgba(0, 0, 0, 1)', // PlayStation
                'rgba(37, 211, 102, 1)', // WhatsApp
                'rgba(255, 159, 64, 1)', // Pic Games
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + '%';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});
