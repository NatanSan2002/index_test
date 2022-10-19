import "./Title.scss";

export default function Title(props) {
  return (
    <div className="gradient-background-wrapper">
      {props.children}
      <div className="gradient-background"></div>
    </div>
  );
}
