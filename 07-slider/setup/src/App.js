import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //index poslednjeg
    const lastIndex = people.length - 1;
    //za unazad ispod prvog idi na zadnji
    if (index < 0) {
      setIndex(lastIndex);
    }
    //za dalje od poslednjeg vrati na prvi
    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index, people]);
  //useEffect for auto selecting , nakon svake 3 sekunde pomjera index za +1
  /* posto se auto slider setIndex() sudaraju sa manuelnim setIndex(),
  postavlja se clean-up na 'slider'  */
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider); //clean-up
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //nextSlide - u desno od centar pozicije 'activeSlide'
          let position = "nextSlide"; //poč pozicija za sve 'person-e'
          /* za trenutni objekat pozicija je na sredini 'activeSlide'*/
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title"> {title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
