import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
/* import SectionOne from "../section-one/section-one.js";
<SectionOne /> */
import "./one-post.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
             title, 
             slug, 
             releaseDate,
             mainImage{
                 asset->{
                     _id,
                     url
                 }
             },
             body,
             "name": author->name,
             "authorImage": author->image 
         }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div class="loading">Loading...</div>;

  return (
    <div class="one-post-page-wrapper">
      
      <div class="one-post-wrapper">
        <div class="one-post-heading">
          <h3>{postData.title}</h3>
          <h5>{postData.releaseDate}</h5>     
        </div>
        <span><hr></hr></span>

        <img src={urlFor(postData.mainImage).width(100).url()} alt="monkey" />
        <div class="block-content-h5">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>

        <div class="author-wrapper">
          <img
            class="author-img"
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Restaurant Miri"
          />
          <h4>{postData.name}</h4>
          
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
/* 
   */
