import "./Section.scss";

import Blur from "./Blur";
import Title from "./Title";

export default function Section(props) {
  return (
    <div className={props.className ? "section " + props.className : "section"}>
      <Blur />

      {props.children}
    </div>
  );
}
