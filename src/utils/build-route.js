export function buildRoute(url) {
    const routeParamsRegex = /:([a-zA-Z]+)/g
    const urlParams = url.replaceAll(routeParamsRegex, '(?<$1>[a-z0-9\-_]+)')

    const urlRegex = new RegExp(`^${urlParams}`)

    return urlRegex
}