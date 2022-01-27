import styled from "styled-components";
import { Line } from "react-chartjs-2";

const BalanceChart = () => {
  return <Wrapper>
    <Line data={data} option:{options} width={400} height={}/>
  </Wrapper>;
};

export default BalanceChart;

const Wrapper = styled.div``;
