import "./Section.scss";

import Blur from "./Blur";
import Title from "./Title";

export default function Section(props) {
  return (
    <div className="section">
      <Blur />
      <Title>
        <h1>{props.title}</h1>
      </Title>
      {props.children}
    </div>
  );
}
