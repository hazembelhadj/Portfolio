import React  from 'react';
import Title from '../components/Title';
import allBlogs from '../components/allBlogs';


const BlogsPage = () => {
    return (  
<div className= "Blog" > 
            <div className="b-title">
                <Title title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                    {blog.date + '/'+ blog.month + '/' +  blog.year}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    );
}



export default BlogsPage;