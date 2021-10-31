import { supabase } from 'src/utils/supabaseClient'
import { Suspense } from 'react'
import useData from 'src/utils/useData'
import Article from 'src/components/ArticleMarkdown.server'
import { Switch, Case, Default } from 'react-if';
import Link from 'next/link'
import moment from 'moment'
import React from 'react'
const router = {
    query: {
        articleId: 1
    }
}
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
