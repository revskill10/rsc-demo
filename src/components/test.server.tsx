import { supabase } from 'src/utils/supabaseClient'
import useData from 'src/utils/useData'
import Article from 'src/components/Article.client'
const Test = ({ rest }) => {
    const { data } = useData('test', () => supabase.from('articles').select('*'))
    const nodes = data.map((ar, idx) => {
        return (
            <div>
            <Article key={idx} {...ar} />
            <div>{JSON.stringify(rest, null, )}</div>
            </div>
        )
    })
    return nodes
}


export default Test
