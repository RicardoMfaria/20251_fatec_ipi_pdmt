import React from 'react';
import { Chart } from 'primereact/chart';

function GraficoUF({ localidades }) {
  const processChartData = (localidades) => {
    if (!localidades || localidades.length === 0) {
      return null;
    }

    const ufCounts = {};
    localidades.forEach(localidade => {
      if (localidade && localidade.uf) {
        ufCounts[localidade.uf] = (ufCounts[localidade.uf] || 0) + 1;
      }
    });

    const labels = Object.keys(ufCounts);
    const data = Object.values(ufCounts);
    const total = localidades.length;
    const percentages = data.map(count => ((count / total) * 100).toFixed(2));

    const chartData = {
      labels: labels.map((uf, index) => `${uf} (${percentages[index]}%)`),
      datasets: [
        {
          data: data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#C9CBCF'], // Cores de exemplo
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#C9CBCF'],
        },
      ],
    };

    return chartData;
  };

  const chartData = processChartData(localidades);

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '700px',
        height: '800px',
        marginTop: '1px',
        backgroundColor: '#F8F8F8'
      }}
    >
      <h2>Percentual de Buscas por Estado</h2>
      {chartData && <Chart type="pie" data={chartData} />}
      {!chartData && <p>Nenhuma busca realizada para exibir o gráfico.</p>}
    </div>
  );
}

export default GraficoUF;