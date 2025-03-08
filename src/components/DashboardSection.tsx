import LineChart from "./charts/LineChart";

const DashboardSection = () => {
  const charts = [
    {
      title: 'Vendas Mensais',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Vendas',
            data: [30, 50, 40, 60, 70, 90],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      },
    },
    {
      title: 'Lucro Mensal',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Lucro',
            data: [10, 20, 15, 25, 30, 45],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Gráficos</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {charts.map((chart, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{chart.title}</h2>
            <LineChart data={chart.data} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DashboardSection;
