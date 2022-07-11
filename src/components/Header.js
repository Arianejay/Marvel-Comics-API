import {useState} from 'react'
import {GiSpiderMask} from "react-icons/gi"
import {FaSearch} from "react-icons/fa"
import {useNavigate, Link} from "react-router-dom"

const Header = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/heroinfo/" + input)
    setInput("")
  }
  const handleClick = (e) => {
    navigate("/heroinfo/" + input)
    setInput("")
  }


  return (
    <div className='header__wrapper'>
        <div className="header"></div>
        <div className="nav__wrapper">
            <Link to="/" className="nav__logo">
                <GiSpiderMask />
                <h1>Marvel Comics</h1>
            </Link>
            <div className="nav__search">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder='Search'
                        autoComplete='off'
                        value={input}  
                        onChange={e => setInput(e.target.value)}  
                     />
                      <i onClick={handleClick}><FaSearch /> </i>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Header