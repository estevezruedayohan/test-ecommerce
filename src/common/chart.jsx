import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {

  // const option = {
  //   responsive: true,
  //     plugins: {
  //       legend: {
  //         display: true, 
  //         position: 'right',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Hello world',
  //         fontSize: 20,
  //       },
  //     }
  // };
  
  return(
    <>
      <Bar 
        options={
          {responsive: true,
          plugins: {
            legend: {
              display: true, 
              position: 'right',
            },
            title: {
              display: true,
              text: 'Category',
              // fontSize: 20,
            },
          }}
        }
        data= {chartData}
                  
          // {
          // title: {
          //   display: true,
          //   text: 'Category',
          //   fontSize: 20
          // },
          // legend:{
          //   display: true,
          //   position: 'right'
          // }, 
        // }}
        />
    </>
  );
};