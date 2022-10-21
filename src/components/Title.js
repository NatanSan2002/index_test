import "./Title.scss";

export default function Title(props) {
  return (
    <div
      className={
        props.className
          ? "gradient-background-wrapper " + props.className
          : "gradient-background-wrapper"
      }
    >
      {props.children}
      <div className="gradient-background"></div>
    </div>
  );
}
