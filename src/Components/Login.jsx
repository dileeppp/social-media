import React,{useState} from 'react'
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";
import Home from './Home'


function Child() {
    const navgate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    const handleSubmit = () => {
      if (!email && !password) {
        setEmailError(true);
        setPasswordError(true);
      } else if (!email) {
        setEmailError(true);
      } else if (!password) {
        setPasswordError(true);
      } else {
        setEmailError(false);
        setPasswordError(false);
        console.log({ email, password });
      }
    };
  
    const handleShow = () => {
      setShowPassword(!showpassword)
    }
  return (
    <div className="App">
    <div className="container">
      <label className="email">Email: </label>
      <input
        className="inp"
        type="text"
        placeholder="email"
        value={email}
        style={{ borderColor: emailError ? "red" : "black" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="lamd">passwd:</label>
      <input
        className="passwd"
        type={showpassword ? "text" : "password"}
        placeholder="password"
        value={password}
        style={{ borderColor: passwordError ? "red" : "black" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input type="checkBox" onClick={handleShow}/> Show Password
      </label>
      <span id="login">login</span>
      <button data-tip data-for="loginTip" onClick={()=>navgate('/')}>
        Login
      </button>
    </div>

    <ReactTooltip id="loginTip" place="right,bottom" effect="solid">
      Login
    </ReactTooltip>
  </div>
  )
}

export default Child
