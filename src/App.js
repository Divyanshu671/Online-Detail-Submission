import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <form action="" id="survey-form">
        <h1 id="title">Survey Form</h1>
        <p id="description">This survey form developed for simple practice problem in Web development domain.
          
        </p>
        <label for="name" id="name-label">
          Name
          <input type="text" name="name" id="name" placeholder="Enter your name"/>
        </label>
        <label for="email" id="email-label">
          Email
          <input type="email" name="email" pattern="[a-z0-9]" id="email" placeholder="Enter your email"/>
        </label>
        <label for="number" id="number-label">
          Number
          <input type="number" name="number" id="number" min="1000000000" max="9999999999" placeholder="Enter your phone umber"/>
        </label>
        <select name="dropdown" id="dropdown">
          <option value="">Select Country</option>
          <option value="1">India</option>
          <option value="2">America</option>
        </select>
        <fieldset>
          <p>Choose language</p>
          <label for="english" >
            <input className="ds" type="radio" name="language"/> English
          </label>
          <label for="hindi">
            <input className="ds" type="radio" name="language"/> Hindi
          </label>
        </fieldset>
        <fieldset>
          <p>Select hobbies</p>
          <label for="Reading">
            <input className="ds" type="checkbox" name="hobbie" value="Reading"/>Reading
          </label>
          <label for="Walking">
            <input className="ds" type="checkbox" name="hobbie" value="Walking"/>Walking
          </label>
          <label for="Playing">
            <input className="ds" type="checkbox" name="hobbie" value="Playing"/>Playing
          </label>
        </fieldset>
        <textarea name="textarea" cols="30" rows="10">Enter your comments here...</textarea>
        <button id="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
