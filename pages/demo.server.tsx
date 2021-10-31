import { createClient } from '@supabase/supabase-js'
import { Suspense } from 'react'
import useData from 'utils/useData'
import Article from 'components/ArticleMarkdown.server'
import { Switch, Case, Default } from 'react-if';
import moment from 'moment'
import React from 'react'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)
const List = () => {
    const { data } = useData('test', () => {
        return supabase.from('articles').select('*')
    })
    const nodes = data.map((ar, idx) => {
        return (
            <Article key={idx} {...ar} />
        )
    })
    return nodes
}
const Test = (props) => {
    const articleId = props.articleId
    const { data } = useData(`test-${articleId}`, () => {
        return supabase.from('articles').select('*').eq('id', articleId).single()
    })
    return <Article {...data} />
}
const Main = ({ router }) => {
    console.log('router', JSON.stringify(router, null, 2))
    if (router) {
        return (
            <>             
            <Suspense fallback={<div>Loading</div>}>
            <a href={'/demo'}>All {moment().toDate().toUTCString()}</a>
            <Switch>
              <Case condition={router?.query?.articleId}><Test articleId={router?.query?.articleId} /></Case>
              <Default><List /></Default>
              </Switch>
            </Suspense>
            </>
        )
    } else {
        return null
    }
    
}

export default Main