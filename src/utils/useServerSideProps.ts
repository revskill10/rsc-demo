import te from 'src/utils/useRouter'

export const getServerSideProps = pattern => async ({ req, res, query, params }) => {
    console.log('req', req)
    const router = te(pattern, req)
    console.log('params', params)
    console.log('router', JSON.stringify(router.params, null, 2))
    const test = {
        params: router.params,
        query
    }
    return {
        props: {
            ...test,
            time: new Date().toISOString(),
        }
    }
}