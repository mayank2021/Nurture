import React ,{useState} from 'react';
import './style.css';
import Logo from '../../media/brain.png';

const Login = ({setSubmit}) => {
   
    const [userData, setUserData] = useState({
        name: '',
        city: ''
    })

  const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData({name:'',city:''});
      setSubmit(true);
      localStorage.setItem("submit", JSON.stringify(true));
    }

    const modifyName = (name) => {
      let first = name.slice(0,1).toUpperCase();
      let last = name.slice(1).toLowerCase();
      let modifyName = first+last;
      return modifyName;
      
    }

    return (
        <div className="login-container">           
            <form onSubmit={handleSubmit} className="child-container">
            <div className="logo--container">
               <img className="logo" src={Logo} alt="logo"/>
            </div>
            <h1 className="logo--name">Nurture</h1>
            <p className="logo--tagline">Nurture your mind with great thoughts.</p>
              <div className="form_group">
                  <input
                    type="text"
                    className="form__input"
                    autoComplete="off"
                    placeholder="First Name"
                    id="name"
                    required
                    value={userData.name}
                    onChange={(e) =>
                        setUserData({ ...userData, name: modifyName(e.target.value) })
                      }
                  />
                  <label htmlFor="name" className="form__label">
                    First Name
                  </label>
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    className="form__input"
                    autoComplete="off"
                    placeholder="City"
                    id="name"
                    required
                    value={userData.city}
                    onChange={(e) =>
                        setUserData({ ...userData, city: e.target.value })
                      }
                  />
                  <label htmlFor="name" className="form__label">
                    City
                  </label>
                </div>
         
            <div className="form_group btn">
                  <button
                    type="submit"
                    className="form_button"
                  >
                    Log In
                    <img
                      style={{ width: "20%", marginLeft: "10px" }}
                      src="https://media.giphy.com/media/ggiIT76o0nKxBq671w/giphy.gif"
                      alt="click"
                    ></img>
                  </button>
                </div>
                <p className="logo--tagline last-tagline">To believe in the heroic makes heroes.</p>
            </form>   
            <p className="copyright">	&#169; Mayank Sonkar 2021</p>
        </div>
    )
}

export default Login;
//Nurture your mind with great thoughts. To believe in the heroic makes heroes.