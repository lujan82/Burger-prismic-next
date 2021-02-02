import React from 'react';

const Post = ({post}) => {
    return (
        <div className="posts--item">
            <a href={`news/${post.uid}`}>
                <img src={post.data.img.url} />
                <div className="posts--content">
                    <h3>{ post.data.title[0].text}</h3>
                </div>
            </a>
        </div>
    );
};

export default Post;