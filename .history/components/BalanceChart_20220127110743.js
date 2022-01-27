import styled from "styled-components";
import { Line } from "react-chartjs-2";
 
const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    da
}

const BalanceChart = () => {
  return <Wrapper>
    <Line data={data} options={options} width={400} height={150}/>
  </Wrapper>;
};

export default BalanceChart;

const Wrapper = styled.div``;
