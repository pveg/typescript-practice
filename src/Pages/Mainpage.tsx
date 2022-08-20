import {useState, useEffect} from 'react'
import axios from 'axios';

const swapiData = 'https://swapi.dev/api/people'

function Mainpage() {
    const [characters, setCharacters] = useState<any[]>([]);

    const getCharacters = async () => {
  
      try {
        const response = await axios.get(swapiData);
        setCharacters(response.data.results)
        console.log(characters)
        
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getCharacters();
    }, [])

  return (
    <div>
        {characters.map((elem, i) => {
            return(
                <div key={i}>
                    
<div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mt-10 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div> {elem.name}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Birth year:{elem.birth_year}</div>
            </div>
        </figcaption>    
    </figure>
</div>

                </div>
            )
        })}

    </div>
  )
}

export default Mainpage