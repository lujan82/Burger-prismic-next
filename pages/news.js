import Head from 'next/head';
import Prismic from "prismic-javascript";
import { Client } from '../prismic';
import { RichText } from 'prismic-reactjs';

import Header from '../components/header';
import Footer from '../components/Footer';
import SectionThree from '../components/SectionThree';
import Post from '../components/Post';
import Follow from '../components/Follow';

const News = ({doc, newsData}) => {

    const bannerThree = doc.body.find(slice => slice.slice_type === 'banner_three')
    const bannerSoon = doc.body.find(slice => slice.slice_type === 'banner_soon')
    const follow = doc.body.find(slice => slice.slice_type === 'follow')

    return (
        <>
            <Head>
                <title>Burger Demo | Next-Prismic</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title={doc.title} img={doc.img_main} />
            <main className="news">

                <section className="posts">
                    {
                        newsData.map(post => (
                            <Post post={post} key={ post.uid} />
                        ))
                    }
                </section>

                <Follow follow={follow.primary} />

                <section className="soon">
                    <img src={ bannerSoon.primary.img.url} alt={bannerSoon.primary.img.alt } />
                    <div className="soon--content">
                        <div>
                            <h2>{RichText.asText(bannerSoon.primary.title1)} </h2>
                            <button>{ bannerSoon.primary.button }</button>
                        </div>
                        
                    </div>
                </section>

                <section className="big-three">
                    {
                        bannerThree.items.map((slice,i) => (
                        <SectionThree slice={slice} key={i} />
                        )) || null
                    }
                </section>

            </main>
            <Footer />
        </>
    );
};

export default News;

export async function getStaticProps(context) {
	
	const client = Client()

    const doc = await client.getSingle("news")
    
    const news = await client.query(
		Prismic.Predicates.at("document.type", "posts"), {
			orderings: "[my.post.date desc]"
        },
    )	
  
  return {
	  props: {
          doc: doc.data,
          newsData: news ? news.results : [],
    }
  }
}