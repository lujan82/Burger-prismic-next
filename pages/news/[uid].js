import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import { Client, queryRepeatableDocuments } from '../../prismic';

import Footer from '../../components/Footer';

const Post = ({post}) => {
    return (
        <>
            <Head>
                <title>Burger Demo | Next-Prismic</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="article">
                <article>
                    <header>
                        <img src={post.data.img.url} alt={post.data.img.alt} />
                        <h1>{ post.data.title[0].text}</h1>
                    </header>
                    <div className="article--text">
                        <RichText render={post.data.content} />
                    </div>

                </article>
            </main>
            <Footer />
        </>
    );
};

export default Post; 

export async function getStaticProps({ params}) {
  const post = await Client().getByUID("posts", params.uid) 
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'posts')
  return {
    paths: documents.map(doc => `/news/${doc.uid}`),
    fallback: false,
  }
}
