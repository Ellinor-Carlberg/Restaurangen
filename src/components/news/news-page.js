import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import SectionOne from "./section-one/section-one.js";
import "./news-page.css";

function NewsPage() {
  const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        /* what we are taking in -fetching from posts */
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                publishedAt,
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
        <div class="ap-wrapper">
            <SectionOne />
            <div class="all-post-wrapper">
                {allPostsData && 
                    allPostsData.map((post, index) => (
                        <Link to={'/' + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img src={post.mainImage.asset.url} alt="monkey"/>
                            <span>
                                <h3>{post.title}</h3>
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