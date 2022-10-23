import "./quest_dentro.scss"
import Section from "../Section";
import Pergunta from "../Pergunta";

function Quest_Dentro() {

return (
    <article>
    <Section img="./faq.png" text=" ">
    <div id="FAQ" className="perguntas-frequentes">
      <Pergunta
        pergunta="Lorem Ipsum Dolor Sit Amet, Consectur Adipiscing Elit?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet, egestas pulvinar ut purus pulvinar lorem neque, mattis. Non nibh pharetra gravida in scelerisque commodo, dictum. Eget tempus arcu morbi purus. Id aliquet rhoncus aliquam condimentum. Tempus scelerisque id tincidunt tellus sed in nulla vitae vitae. Justo, habitasse nec elit nec sociis ornare. Ornare mattis sed leo elementum pellentesque etiam."
      />
      <Pergunta pergunta="Lorem Ipsum Dolor Sit Amet, Consectur Adipiscing Elit?" />
      <Pergunta pergunta="Lorem Ipsum Dolor Sit Amet, Consectur Adipiscing Elit?" />
      <Pergunta pergunta="Lorem Ipsum Dolor Sit Amet, Consectur Adipiscing Elit?" />
      <Pergunta pergunta="Lorem Ipsum Dolor Sit Amet, Consectur Adipiscing Elit?" />
    </div>
  </Section>
  <Section>
    <div className="fiquepordentro">
      <div className="master">
        <h2>Fique por Dentro</h2>
        <span>
          Preencha seus dados e receba mais informações sobre o evento.
        </span>
      </div>
      <div className="newsletter">
        <p>Cadastre-se na nossa newsletter ↓</p>
        <div className="input-wrapper">
          <input type="text" placeholder="Endereço de e-mail" />
          <div className="button">Inscreva-se</div>
        </div>
      </div>
    </div>
  </Section>
  </article>

              )}
export default Quest_Dentro;







