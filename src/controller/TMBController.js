import tmbService from '../service/TMBService.js'

async function getBusLines(req, res) {
    const response = await tmbService.getBusLines()
    res.status(response.status).json(response.data)
}

async function getMetroLines(req, res) {
    const response = await tmbService.getMetroLines()
    res.status(response.status).json(response.data)
}

export default {getBusLines, getMetroLines}