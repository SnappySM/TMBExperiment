import axios from 'axios'
import { TMBResponseDTO } from '../dto/TMBResponseDTO.js'

const APIKey = process.env.TMB_API_KEY
const appId = process.env.TMB_APP_ID

const baseURL = 'https://api.tmb.cat/v1'

const externalServiceError = {
    status: 500,
    data: {
        message: 'Error when accessing an external service'
    }
}

async function getBusLines() {
    try {
        const response = await axios.get(`${baseURL}/transit/linies/bus?app_id=${appId}&app_key=${APIKey}`)
        response.data = new TMBResponseDTO(response.data)
        return response
    } catch {
        return externalServiceError
    }
}

async function getMetroLines() {
    try {
        const response = await axios.get(`${baseURL}/transit/linies/metro?app_id=${appId}&app_key=${APIKey}`)
        response.data = new TMBResponseDTO(response.data)
        return response
    } catch {
        return externalServiceError
    }
}

export default {getBusLines, getMetroLines}