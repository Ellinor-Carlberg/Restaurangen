import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";

function NewsPage() {
  const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }    
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
    return (
        <div>
            <h2>Blog Posts!</h2>
            <h3>Welcome to my blogpost page!</h3>
            <div>
                {allPostsData && 
                    allPostsData.map((post, index) => (
                        <Link to={'/' + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img src={post.mainImage.asset.url} alt="main hero image for blog post"/>
                            <span>
                                <h2>{post.title}</h2>
                            </span>
                        </span>
                        </Link>
                    )
                    )}
            </div>
        </div>

    );
}

export default NewsPage;

/* 
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function AllPosts() {
const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }    
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
    return (
        <div>
            <h2>Blog Posts!</h2>
            <h3>Welcome to my blogpost page!</h3>
            <div>
                {allPostsData && 
                    allPostsData.map((post, index) => (
                        <Link to={'/' + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img src={post.mainImage.asset.url} alt="main hero image for blog post"/>
                            <span>
                                <h2>{post.title}</h2>
                            </span>
                        </span>
                        </Link>
                    )
                    )}
            </div>
        </div>

    );
} */