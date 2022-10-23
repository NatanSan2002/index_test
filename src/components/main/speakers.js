import "./speakers.scss"
import Section from "../Section";

function Speakers() {

return (
<article>
<Section img="./speakersconfirmados.png" alt="texto: Speakers Confirmados">
          <div id="speakers" className="speakers-confirmados">
            <div className="speakers">
              <div className="speaker">
                <div className="image">
                  <img src="./speaker1.png" alt="Speaker (1)"/>
                </div>
                <h3>Nome</h3>
                <span>TÍTULO</span>
              </div>
              <div className="speaker">
                <div className="image">
                  <img src="./speaker2.png" alt="Speaker (2)" />
                </div>
                <h3>Nome</h3>
                <span>TÍTULO</span>
              </div>
              <div className="speaker">
                <div className="image">
                  <img src="./speaker3.png" alt="Speaker (3)" />
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
        </article>

              )}
export default Speakers;



