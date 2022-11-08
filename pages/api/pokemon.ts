// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pokemon from '../../data/pokemon.json'


export interface Pokemon {
  id: number
  name: string
  type: string[]
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  res.status(200).json(pokemon)
}
