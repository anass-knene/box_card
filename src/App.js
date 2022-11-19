import React from "react";
import "./app.scss";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [isMissiVideoOpen, setIsMissiVideoOpen] = useState(false);
  const [isRonaldoVideoOpen, setIsRonaldoVideoOpen] = useState(false);
  const [isZlatanVideoOpen, setIsZlatanVideoOpen] = useState(false);

  return (
    <div className="App">
      {!isRonaldoVideoOpen && !isZlatanVideoOpen && (
        <div className="first Card animate__animated animate__zoomIn">
          <div className="messi">
            <h3>Lionel Andrés Messi</h3>
            <p>
              is an Argentine professional footballer who plays as a forward for
              Ligue 1 club Paris Saint-Germain and captains the Argentina
              national team
            </p>
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi1tOvWvbL7AhU08rsIHXUFDMsQmhN6BAgyEAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLionel_Messi&usg=AOvVaw2_WUn7Mhn-IWt-jVcMAtrE"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
            <p
              className="magic"
              onClick={() => setIsMissiVideoOpen(!isMissiVideoOpen)}
            >
              Messi Magic Moment Video
            </p>
          </div>
        </div>
      )}
      <div
        className={
          isMissiVideoOpen
            ? "animate__animated animate__backInLeft "
            : " d-none"
        }
      >
        <iframe
          width="800px"
          height="400px"
          src="https://www.youtube.com/embed/QE7MAyHTNSY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {!isMissiVideoOpen && !isZlatanVideoOpen && (
        <>
          <div className=" second Card animate__animated animate__zoomIn">
            <div className="ronaldo">
              <h3>Cristiano Ronaldo</h3>
              <p>
                dos Santos Aveiro GOIH ComM <br /> is a Portuguese professional
                footballer who plays as a forward for Premier League club
                Manchester United and captains the Portugal national team
              </p>
              <a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjqyJDWqLP7AhXmi_0HHaRmDLEQmhN6BAhAEAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCristiano_Ronaldo&usg=AOvVaw33DUFwCARIVMPzCQghC7jj"
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>
              <p
                className="magic"
                onClick={() => setIsRonaldoVideoOpen(!isRonaldoVideoOpen)}
              >
                Cristiano Ronaldo Moments of Magic
              </p>
            </div>
          </div>
          <div
            className={
              isRonaldoVideoOpen
                ? "animate__animated animate__backInLeft "
                : " d-none"
            }
          >
            <iframe
              width="800"
              height="400"
              src="https://www.youtube.com/embed/toxp8YHn3GY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
      {!isRonaldoVideoOpen && !isMissiVideoOpen && (
        <>
          <div
            className={
              isZlatanVideoOpen
                ? "zlatanVideo third Card "
                : "third Card animate__animated animate__zoomIn"
            }
          >
            <div className="zlatan">
              <h3>Zlatan Ibrahimović</h3>
              <p>
                is a Swedish professional footballer who plays as a striker for
                Serie A club AC Milan and the Sweden national team. Ibrahimović
                is renowned for his acrobatic strikes and volleys, powerful
                long-range shots, and excellent technique and ball control
              </p>
              <a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj-ku2guLX7AhXlQvEDHatPATsQmhN6BAg9EAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FZlatan_Ibrahimovi%25C4%2587&usg=AOvVaw2aEi4kx1ya9zYmhtjUOUYk"
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>
              <p onClick={() => setIsZlatanVideoOpen(!isZlatanVideoOpen)}>
                Zlatan Ibrahimovic - Top 10 Goals Ever
              </p>
            </div>
          </div>
          <div
            className={
              isZlatanVideoOpen
                ? "animate__animated animate__backInLeft "
                : " d-none"
            }
          >
            <iframe
              width="800"
              height="400"
              src="https://www.youtube.com/embed/OfS5MI_3_WE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
