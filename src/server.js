import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
    await json(req, res)

    const { method, url } = req

    const route = routes.find(route => {
        return route.method === method && route.url.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.url)

        req.params = { ...routeParams.groups }

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3000)