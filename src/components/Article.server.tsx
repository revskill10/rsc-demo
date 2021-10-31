import Link from 'next/link'
const Main = (props) => {
    return (
        <div>           
            <Link href={`/articles/${props.id}`}><a>{props.id}</a></Link>
            <h1>{props.title}</h1>
            <div>{props.content}</div>
        </div>
    )
}

export default Main