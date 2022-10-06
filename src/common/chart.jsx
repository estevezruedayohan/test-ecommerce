import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement);

const Chart = ({ chartData }) => {
  return(
    <>
      <Bar 
        data= {chartData}
        options={{
          title: {
            display: true,
            text: 'Category',
            fontSize: 20
          },
          legend:{
            display: true,
            position: 'right'
          }, 
        }}
        />
    </>
  );
};

export default Chart;