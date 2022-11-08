import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Pokemon } from '../data/API'

interface Todo {
  id: number
  done: boolean
  text: string
}

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/pokemon')
      .then((resp) => resp.json())
      .then((data) => setPokemon(data))
  }, [])

  console.log(pokemon)

  return <div className={styles.container}>hello world</div>
}
