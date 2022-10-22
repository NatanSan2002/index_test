import "./Pergunta.scss";

export default function Pergunta(props) {
  let x = true;
  return (
    <div className="pergunta">
      <div className="pergunta-wrapper">
        <div className="pergunta-texto">{props.pergunta}</div>

        <div className="pergunta-button">{x ? <p>^</p> : <p>^</p>}</div>
      </div>
      {props.text ? (
        <div className="extra-content">
          <p>{props.text}</p>
        </div>
      ) : null}
    </div>
  );
}
