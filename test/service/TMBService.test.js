import axios from 'axios'
import tmbService from '../../src/service/TMBService'
import { TMBResponseDTO } from '../../src/dto/TMBResponseDTO'

jest.mock('axios')

const crs = {
    properties: {
        name: "string"
    },
    type: "string"
}

const geometry = {
    coordinates: [
        { }
    ],
    type: "string"
}

const lineFeatureProperties = {
    CODI_FAMILIA: "string",
    CODI_LINIA: "string",
    CODI_OPERADOR: "string",
    CODI_TIPUS_CALENDARI: "string",
    COLOR_AUX_LINIA: "string",
    COLOR_LINIA: "string",
    COLOR_TEXT_LINIA: "string",
    DATA_FI: "string",
    DATA_INICI: "2019-08-24",
    DESC_LINIA: "string",
    DESC_TIPUS_CALENDARI: "string",
    DESTI_LINIA: "string",
    ID_FAMILIA: 0,
    ID_LINIA: 0,
    ID_OPERADOR: 0,
    ID_TIPUS_CALENDARI: 0,
    ID_TIPUS_TRANSPORT: 0,
    NOM_FAMILIA: "string",
    NOM_LINIA: "string",
    NOM_OPERADOR: "string",
    NOM_TIPUS_TRANSPORT: "string",
    ORDRE_FAMILIA: 0,
    ORDRE_LINIA: 0,
    ORIGEN_LINIA: 0
}

const lineFeature = {
    geometry: geometry,
    geometry_name: "string",
    id: "string",
    type: "string",
    properties: lineFeatureProperties
}

const transitTMBResponse = {
    crs: crs,
    totalFeatures: 1,
    type: "string",
    features: [lineFeature]
}

const expectedLineTransitResponse = new TMBResponseDTO(transitTMBResponse)


test('getBusLines validRequest successfulResponse', async () => {
    axios.get.mockImplementation(() => Promise.resolve({
        status: 200,
        data: transitTMBResponse
    }))
    
    const actual = await tmbService.getBusLines()

    expect(actual.status).toBe(200)
    expect(actual.data).toEqual(expectedLineTransitResponse)
})

test('getBusLines noConnection errorHandled', async () => {
    const expected = {
        message: "Connection timed out"
    }
    axios.get.mockImplementation(() => Promise.reject({
        status: 408,
        data: expected
    }))

    const actual = await tmbService.getBusLines()

    expect(actual.status).toBe(408)
    expect(actual.data.message).toBe(expected.message)
})

test('getMetroLines validRequest successfulResponse', async () => {
    axios.get.mockImplementation(() => Promise.resolve({
        status: 200,
        data: transitTMBResponse
    }))
    
    const actual = await tmbService.getMetroLines()

    expect(actual.status).toBe(200)
    expect(actual.data).toEqual(expectedLineTransitResponse)
})

test('getMetroLines noConnection errorHandled', async () => {
    const expected = {
        message: "Connection timed out"
    }
    axios.get.mockImplementation(() => Promise.reject({
        status: 408,
        data: expected
    }))

    const actual = await tmbService.getMetroLines()

    expect(actual.status).toBe(408)
    expect(actual.data.message).toBe(expected.message)
})