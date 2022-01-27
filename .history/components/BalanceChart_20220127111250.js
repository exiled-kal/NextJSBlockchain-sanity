import styled from "styled-components";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
      {
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#3773f5',
          borderColor: '#3773f5',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#3773f5',
          pointBorderWidth:1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#3773f5',
          pointHoverBorderColor: '#3773f5',
          pointHoverBorderWidth:2,

      }
  ],
};

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  );
};

export default BalanceChart;

const Wrapper = styled.div``;
