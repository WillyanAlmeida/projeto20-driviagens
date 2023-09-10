export function internalServerError(resource = "Item") {
    return {
        type: "IternalServer",
        message: `${resource}`
    }
}