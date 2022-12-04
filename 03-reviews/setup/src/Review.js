import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  //dinamicki destructuring objekta iz arraya -prema indexu
  /* ako je number veci od broja elem. u arrayu 
vrati na pocetak 0
ako je manji od 0 idi na kraj arraya
ili vrati number
*/
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  /* Math.random 0,01 do 0,99 puta duzina arraya(npr 4) je 0.04 do 3.99  */
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
  };
  setIndex(checkNumber(randomNumber));
};
return (
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job} </p>
    <p className="info">{text} </p>
    <div className="button-container">
      <button onClick={prevPerson} className="prev-btn">
        <FaChevronLeft />
      </button>
      <button onClick={nextPerson} className="next-btn">
        <FaChevronRight />
      </button>
      <button onClick={randomPerson} className="random-btn">
        suprise me
      </button>
    </div>
  </article>
);
export default Review;
