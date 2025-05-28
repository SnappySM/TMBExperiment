export class TMBFeatureDTO {
    geometry
    geometry_name
    id
    type
    properties

    constructor(data){
        this.geometry = data.geometry
        this.geometry_name = data.geometry_name
        this.id = data.id
        this.type = data.type
        this.properties = data.properties
    }
}