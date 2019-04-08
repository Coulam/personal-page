import Link from 'next/link'
import './navigation.scss'

export default () => (
    <ul className="navigation">
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>
    </ul>
)