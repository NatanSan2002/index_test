import "./about.scss";
import Button from "../Button";

import Section from "../Section";

function About() {
return(
<article>
<Section img="./futuro.png"  alt="texto: o futuro está aberto">
          <div className="video">
            <img src="./video.png"  alt="imagem video"/>
          </div>
        </Section>
        <Section img="./sobre23.png"  alt="sobre">
          <div id="sobre" className="about-wrapper center">
            <div className="textblock">
              <p>
                Todos os profissionais, de alguma maneira, são digitais e buscam
                entender qual será a melhor trajetória para sua transformação
                profissional dentro de um ambiente inovativo.
              </p>
              <img src="./homemcadeira.png" width="auto" height="auto"  alt="homen cadeira"/>
            </div>
            <div className="textblock">
              <img src="./connect.png" width="auto" height="auto"  alt="imagem de conexão" />
              <p style={{ textAlign: "right" }}>
                Chegou o momento de reunirmos a comunidade odontológica de
                várias especialidades, para discutirmos a transformação digital,
                o que ela proporciona, e tendências. 
              </p>
            </div>
            <div className="textblock">
              <p>
                O digital é mais do que tecnologia que promove velocidade,
                precisão e previsibilidade. É inovação nos fluxos de trabalho e
                em todos os ecossistemas da odontologia, conectando de maneira
                clara e efetiva, pacientes, clínicas, empresas e laboratórios. 
              </p>
              <img src="./endpoint.png" width="auto" height="auto"  alt="endpoint analise"/>
            </div>
          </div>
        </Section>
        <Section className="center">
          <div className="location">
            <h2>lorem ipsum dolor sit amet</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              quis fermentum ac, et. Senectus semper vulputate at justo eget
              gravida imperdiet.
            </span>
            <div className="date-and-location">
              <div className="date-and-location--date opaque">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <span>
                  <strong>15, 16 e 17 de Junho de 2023</strong> das 8h às 19h
                </span>
              </div>
              <div className="date-and-location--location opaque">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span>
                  <strong>São Paulo - SP</strong> Transamerica Expo Center
                </span>
              </div>
            </div>
            <Button text="VEJA COMO CHEGAR" />
          </div>
        </Section>
        <Section className="center">
          <div className="time-left">
            <div className="time-unit">
              <p>12</p>
              <span>DIAS</span>
            </div>
            <p>:</p>
            <div className="time-unit">
              <p>20</p>
              <span>HORAS</span>
            </div>
            <p>:</p>
            <div className="time-unit">
              <p>60</p>
              <span>MINUTOS</span>
            </div>
            <p>:</p>
            <div className="time-unit">
              <p>45</p>
              <span>SEGUNDOS</span>
            </div>
          </div>
          </Section>
          </article>
)
}

export default About;