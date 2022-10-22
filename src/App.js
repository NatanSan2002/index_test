import "./App.scss";

import Section from "./components/Section";
import Title from "./components/Title";
import Button from "./components/Button";
import Activity from "./components/Activity";
import Pergunta from "./components/Pergunta";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <nav>
          <div className="master">
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </div>
            <div className="home">
              <Logo />
            </div>
            <div className="join">
              <div className="signup btn">Inscreva-se</div>
              <div className="login btn">
                <div className="border">Já sou inscrito</div>
              </div>
            </div>
          </div>
          <ul>
            <li>Sobre</li>
            <li>Speakers</li>
            <li>Programação</li>
            <li>Agenda</li>
            <li>Expo</li>
            <li>FAQ</li>
            <li>Área do Expositor</li>
          </ul>
        </nav>
        <div className="hero"></div>
        <Section img="./futuro.png">
          <div className="video">
            <video src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/l/la/the-last-of-us-part-i/videos/the-last-of-us-part-1-frame-compare-ellie-en-08jun22.mp4"></video>
          </div>
        </Section>
        <Section img="./sobre23.png">
          <div className="about-wrapper center">
            <div className="textblock">
              <p>
                Todos os profissionais, de alguma maneira, são digitais e buscam
                entender qual será a melhor trajetória para sua transformação
                profissional dentro de um ambiente inovativo.
              </p>
              <img src="./homemcadeira.png" width="auto" height="auto" />
            </div>
            <div className="textblock">
              <img src="./connect.png" width="auto" height="auto" />
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
              <img src="./endpoint.png" width="auto" height="auto" />
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
        <Section img="./comosera.png">
          <div className="comosera">
            <div className="qualificacoes center">
              <div
                className="qualificacoes--card"
                style={{
                  background:
                    "linear-gradient(199.62deg, #501B8E -11.13%, rgba(80, 27, 142, 0.55) 124.61%)",
                }}
              >
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="96"
                    height="96"
                    rx="25"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48 40C54.6274 40 60 34.6274 60 28C60 21.3726 54.6274 16 48 16C41.3726 16 36 21.3726 36 28C36 34.6274 41.3726 40 48 40Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M68 44C72.4183 44 76 40.4183 76 36C76 31.5817 72.4183 28 68 28C63.5817 28 60 31.5817 60 36C60 40.4183 63.5817 44 68 44Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 44C32.4183 44 36 40.4183 36 36C36 31.5817 32.4183 28 28 28C23.5817 28 20 31.5817 20 36C20 40.4183 23.5817 44 28 44Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48 40C39.1634 40 32 47.1634 32 56V76C32 78.2091 33.7909 80 36 80H60C62.2091 80 64 78.2091 64 76V56C64 47.1634 56.8366 40 48 40Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60.4067 46.7075C59.6164 47.3541 58.91 48.0996 58.3065 48.925C59.6901 50.9368 60.5 53.3738 60.5 56V72H63.5V56C63.5 52.514 62.3492 49.2967 60.4067 46.7075ZM61.2064 46.1069C63.2746 48.8634 64.5 52.2886 64.5 56V72H76C78.2091 72 80 70.2091 80 68V56C80 49.3726 74.6274 44 68 44C65.4781 44 63.138 44.7779 61.2064 46.1069ZM59.5 71.9691V56C59.5 53.7293 58.8419 51.6123 57.706 49.8293C56.6228 51.6324 56 53.7435 56 56V68C56 70.0398 57.5268 71.723 59.5 71.9691Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.5 72H35.5V56C35.5 53.3738 36.3099 50.9368 37.6935 48.925C37.09 48.0996 36.3836 47.3541 35.5933 46.7075C33.6508 49.2967 32.5 52.514 32.5 56V72ZM31.5 72V56C31.5 52.2886 32.7254 48.8634 34.7936 46.1069C32.862 44.7779 30.5219 44 28 44C21.3726 44 16 49.3726 16 56V68C16 70.2091 17.7909 72 20 72H31.5ZM38.294 49.8293C37.1581 51.6123 36.5 53.7293 36.5 56V71.9691C38.4732 71.723 40 70.0398 40 68V56C40 53.7435 39.3772 51.6324 38.294 49.8293Z"
                    fill="white"
                  />
                </svg>
                <span className="top">+ De</span>
                <span className="mid" style={{ fontSize: "80px" }}>
                  4.000
                </span>
                <span className="bottom">Participantes</span>
              </div>
              <div
                className="qualificacoes--card"
                style={{
                  background:
                    "linear-gradient(199.62deg, #0000EA -11.13%, rgba(0, 0, 234, 0.55) 124.61%)",
                }}
              >
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="96"
                    height="96"
                    rx="25"
                    fill="white"
                    fill-opacity="0.15"
                  />
                  <g clip-path="url(#clip0_1061_1955)">
                    <path
                      d="M64.24 16H35.76C35.5393 15.9893 35.3187 16.0221 35.1107 16.0968C34.9028 16.1714 34.7116 16.2863 34.5481 16.4349C34.3846 16.5835 34.2521 16.7629 34.158 16.9629C34.064 17.1628 34.0103 17.3793 34 17.6V30.4C34.0103 30.6207 34.064 30.8372 34.158 31.0371C34.2521 31.2371 34.3846 31.4165 34.5481 31.5651C34.7116 31.7137 34.9028 31.8286 35.1107 31.9033C35.3187 31.9779 35.5393 32.0108 35.76 32H64.24C64.4607 32.0108 64.6813 31.9779 64.8893 31.9033C65.0972 31.8286 65.2884 31.7137 65.4519 31.5651C65.6154 31.4165 65.7479 31.2371 65.842 31.0371C65.9361 30.8372 65.9897 30.6207 66 30.4V17.6C65.9897 17.3793 65.9361 17.1628 65.842 16.9629C65.7479 16.7629 65.6154 16.5835 65.4519 16.4349C65.2884 16.2863 65.0972 16.1714 64.8893 16.0968C64.6813 16.0221 64.4607 15.9893 64.24 16Z"
                      fill="white"
                    />
                    <path
                      d="M74 22H68V32C68 32.5304 67.7893 33.0391 67.4142 33.4142C67.0391 33.7893 66.5304 34 66 34H34C33.4696 34 32.9609 33.7893 32.5858 33.4142C32.2107 33.0391 32 32.5304 32 32V22H26C25.4696 22 24.9609 22.2107 24.5858 22.5858C24.2107 22.9609 24 23.4696 24 24V80C24 80.5304 24.2107 81.0391 24.5858 81.4142C24.9609 81.7893 25.4696 82 26 82H74C74.5304 82 75.0391 81.7893 75.4142 81.4142C75.7893 81.0391 76 80.5304 76 80V24C76 23.4696 75.7893 22.9609 75.4142 22.5858C75.0391 22.2107 74.5304 22 74 22ZM58 70H34C33.4696 70 32.9609 69.7893 32.5858 69.4142C32.2107 69.0391 32 68.5304 32 68C32 67.4696 32.2107 66.9609 32.5858 66.5858C32.9609 66.2107 33.4696 66 34 66H58C58.5304 66 59.0391 66.2107 59.4142 66.5858C59.7893 66.9609 60 67.4696 60 68C60 68.5304 59.7893 69.0391 59.4142 69.4142C59.0391 69.7893 58.5304 70 58 70ZM32 56C32 55.4696 32.2107 54.9609 32.5858 54.5858C32.9609 54.2107 33.4696 54 34 54H54C54.5304 54 55.0391 54.2107 55.4142 54.5858C55.7893 54.9609 56 55.4696 56 56C56 56.5304 55.7893 57.0391 55.4142 57.4142C55.0391 57.7893 54.5304 58 54 58H34C33.4696 58 32.9609 57.7893 32.5858 57.4142C32.2107 57.0391 32 56.5304 32 56ZM66 46H34C33.4696 46 32.9609 45.7893 32.5858 45.4142C32.2107 45.0391 32 44.5304 32 44C32 43.4696 32.2107 42.9609 32.5858 42.5858C32.9609 42.2107 33.4696 42 34 42H66C66.5304 42 67.0391 42.2107 67.4142 42.5858C67.7893 42.9609 68 43.4696 68 44C68 44.5304 67.7893 45.0391 67.4142 45.4142C67.0391 45.7893 66.5304 46 66 46Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1061_1955">
                      <rect
                        width="52"
                        height="66"
                        fill="white"
                        transform="translate(24 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="top">+ De</span>
                <span className="mid" style={{ fontSize: "80px" }}>
                  240h
                </span>
                <span className="bottom">de conteúdo</span>
              </div>
              <div
                className="qualificacoes--card"
                style={{
                  background:
                    "linear-gradient(199.62deg, #EC6907 -11.13%, #E40E20 124.61%)",
                }}
              >
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="96"
                    height="96"
                    rx="25"
                    fill="white"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M16 72.8889C16 74.7749 16.7492 76.5836 18.0828 77.9172C19.4164 79.2508 21.2251 80 23.1111 80H72.8889C74.7749 80 76.5836 79.2508 77.9172 77.9172C79.2508 76.5836 80 74.7749 80 72.8889V23.1111C80 21.2251 79.2508 19.4164 77.9172 18.0828C76.5836 16.7492 74.7749 16 72.8889 16H23.1111C21.2251 16 19.4164 16.7492 18.0828 18.0828C16.7492 19.4164 16 21.2251 16 23.1111V72.8889ZM48 26.6667H69.3333V48H62.2222V33.7778H48V26.6667ZM26.6667 48H33.7778V62.2222H48V69.3333H26.6667V48Z"
                    fill="white"
                  />
                </svg>
                <span className="top">+ De</span>
                <span className="mid">20.000 m²</span>
                <span className="bottom">de espaço</span>
              </div>
              <div
                className="qualificacoes--card"
                style={{
                  background:
                    "linear-gradient(199.62deg, #E40E20 -11.13%, rgba(228, 14, 32, 0.55) 124.61%)",
                }}
              >
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="96"
                    height="96"
                    rx="25"
                    fill="white"
                    fill-opacity="0.15"
                  />
                  <g clip-path="url(#clip0_1061_986)">
                    <path
                      d="M47.735 16C43.5405 16 39.4402 17.2659 35.9527 19.6378C32.4651 22.0096 29.7468 25.3807 28.1417 29.3249C26.5365 33.269 26.1166 37.6091 26.9349 41.7962C27.7532 45.9833 29.773 49.8294 32.7389 52.8482C35.7049 55.8669 39.4837 57.9227 43.5976 58.7556C47.7115 59.5884 51.9756 59.161 55.8508 57.5272C59.726 55.8935 63.0382 53.1269 65.3685 49.5772C67.6989 46.0276 68.9427 41.8543 68.9427 37.5852C68.9427 31.8604 66.7083 26.3701 62.7311 22.3221C58.7539 18.2741 53.3596 16 47.735 16ZM47.735 53.774C44.5892 53.774 41.5139 52.8246 38.8983 51.0457C36.2826 49.2669 34.2439 46.7385 33.04 43.7804C31.8362 40.8222 31.5212 37.5672 32.1349 34.4269C32.7486 31.2865 34.2635 28.402 36.488 26.1379C38.7124 23.8738 41.5465 22.332 44.632 21.7074C47.7174 21.0827 50.9155 21.4033 53.8219 22.6286C56.7283 23.8539 59.2124 25.9289 60.9602 28.5911C62.7079 31.2534 63.6408 34.3833 63.6408 37.5852C63.6314 41.8758 61.9526 45.988 58.9718 49.0219C55.9909 52.0559 51.9506 53.7645 47.735 53.774Z"
                      fill="white"
                    />
                    <path
                      d="M47.7351 51.9753C55.5436 51.9753 61.8736 45.5326 61.8736 37.5852C61.8736 29.6377 55.5436 23.1951 47.7351 23.1951C39.9267 23.1951 33.5967 29.6377 33.5967 37.5852C33.5967 45.5326 39.9267 51.9753 47.7351 51.9753Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.3886 69.4233L27.6582 47.1546C30.1932 52.5454 34.6379 56.7608 40.1 58.9545L26.209 79.1366C26.049 79.3761 25.8325 79.5708 25.5792 79.7028C25.326 79.8349 25.0442 79.8999 24.7598 79.8921H24.1942C23.8347 79.7572 23.5256 79.5113 23.3101 79.1887C23.0946 78.8662 22.9836 78.4832 22.9925 78.0933L23.2045 70.9702C23.2166 70.661 23.1516 70.3538 23.0157 70.077C22.8797 69.8003 22.6772 69.563 22.4269 69.3873C22.1641 69.2514 21.8734 69.1806 21.5786 69.1806C21.2838 69.1806 20.9932 69.2514 20.7303 69.3873L14.4741 72.1214C14.1193 72.2757 13.7252 72.31 13.3498 72.2193C12.9744 72.1286 12.6375 71.9178 12.3886 71.6178C12.1666 71.2965 12.0474 70.9133 12.0474 70.5205C12.0474 70.1277 12.1666 69.7445 12.3886 69.4233ZM68.3769 47.1546L83.6817 69.4233C83.9678 69.7684 84.1187 70.2088 84.1057 70.6602C84.0926 71.1115 83.9165 71.5421 83.611 71.8696C83.3714 72.1715 83.0407 72.3845 82.67 72.4756C82.2993 72.5667 81.9095 72.5307 81.561 72.3732L75.3047 69.6391C75.0349 69.5055 74.7388 69.4361 74.4387 69.4361C74.1387 69.4361 73.8425 69.5055 73.5727 69.6391C73.3336 69.8232 73.1413 70.0631 73.0122 70.3385C72.883 70.614 72.8207 70.917 72.8305 71.222L73.2193 78.1653C73.2282 78.5552 73.1171 78.9382 72.9017 79.2607C72.6862 79.5832 72.3771 79.8291 72.0175 79.964H71.452C71.1675 79.9719 70.8858 79.9068 70.6325 79.7748C70.3793 79.6428 70.1627 79.448 70.0028 79.2085L56.1118 59.0264C61.52 56.7775 65.8986 52.5393 68.3769 47.1546Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1061_986">
                      <rect
                        width="72"
                        height="64"
                        fill="white"
                        transform="translate(12 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="top">As maiores</span>
                <span className="mid">Empresas</span>
                <span className="bottom">de setor</span>
              </div>
            </div>
          </div>
        </Section>
        <Section img="./speakersconfirmados.png">
          <div className="speakers-confirmados">
            <div className="speakers">
              <div className="speaker">
                <div className="image">
                  <img src="./mockphoto.jpg" />
                </div>
                <h3>Nome</h3>
                <span>TÍTULO</span>
              </div>
              <div className="speaker">
                <div className="image">
                  <img src="./mockphoto.jpg" />
                </div>
                <h3>Nome</h3>
                <span>TÍTULO</span>
              </div>
              <div className="speaker">
                <div className="image">
                  <img src="./mockphoto.jpg" />
                </div>
                <h3>Nome</h3>
                <span>TÍTULO</span>
              </div>
              <div className="left btn">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="34.9999"
                    r="35"
                    fill="url(#paint0_linear_1061_100)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1061_100"
                      x1="70"
                      y1="59.8888"
                      x2="-2.18604"
                      y2="55.7173"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0000EA" />
                      <stop offset="0.348958" stop-color="#501B8E" />
                      <stop offset="0.822917" stop-color="#E40E20" />
                      <stop offset="0.963542" stop-color="#EC6907" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.125 8.99993C27.125 8.75129 27.0262 8.51284 26.8504 8.33702C26.6746 8.16121 26.4361 8.06243 26.1875 8.06243H4.07562L9.97625 2.16368C10.1523 1.98765 10.2512 1.74889 10.2512 1.49993C10.2512 1.25098 10.1523 1.01222 9.97625 0.836183C9.80021 0.660145 9.56145 0.561249 9.3125 0.561249C9.06355 0.561249 8.82479 0.660145 8.64875 0.836183L1.14875 8.33618C1.06144 8.42327 0.992176 8.52672 0.944914 8.64062C0.897652 8.75452 0.873325 8.87662 0.873325 8.99993C0.873325 9.12325 0.897652 9.24535 0.944914 9.35925C0.992176 9.47314 1.06144 9.5766 1.14875 9.66368L8.64875 17.1637C8.82479 17.3397 9.06355 17.4386 9.3125 17.4386C9.56145 17.4386 9.80021 17.3397 9.97625 17.1637C10.1523 16.9876 10.2512 16.7489 10.2512 16.4999C10.2512 16.251 10.1523 16.0122 9.97625 15.8362L4.07562 9.93743H26.1875C26.4361 9.93743 26.6746 9.83866 26.8504 9.66285C27.0262 9.48703 27.125 9.24857 27.125 8.99993Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right btn">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="34.9999"
                    r="35"
                    fill="url(#paint0_linear_1061_100)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1061_100"
                      x1="70"
                      y1="59.8888"
                      x2="-2.18604"
                      y2="55.7173"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0000EA" />
                      <stop offset="0.348958" stop-color="#501B8E" />
                      <stop offset="0.822917" stop-color="#E40E20" />
                      <stop offset="0.963542" stop-color="#EC6907" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.875 8.99993C0.875 8.75129 0.973772 8.51284 1.14959 8.33702C1.3254 8.16121 1.56386 8.06243 1.8125 8.06243H23.9244L18.0238 2.16368C17.8477 1.98765 17.7488 1.74889 17.7488 1.49993C17.7488 1.25098 17.8477 1.01222 18.0238 0.836183C18.1998 0.660145 18.4385 0.561249 18.6875 0.561249C18.9365 0.561249 19.1752 0.660145 19.3512 0.836183L26.8512 8.33618C26.9386 8.42327 27.0078 8.52672 27.0551 8.64062C27.1023 8.75452 27.1267 8.87662 27.1267 8.99993C27.1267 9.12325 27.1023 9.24535 27.0551 9.35925C27.0078 9.47314 26.9386 9.5766 26.8512 9.66368L19.3512 17.1637C19.1752 17.3397 18.9365 17.4386 18.6875 17.4386C18.4385 17.4386 18.1998 17.3397 18.0238 17.1637C17.8477 16.9876 17.7488 16.7489 17.7488 16.4999C17.7488 16.251 17.8477 16.0122 18.0238 15.8362L23.9244 9.93743H1.8125C1.56386 9.93743 1.3254 9.83866 1.14959 9.66285C0.973772 9.48703 0.875 9.24857 0.875 8.99993Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Section>
        <Section
          img="./programacao.png"
          text="Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Arcu
                posuere fermentum netus quam. Lorem Ipsum."
        >
          <div className="programacaocientifica">
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
                    <p>Trend Show</p>
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
        <Section
          img="./programacao.png"
          text="Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Arcu
                posuere fermentum netus quam. Lorem Ipsum."
        >
          <div className="perguntas-frequentes">
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
        <Section img="./patrocinadores.png">
          <div className="patrocinadores">
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
        </Section>
        <Section img="./apoiadores.png">
          <div className="patrocinadores">
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <div className="patrocinador">
              <svg
                width="147"
                height="27"
                viewBox="0 0 147 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
        </Section>
        <Section>
          <div className="comochegar">
            <Section img="./comochegar.png">
              <div className="wrapper">
                <div className="endereço-hospedagem">
                  <h2>Endereço:</h2>
                  <p>Transamerica Expo Center</p>
                  <p>
                    Avenida Dr. Mário Vilas Boas Rodrigues, 387 Santo Amaro -
                    Sao Paulo, SP
                  </p>
                  <hr />
                  <h2>Hospedagem</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien quis fermentum ac, et. Senectus semper vulputate at
                    justo eget gravida imperdiet.
                  </p>
                  <span>Lorem ipsum dolor</span>
                </div>
                <div className="map"></div>
              </div>
            </Section>
          </div>
        </Section>
        <div className="footer">
          <div className="bottom-menu">
            <div className="menu">
              <div className="logo">
                <Logo />
              </div>
              <ul>
                <li>Contato</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </div>
            <div className="newsletter-siga">
              <div className="newsletter">
                <h3>Newsletter</h3>
                <div className="input-wrapper">
                  <input type="text" placeholder="Endereço de e-mail" />
                  <div className="button">Assinar</div>
                </div>
              </div>
              <div className="siga">
                <h3>Siga-nos</h3>
                <ul>
                  <l1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </l1>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer>
            <span>© 2022 VMCOM. Todos os direitos reservados.</span>
            <ul>
              <li>
                <svg
                  width="147"
                  height="27"
                  viewBox="0 0 147 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                    fill="#AFAFAF"
                  />
                </svg>
              </li>
              <li>
                <svg
                  width="147"
                  height="27"
                  viewBox="0 0 147 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                    fill="#AFAFAF"
                  />
                </svg>
              </li>
              <li>
                <svg
                  width="147"
                  height="27"
                  viewBox="0 0 147 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.2769 22.6769C29.2769 25.1199 28.4269 26.1189 26.1119 26.1189H5.56988C3.25388 26.1189 2.40488 25.1189 2.40488 22.6769V17.9199C2.40488 15.6259 1.29988 14.3299 0.237884 13.7359C0.164822 13.6916 0.104413 13.6293 0.0624869 13.5548C0.0205612 13.4804 -0.00146484 13.3964 -0.00146484 13.3109C-0.00146484 13.2255 0.0205612 13.1415 0.0624869 13.0671C0.104413 12.9926 0.164822 12.9302 0.237884 12.8859C1.34288 12.1849 2.40488 10.7189 2.40488 8.76494V4.08994C2.40488 1.45594 3.12688 0.689941 5.44188 0.689941H26.2399C28.5559 0.689941 29.2779 1.45594 29.2779 4.08994V8.76294C29.2779 10.7169 30.3399 12.1829 31.4439 12.8829C31.7639 13.0959 31.7639 13.5429 31.4439 13.7329C30.3819 14.3489 29.2779 15.6449 29.2779 17.9179V22.6759H29.2769V22.6769ZM9.81888 19.5549C11.4969 21.0199 13.3029 21.7639 15.7889 21.7639C19.6969 21.7639 22.2459 19.8099 22.2459 16.6439C22.2459 13.2919 19.2099 12.4369 16.7409 11.7419C15.0479 11.2649 13.6209 10.8619 13.6209 9.78194C13.6209 9.08194 14.3649 8.40194 15.6179 8.40194C16.8279 8.40194 17.8279 8.65794 18.7829 9.14594C19.1019 9.29494 19.3989 9.40094 19.6749 9.40094C20.0789 9.40094 20.3979 9.20994 20.6739 8.82794L21.0559 8.25394C21.2049 8.04194 21.2689 7.80794 21.2689 7.55394C21.2689 7.12794 21.0559 6.70394 20.7379 6.49094C19.4629 5.68394 17.7419 5.00394 15.4059 5.00394C12.0919 5.00394 9.54288 6.74594 9.54288 9.86794C9.54288 13.3579 12.6449 14.2449 15.1289 14.9529C16.7859 15.4259 18.1669 15.8199 18.1669 16.8569C18.1669 17.8549 17.2329 18.3439 16.0639 18.3439C14.6602 18.3573 13.2846 17.9505 12.1139 17.1759C11.7519 16.9419 11.4119 16.7929 11.0509 16.7929C10.7309 16.7929 10.4559 16.9419 10.2009 17.2609L9.69088 17.9189C9.50089 18.1319 9.43688 18.4079 9.43688 18.6629C9.43688 18.9809 9.54288 19.2999 9.81888 19.5549ZM41.5549 17.5999C41.2789 17.5999 41.0449 17.7069 40.8329 17.9829L40.4079 18.5779C40.2379 18.7679 40.1949 19.0019 40.1949 19.2149C40.1949 19.4909 40.3009 19.7669 40.5349 19.9799C41.9369 21.1899 43.4669 21.8279 45.5699 21.8279C48.8619 21.8279 51.0289 20.1709 51.0289 17.5149C51.0289 14.6909 48.4609 13.9699 46.3749 13.3839C44.9449 12.9819 43.7429 12.6439 43.7429 11.7379C43.7429 11.1219 44.3799 10.5679 45.4209 10.5679C46.3443 10.565 47.2549 10.7842 48.0759 11.2069L48.1399 11.2309C48.3919 11.3289 48.6249 11.4189 48.8399 11.4189C49.1599 11.4189 49.4359 11.2689 49.6699 10.9289L50.0099 10.4419C50.1246 10.2572 50.1837 10.0434 50.1799 9.82594C50.1799 9.46494 50.0099 9.10394 49.7329 8.93394C48.6499 8.21094 47.2049 7.65894 45.2299 7.65894C42.4469 7.65894 40.2799 9.14594 40.2799 11.7789C40.2799 14.7069 42.8949 15.4539 44.9919 16.0519C46.3949 16.4519 47.5659 16.7869 47.5659 17.6639C47.5659 18.5339 46.7799 18.9389 45.7819 18.9389C44.4859 18.9389 43.4019 18.5779 42.4469 17.9389C42.1709 17.7279 41.8309 17.5989 41.5549 17.5989V17.5999ZM61.8409 19.8949C61.844 19.7136 61.7917 19.5357 61.6909 19.3849L61.4159 18.9389C61.1609 18.4929 60.8639 18.3229 60.4809 18.3229C60.2909 18.3229 60.0779 18.3649 59.8009 18.4709C59.5259 18.5779 59.2069 18.6199 58.8459 18.6199C57.7199 18.6199 57.2309 17.6429 57.2309 16.1769V11.2499H60.4809C61.0969 11.2499 61.6069 10.7399 61.6069 10.1239V9.10394C61.6069 8.48894 61.0969 7.97894 60.4809 7.97894H57.2309V5.34494C57.2309 4.72894 56.7209 4.21894 56.1059 4.21894H54.8949C54.2789 4.21894 53.7689 4.72894 53.7689 5.34494V16.3049C53.7689 19.7679 54.9159 21.7439 57.9539 21.7439C59.2919 21.7439 60.3119 21.4679 61.3309 20.8509C61.6709 20.6809 61.8409 20.2779 61.8409 19.8959V19.8949ZM68.7229 13.1399C65.9829 13.1399 63.7949 14.5419 63.7949 17.5149C63.7949 20.1279 65.5579 21.6579 67.9589 21.6789C69.7849 21.6789 71.2289 20.9779 71.9519 19.9589V20.4039C71.9519 21.0199 72.4619 21.5299 73.0779 21.5299H73.8639C74.4799 21.5299 74.9899 21.0199 74.9899 20.4039V13.3099C74.9899 9.74194 73.6089 7.70294 69.6159 7.70294C68.2349 7.70294 66.8959 8.06294 65.7279 8.59494C65.3679 8.76494 65.0909 9.16794 65.0909 9.55094C65.096 9.67334 65.1238 9.79372 65.1729 9.90594C65.1889 9.95094 65.2059 9.99594 65.2179 10.0389L65.3879 10.3989C65.6009 10.8249 65.9619 11.0379 66.4079 11.0379C66.5419 11.0379 66.6879 10.9979 66.8279 10.9599L66.9379 10.9299C67.5759 10.7189 68.2349 10.5699 69.2539 10.5699C71.1239 10.5699 71.7609 11.6319 71.7609 13.6079V14.0119C71.1009 13.5219 69.9129 13.1409 68.7229 13.1409V13.1399ZM69.4029 15.4549C70.3799 15.4549 71.1449 15.6669 71.7609 16.1139H71.7809V17.5139C71.3569 18.0889 70.6139 18.7259 69.1689 18.7259C68.0649 18.7259 67.2359 18.1529 67.2359 17.1329C67.2359 15.9859 68.2559 15.4549 69.4029 15.4549ZM86.3119 19.8949C86.315 19.7136 86.2627 19.5357 86.1619 19.3849L85.8869 18.9389C85.6319 18.4929 85.3349 18.3229 84.9519 18.3229C84.7619 18.3229 84.5489 18.3649 84.2719 18.4709C83.9959 18.5779 83.6779 18.6199 83.3169 18.6199C82.1909 18.6199 81.7019 17.6429 81.7019 16.1769V11.2499H84.9519C85.5679 11.2499 86.0779 10.7399 86.0779 10.1239V9.10394C86.0779 8.48894 85.5679 7.97894 84.9519 7.97894H81.7019V5.34494C81.7019 4.72894 81.1919 4.21894 80.5759 4.21894H79.3659C78.7499 4.21894 78.2399 4.72894 78.2399 5.34494V16.3049C78.2399 19.7679 79.3869 21.7439 82.4239 21.7439C83.7629 21.7439 84.7819 21.4679 85.8019 20.8509C86.1419 20.6809 86.3119 20.2779 86.3119 19.8959V19.8949ZM93.1939 13.1399C90.4539 13.1399 88.2659 14.5419 88.2659 17.5149C88.2659 20.1279 90.0499 21.6579 92.4289 21.6789C94.2559 21.6789 95.7009 20.9779 96.4229 19.9589V20.4039C96.4229 21.0199 96.9329 21.5299 97.5489 21.5299H98.3349C98.9509 21.5299 99.4609 21.0199 99.4609 20.4039V13.3099C99.4609 9.74194 98.0799 7.70294 94.0859 7.70294C92.7059 7.70294 91.3659 8.06294 90.1989 8.59494C89.8379 8.76494 89.5619 9.16794 89.5619 9.55094C89.567 9.67334 89.5948 9.79372 89.6439 9.90594C89.6599 9.95094 89.6769 9.99594 89.6889 10.0389L89.8589 10.3989C90.0719 10.8249 90.4329 11.0379 90.8789 11.0379C91.0129 11.0379 91.1589 10.9979 91.2989 10.9599L91.4089 10.9299C92.0469 10.7189 92.7059 10.5699 93.7249 10.5699C95.5949 10.5699 96.2319 11.6319 96.2319 13.6079V14.0119C95.5719 13.5219 94.3839 13.1409 93.1939 13.1409V13.1399ZM93.8739 15.4549C94.8509 15.4549 95.6159 15.6669 96.2319 16.1139H96.2519V17.5139C95.8279 18.0889 95.0849 18.7259 93.6399 18.7259C92.5359 18.7259 91.7069 18.1529 91.7069 17.1329C91.7069 15.9859 92.7269 15.4549 93.8739 15.4549ZM110.676 7.74494C109.019 7.74494 107.426 8.40294 106.47 9.46494H106.407V9.08194C106.407 8.46594 105.897 7.95594 105.281 7.95594H104.07C103.454 7.95594 102.944 8.46594 102.944 9.08194V20.3619C102.944 20.9779 103.454 21.4879 104.07 21.4879H105.281C105.897 21.4879 106.407 20.9779 106.407 20.3619V12.4169C107.023 11.5039 108.021 10.9729 109.232 10.9729C110.676 10.9729 111.462 11.8859 111.462 13.3099V20.3199C111.462 20.9349 111.972 21.4449 112.588 21.4449H113.799C114.415 21.4449 114.925 20.9349 114.925 20.3189V13.4999C114.925 13.3239 114.918 13.1039 114.913 12.9059C114.908 12.7439 114.903 12.5959 114.903 12.5009C115.371 11.5879 116.39 10.9509 117.686 10.9509C119.322 10.9509 120.002 11.8639 120.002 13.5409V20.3609C120.002 20.9769 120.511 21.4869 121.127 21.4869H122.338C122.954 21.4869 123.464 20.9769 123.464 20.3609V12.6709C123.464 8.95394 121.616 7.74294 119.152 7.74294C117.07 7.74294 115.562 8.63494 114.606 9.90994C114.118 8.67794 112.737 7.74294 110.676 7.74294V7.74494ZM129.284 5.27994C130.261 5.27994 131.26 4.49394 131.26 3.11294C131.26 1.90294 130.261 1.11694 129.284 1.11694C128.116 1.11694 127.118 1.90294 127.118 3.11294C127.118 4.49294 128.116 5.27994 129.284 5.27994ZM130.941 9.10394C130.941 8.48794 130.431 7.97794 129.815 7.97794V7.95594H128.605C127.989 7.95594 127.479 8.46594 127.479 9.08194V20.3619C127.479 20.9779 127.989 21.4879 128.605 21.4879H129.815C130.431 21.4879 130.941 20.9779 130.941 20.3619V9.10394ZM141.881 10.8879C142.752 10.8879 143.453 11.0369 144.26 11.4179C144.403 11.4979 144.558 11.5299 144.698 11.5579L144.833 11.5879C145.237 11.5879 145.619 11.3339 145.853 10.9519L146.299 10.1659C146.405 10.0159 146.427 9.84594 146.427 9.67594C146.427 9.29494 146.235 8.84894 145.896 8.67894C144.579 7.95594 143.262 7.65894 141.456 7.65894C137.335 7.65894 134.467 10.8029 134.467 14.7329C134.467 18.9809 137.42 21.8059 141.881 21.8059C143.559 21.8059 144.982 21.5089 146.597 20.2129C146.851 20.0219 147 19.6179 147 19.2569C147 19.0239 146.936 18.7899 146.788 18.6409L146.278 18.0039C146.165 17.8645 146.023 17.7521 145.861 17.6749C145.699 17.5978 145.522 17.5578 145.343 17.5579C145.11 17.5579 144.855 17.6429 144.621 17.7919C143.835 18.3019 143.07 18.5779 142.008 18.5779C139.969 18.5779 138.121 17.0909 138.121 14.7119C138.121 12.3539 139.948 10.8879 141.881 10.8879Z"
                    fill="#AFAFAF"
                  />
                </svg>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
