import "../assets/styles/button.scss";

interface IProps {
  text: string;
  className?: string;
}

const Button = (props: IProps) => {
  return (
    <>
      <button className={`button-primary ${props.className ?? ""}`}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
