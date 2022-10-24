import "./programacao.scss"
import Section from "../Section";
import Button from "../Button";
import Activity from "../Activity";

function Programacao() {

return (
<article>
<Section
          img="./programacao.png"
          
          text="Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Arcu
                posuere fermentum netus quam. Lorem Ipsum."
        >
          <div id="programação" className="programacaocientifica">
            <div className="programas-container">
              <div
                className="programa"
                style={{
                  background:
                    "linear-gradient(273.31deg, #0000EA 0.79%, #501B8E 34.92%, #E40E20 81.28%, #EC6907 95.04%)",
                }}
              >
                <div className="programa--main-content">
                  <div className="hora">09:00-18:30</div>
                  <div className="evento-info">
                    <h1>Trend Show</h1>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit diam sollicitudin elementum id faucibus.
                    </span>
                  </div>
                  <div className="button">^</div>
                </div>
                <div className="programa--extra-content">
                  <div className="programa--extra-content--image"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget commodo odio enim turpis non, pellentesque volutpat
                    nunc. Rutrum nulla vulputate interdum orci. Purus duis amet
                    et duis sagittis sollicitudin in lectus. Dui, magna egestas
                    metus nec, tellus. Et ac et enim congue donec vitae. Libero
                    condimentum volutpat, velit tempus eget non fames. Ut diam
                    suspendisse lorem tincidunt. At proin eget ultricies posuere
                    lorem tincidunt posuere. Nibh semper gravida ac turpis
                    interdum. Morbi nibh sit facilisis sagittis nullam integer.
                    Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                    Ipsum Dolor Sit Amet
                  </p>
                </div>
              </div>
              <div
                className="programa"
                style={{
                  background:
                    "linear-gradient(272.61deg, #EC6907 2.18%, #E40E20 94.34%)",
                }}
              >
                <div className="programa--main-content">
                  <div className="hora">09:00-18:30</div>
                  <div className="evento-info">
                    <p>Digitalks: Estética e Prótese</p>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit diam sollicitudin elementum id faucibus.
                    </span>
                  </div>
                  <div className="button">^</div>
                </div>
              </div>
              <div
                className="programa"
                style={{
                  background:
                    "linear-gradient(272.61deg, #501B8E 2.18%, rgba(80, 27, 142, 0.65) 94.34%)",
                }}
              >
                <div className="programa--main-content">
                  <div className="hora">09:00-18:30</div>
                  <div className="evento-info">
                    <p>Digitalks: Cirurgia</p>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit diam sollicitudin elementum id faucibus.
                    </span>
                  </div>
                  <div className="button">^</div>
                </div>
              </div>
              <div
                className="programa"
                style={{
                  background:
                    "linear-gradient(272.61deg, #0000EA 2.18%, rgba(0, 0, 234, 0.65) 94.34%)",
                }}
              >
                <div className="programa--main-content">
                  <div className="hora">09:00-18:30</div>
                  <div className="evento-info">
                    <p>Digitalks: Ortodontia</p>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit diam sollicitudin elementum id faucibus.
                    </span>
                  </div>
                  <div className="button">^</div>
                </div>
              </div>
              <div
                className="programa"
                style={{
                  background:
                    "linear-gradient(272.61deg, #0000EA 2.18%, #EC6907 94.34%)",
                }}
              >
                <div className="programa--main-content">
                  <div className="hora">09:00-18:30</div>
                  <div className="evento-info">
                    <p>Mentorias</p>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit diam sollicitudin elementum id faucibus.
                    </span>
                  </div>
                  <div className="button">^</div>
                </div>
              </div>
            </div>
            <Button text="PROGRAMAÇÃO COMPLETA" />
          </div>
        </Section>
        <Section
        img="./programacao.png"
        text="Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Arcu
              posuere fermentum netus quam. Lorem Ipsum."
      >
        <Activity
          background="linear-gradient(273.31deg, #0000EA 0.79%, #501B8E 34.92%, #E40E20 81.28%, #EC6907 95.04%)"
          title="Trend Show"
          priceBefore="R$ 1.500"
          priceAfter="R$ 1.000"
          include={[
            "Acesso somente ao Trend Show",
            "Dias 15, 16 e 17, das 9h às 18:30h",
          ]}
        />
        <Activity
          background="linear-gradient(246.97deg, #E40E20 14.92%, #EC6907 85.08%)"
          title="Trend Show
          +
          Digitalks Estética e Prótese"
          priceBefore="R$ 2.500"
          priceAfter="R$ 1.500"
          include={[
            "Acesso ao Trend Show (das 9h às 18:30h)",
            "Acesso ao Digitalks sobre Estética e Prótese",
            "Dias 15, 16 e 17, das 10:30h às 15:30h",
          ]}
        />
        <Activity
          background="linear-gradient(246.97deg, rgba(80, 27, 142, 0.5) 14.92%, #501B8E 85.08%)"
          title="Trend Show + Digitalks Cirurgia"
          priceBefore="R$ 1.500"
          priceAfter="R$ 1.000"
          include={[
            "Acesso ao Trend Show (das 9h às 18:30h)",
            "Acesso ao Digitalks sobre Estética e Prótese",
            "Dias 15, 16 e 17, das 10:30h às 15:30h",
          ]}
        />
        <Activity
          background="linear-gradient(246.97deg, rgba(0, 0, 234, 0.65) 14.92%, #0000EA 85.08%)"
          title="Trend Show
          +
          Digitalks 
          Ortodontia"
          priceBefore="R$ 1.500"
          priceAfter="R$ 1.000"
          include={[
            "Acesso ao Trend Show (das 9h às 18:30h)",
            "Acesso ao Digitalks sobre Ortodontia",
            "Dias 15, 16 e 17, das 10:30h às 15:30h",
          ]}
        />
        <Activity
          background="linear-gradient(272.61deg, #0000EA 2.18%, #E40E20 52.49%, #501B8E 97.82%)"
          title="Trend Show
          +
          Digitalks 
          Ortodontia"
          priceBefore="R$ 1.500"
          priceAfter="R$ 1.000"
          include={[
            "Acesso ao Trend Show (das 9h às 18:30h)",
            "Acesso ao Digitalks sobre Ortodontia",
            "Dias 15, 16 e 17, das 10:30h às 15:30h",
          ]}
        />
      </Section>
      </article>

              )}
export default Programacao;