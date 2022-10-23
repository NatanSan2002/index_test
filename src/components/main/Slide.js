import "./Slide.scss";


function Slide() {
    let items = ["item1.png", "item2.png", "item3.png", "item4.png"];
    items = items.map((item, index) => {
      return (
        <div id={"item" + index} className="item">
          <div className="buttons">
            <a href={"#item" + (index - 1)}>
              <div className="buttons-left">{"<"}</div>
            </a>
            <a href={"#item" + (index + 1)}>
              <div className="buttons-right">{">"}</div>
            </a>
          </div>
          <img src={`./${item}`} alt="Imagem Slide"/>
        </div>
        
      );
    });

return (
<div className="hero">{items}</div>
)
}

export default Slide;