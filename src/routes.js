import { randomUUID } from 'node:crypto'
import { DataBase } from './database.js'

const database = new DataBase()

export const routes = [
    {
        method: 'GET',
        url: '/fighters',
        handler: (req, res) => {
            const fighters = database.select('fighter')
            return res.writeHead(200).end(JSON.stringify(fighters))
        }
    },

    {
        method: 'POST',
        url: '/fighters',
        handler: (req, res) => {
            const { name, age, belt_graduation, weight, phone } = req.body

            const fighter = ({
                id: randomUUID(),
                name,
                age,
                belt_graduation,
                weight,
                phone,
            })

            database.insert('fighter', fighter)
            return res.writeHead(201).end()
        }
    },
]