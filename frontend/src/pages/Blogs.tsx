import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogsBody } from "../components/BlogsBody";
import { useBlogs } from "../Hooks"


export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
        <AppBar/> 
            <div  className="flex justify-center">
                <div>
                    <BlogsBody/>
                    <BlogsBody/>
                    <BlogsBody/>
                    <BlogsBody/>
                    <BlogsBody/>
                </div>
            </div>
        </div>
    }

    return <div>
    <AppBar/>
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
        </div>
    </div>
}