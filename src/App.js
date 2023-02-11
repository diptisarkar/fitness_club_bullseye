import "./App.css";
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    Phone: "",
    email: "",
    Address: "",
  });

  const [show, setShow] = React.useState(false);

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function prompt() {
    console.log(2);
  }

  function members() {
    setShow((item) => !item);
  }

  return (


  

    <div class="form-style-6">
      <h1>Fitness Club Registration</h1>
      <form>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="number"
          name="Phone"
          onChange={handleChange}
          placeholder="Phone number"
        />
        <textarea
          name="Address"
          onChange={handleChange}
          placeholder="Address"
        ></textarea>
        {/* <input type="submit" value="Send" /> */}
        <button className="btn" onClick={prompt}>
          Add Member
        </button>
        <button className="btn" onClick={members}>
          View Member List
        </button>
      </form>

      <div className={show ? "visible" : "hidden"}>
        <p>{`Name:${formData.firstName}`}</p>
        <p>{`Email:${formData.email}`}</p>
        <p>{`Phone Number:${formData.Phone}`}</p>
        <p>{`Address:${formData.Address}`}</p>{" "}
      </div>
    </div>
  );
}

export default App;


