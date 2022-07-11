import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {motion} from "framer-motion"

const HeroInfo = () => {
  const [hero, setHero] = useState([{}]);  
  const [picture, setPicture] = useState({}); 

  let params = useParams()

  useEffect(() => {
    getHero(params.name);
  }, [params.name])

  const getHero = async (name) => {
    const api = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&name=${name}`);
    const data = await api.json()

    setHero(data.data.results[0])
    setPicture(data.data.results[0].thumbnail)

  }

  return (
    <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    >
        <div className='heroinfo__wrapper'>
            <div className="heroinfo__heading">
                <div className="heroinfo__img-primary">
                    <img src={picture.path + ".jpg"} alt={hero.name} />
                </div>
                <div className="heroinfo__info">
                    <h1>{hero.name}</h1>
                    <p>{hero.description}</p>
                </div>
            </div>
            <div className="heroinfo__comics-wrapper">
            
            </div>
        </div>        
    </motion.div>
  )
}

export default HeroInfo