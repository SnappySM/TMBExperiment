export class TMBGeometryDTO {
    coordinates
    type

    constructor(data) {
        this.coordinates = data.coordinates
        this.type = data.type
    }
}