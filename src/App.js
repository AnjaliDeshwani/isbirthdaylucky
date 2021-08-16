import { useState } from "react";
import "./App.css";

function App() {
  const [birthdayDate, setBirthdayDate] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [message, setMessage] = useState("");
  var dateString;

  function birthdayDateHandler(e) {
    setBirthdayDate(e.target.value);
  }

  function luckyNumberHandler(e) {
    setLuckyNumber(e.target.value);
  }

  function checkLucky() {
    console.log("birthdayDate" + birthdayDate);
    dateString = birthdayDate.toString().split("-");
    console.log("dateString" + dateString);
    // dateString=dateString.toString().split(',').join('');
    dateString = dateString.toString().replace(/\,/g, "");
    console.log("dateString" + dateString);

    var dateInt = Number(dateString);
    console.log("dateInt" + dateInt);

    var number = dateString,
      sum = 0;
    while (number !== 0) {
      sum += number % 10;
      number = parseInt(number / 10);
    }

    if (sum % luckyNumber == 0) {
      setMessage("You are lucky!Congratulations!");
    } else {
      setMessage("Sorry...Your birthdate is not lucky!");
    }
  }

  return (
    <div className="App">
      <section className="main-section">
        <h1>is your birthday lucky?</h1>
        <h5>To know please enter your birthdate and luckyNumber</h5>
        <div className="alert">
          Privacy Notice! We are not storing your data
        </div>

        <div className="bday-div">
          <div>
            <label>Enter date</label>
            <input type="date" onChange={birthdayDateHandler} />
          </div>

          <div>
            <label>Enter your lucky Number</label>
            <input type="number" onChange={luckyNumberHandler} />
          </div>

          <button onClick={checkLucky}>Click to check</button>
          <h3>{message}</h3>
        </div>
      </section>
      <footer class="footer">
        <div class="footer-header">Connect with me on</div>
        <ul class="list-non-bullet">
          <li class="list-item-inline">
            <a class="link" href="https://github.com/AnjaliDeshwani">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/anjali_deshwani">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-item-inline">
            <a
              class="link"
              href="https://www.linkedin.com/in/anjali-deshwani-08a9b6140"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <p class="copyright">
          Copyright © <span class="copyright-date">2021</span> Anjali Deshwani.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
