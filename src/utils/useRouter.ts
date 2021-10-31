import { pathToRegexp, match } from "path-to-regexp"

const useRouter = (pattern, req) => {
    const tmp = pathToRegexp(pattern)
    const fn = match(pattern, { decode: decodeURIComponent });
    const result = fn(req.url)
    if (result === false) return { params: null }
    return result
}

export default useRouter