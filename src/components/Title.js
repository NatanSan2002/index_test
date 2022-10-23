import "./Title.scss";

export default function Title(props) {
  return (
    <div className="title">
      <img src={props.img} width="100%" height="100%" alt="title imagem"/>
      <span>{props.text}</span>
    </div>
  );
}
