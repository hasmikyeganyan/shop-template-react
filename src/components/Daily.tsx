import CircleChart from "./charts/CircleChart";

interface IProps {
  title: string;
}

const Daily = (props: IProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <CircleChart />
    </div>
  );
};

export default Daily;
