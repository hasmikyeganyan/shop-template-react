import Button from "./Button";
import LineChart from "./charts/LineChart";

interface IProps {
  title: string;
}

const Income = (props: IProps) => {
  return (
    <div className="w-75 position-relative">
      <h2>{props.title}</h2>
      <div className="position-absolute r-0 p-2">
        <Button text="Day" />
        <Button className="bg-secondary" text="Month" />
        <Button text="Year" />
      </div>
      <LineChart />
    </div>
  );
};

export default Income;
