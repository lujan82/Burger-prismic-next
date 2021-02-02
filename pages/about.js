
import Head from 'next/head'
import { Client } from '../prismic'
import { RichText } from 'prismic-reactjs';

import Footer from '../components/Footer';
import Header from '../components/header';
import SectionThree from '../components/SectionThree';
import Follow from '../components/Follow';

const About = ({ doc }) => {
    
    console.log("doc", doc)
    const bannerThree = doc.body.find(banner => banner.slice_type === 'banner_three')
    const weFamily = doc.body.find(banner => banner.slice_type === 'we_family')
    const ourStory = doc.body.find(banner => banner.slice_type === 'our_history')
    const follow = doc.body.find(banner => banner.slice_type === 'follow')
    console.log('follow', follow);

    return (
        <>
            <Head>
                <title>Burger Demo | Next-Prismic</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title={doc.title} img={doc.img_main} />
            <main className="about">

                <section className="history">
                    <div className="history-content">
                        <h2>
                            <span>{RichText.asText(ourStory.primary.title1)} </span>
                        </h2>
                        <div className="history-content--text">
                            <RichText render={ourStory.primary.content} />
                        </div>
                        
                    </div>
                    <div className="history-img">
                        <img src={ourStory.primary.img.url} alt={ourStory.primary.img.alt}/>
                    </div>

                </section>


                <section className="vimeo"> 
                    <iframe src="https://player.vimeo.com/video/42444649?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </section>

                <section className="join-us">
                    <div className="join-us--img">
                        <img src={weFamily.primary.img.url} alt={weFamily.primary.img.alt}/>
                    </div>
                    <div className="join-us--content">
                        <h2>
                            {RichText.asText(weFamily.primary.title1)} 
                        </h2>
                        <RichText render={weFamily.primary.content} />
                        <button>{weFamily.primary.button}</button>
                    </div>
                </section>

                <Follow follow={follow.primary} />

                <section className="big-three">
                    {
                        bannerThree.items.map((slice,i) => (
                            <SectionThree slice={slice} key={i}/>
                        ))
                    }

                </section>

            </main>

            <Footer />
        </>
    );
};

export default About;

export async function getStaticProps(context) {
	
	const client = Client()

	const doc = await client.getSingle("about")

  return {
	  props: {
		doc: doc.data,
    }
  }
}
