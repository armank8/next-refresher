// import Error from "next/error"

import Link from "next/link"

export default function Blogs() {
    const blogs = [{
        id:1,
        title: 'Blog 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus a quae nihil earum voluptas provident eligendi ex hic excepturi.'
    },
    {
        id:2,
        title: 'Blog 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus a quae nihil earum voluptas provident eligendi ex hic excepturi.'
    }]
    return (
        <main className="mt-10">
            <div>Blogs </div>
            <ul>
                {
                    blogs.map(blog => <li className="mb-5" key={blog.title}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>)
                }
            </ul>
        </main>
    )
}
