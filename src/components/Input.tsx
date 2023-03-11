import { FC } from "react";
import user from "../assets/images/user.png";
interface IProps {
  //   onChange: (str: string) => void;
  placeholder: string;
  value?: string;
}

const Input: FC<IProps> = (props) => {
  const { placeholder, value } = props;

  return (
    <div className="d-flex gap-4">
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            placeholder={placeholder}
            value={value}
            className="form-control bg-light border-0 small"
            aria-label="Search"
            aria-describedby="basic-addon2"
          ></input>

          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>
      <img alt="user" src={user}></img>
    </div>
  );
};

export default Input;
