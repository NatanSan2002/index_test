import "./Section.scss";

import Title from "./Title";

export default function Section(props) {
  return (
    <div
      className="section"
      style={{
        minHeight: props.height,
        background: props.background,
      }}
    >
      {props.img ? <Title text={props.text} img={props.img} /> : null}
      {props.children}
    </div>
  );
}
