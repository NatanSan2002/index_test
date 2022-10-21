import "./App.scss";

import Section from "./components/Section";
import Title from "./components/Title";

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
            <div className="home"></div>
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

        <Section className="center">
          <img src="./futuro.png" width="auto" height="auto" />
          <div className="video">
            <video src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/l/la/the-last-of-us-part-i/videos/the-last-of-us-part-1-frame-compare-ellie-en-08jun22.mp4"></video>
          </div>
        </Section>

        <Section className="center">
          <div className="about-wrapper center">
            <img src="./sobre23.png" width="auto" height="auto" />
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
            <div className="como-chegar">VEJA COMO CHEGAR</div>
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
        <Section>
          <div className="comosera">
            <img
              src="./comosera.png"
              className="left"
              width="30%"
              height="30%"
            />
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
        <Section>
          <div className="speakers-confirmados">
            <img
              src="./speakersconfirmados.png"
              className="left"
              width="40%"
              height="40%"
            />
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
      </div>
    </div>
  );
}

export default App;
