import { randomUUID } from 'node:crypto'
import { DataBase } from './database.js'
import { buildRoute } from './utils/build-route.js'

const database = new DataBase()

export const routes = [
    {
        method: 'GET',
        url: buildRoute('/fighters'),
        handler: (req, res) => {
            const fighters = database.select('fighter')
            return res.writeHead(200).end(JSON.stringify(fighters))
        }
    },

    {
        method: 'POST',
        url: buildRoute('/fighters'),
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
    {
        method: 'PUT',
        url: buildRoute('/fighters/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { name, age, belt_graduation, weight, phone } = req.body
            
            database.update('fighter', id, {
                name,
                age,
                belt_graduation,
                weight,
                phone,
            })

            return res.writeHead(204).end()
        }
    },
]