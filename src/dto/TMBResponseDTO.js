import { TMBCrsDTO } from './TMBCrsDTO.js'
import { TMBFeatureDTO } from './TMBFeatureDTO.js'
import { TMBGeometryDTO } from './TMBGeometryDTO.js'
import { TMBLinePropertiesDTO } from './TMBLinePropertiesDTO.js'

export class TMBResponseDTO {
    crs
    totalFeatures
    type
    features

    constructor(data) {
        this.crs = new TMBCrsDTO(data.crs)
        this.totalFeatures = data.totalFeatures
        this.type = data.type
        this.features = []
        let feature
        for (let i = 0; i < data.totalFeatures; i++) {
            feature = new TMBFeatureDTO(data.features[i])
            feature.geometry = new TMBGeometryDTO(feature.geometry)
            feature.properties = new TMBLinePropertiesDTO(feature.properties)
            this.features.push(feature)
        }
    }
}