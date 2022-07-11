import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  const [hero, setHero] = useState({})
  const [hero2, setHero2] = useState({})
  const [hero3, setHero3] = useState({})
  const [hero4, setHero4] = useState({})

  useEffect(() => {
    getHero();
    getHero2();
    getHero3();
    getHero4();
  }, [])

  const getHero = async() => {
    const api = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&name=captain%20america`);
    const data = await api.json()
    setHero(data.data.results[0].thumbnail)
  }

  const getHero2 = async() => {
    const api = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&name=thor`);
    const data = await api.json()
    setHero2(data.data.results[0].thumbnail)
  }

  const getHero3 = async() => {
    const api = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&name=hulk`);
    const data = await api.json()
    setHero3(data.data.results[0].thumbnail)
  }

  const getHero4 = async() => {
    const api = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&name=thanos`);
    const data = await api.json()
    setHero4(data.data.results[0].thumbnail)
  }


  return (
    <div className='hero__wrapper'>
        <div className="hero__head">
            <div className="hero__head-content"></div>
        </div>
        <div className="hero__card-wrapper">
            <div className='hero__card'>
              <Link to={"/heroinfo/" + "Captain America"}>
                <img src={hero.path + ".jpg"} alt="Captain America" />
              </Link>
              <div className="hero__card-name">
                <h1>Captain America</h1>
              </div>
            </div>
            <div className='hero__card'>
              <Link to={"/heroinfo/" + "Thor"}>
                <img src={hero2.path + ".jpg"} alt="Thor" />
              </Link>
              <div className="hero__card-name">
                <h1>Thor</h1>
              </div>
            </div>
            <div className='hero__card'>
              <Link to={"/heroinfo/" + "Hulk"}>
                <img src={hero3.path + ".jpg"} alt="Hulk" />
              </Link>
              <div className="hero__card-name">
                <h1>Hulk</h1>
              </div>
            </div>
            <div className='hero__card'>
              <Link to={"/heroinfo/" + "Thanos"}>
                <img src={hero4.path + ".jpg"} alt="Thanos" />
              </Link>
              <div className="hero__card-name">
                <h1>Thanos</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero