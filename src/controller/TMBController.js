import tmbService from '../service/TMBService.js'

async function getBusLines(req, res) {
    const response = await tmbService.getBusLines()
    res.status(200).json(response.data)
}

async function getMetroLines(req, res) {
    const response = await tmbService.getMetroLines()
    res.status(200).json(response.data)
}

export default {getBusLines, getMetroLines}