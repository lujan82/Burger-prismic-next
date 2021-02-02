import { RichText } from 'prismic-reactjs';

const Follow = ( {follow} ) => {
    console.log('follow', follow);
    
    return (
        <section className="follow">
            <h2>{RichText.asText(follow.title1)} </h2>
            <span>
                <a href="#">
                    <img src={follow.img.url} alt={follow.img.alt} />
                </a>
            </span>
        </section>
    );
};

export default Follow;