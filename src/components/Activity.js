import "./Activity.scss";

import Button from "./Button";

export default function Activity(props) {
  let include = props.include;
  include = include.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <div className="activity">
      <div
        className="image"
        style={{
          background: props.background,
        }}
      >
        <h2>{props.title}</h2>
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <div className="sale">
          <span className="before">{props.priceBefore}</span>
          <span className="after">{props.priceAfter}</span>
        </div>
        <span className="outer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu posuere
          fermentum netus quam.
        </span>
        <div className="join">
          <ul>
            <strong>Inclui:</strong>
            {include}
          </ul>
          <Button text="INSCREVA-SE AGORA" />
        </div>
      </div>
    </div>
  );
}
