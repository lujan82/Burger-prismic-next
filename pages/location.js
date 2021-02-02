import Head from 'next/head';
import Slider from "react-slick";
import { Client } from '../prismic';

import Header from '../components/header';
import Footer from '../components/Footer';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionLocation from '../components/SectionLocation';

const Location = ({ doc }) => {

    const location = doc.body.find(slice => slice.slice_type === 'locations')
    const slider = doc.body.find(slider => slider.slice_type === 'slider')
    const bannerThree = doc.body.find(slice => slice.slice_type === 'banner_three')
	const bannerTwo = doc.body.find(slice => slice.slice_type === 'banner_two')

    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };

    return (
        <>
            <Head>
                <title>Burger Demo | Next-Prismic</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            
            <Header title={doc.title} img={doc.img_main} />

            <main className="location">

                <section className="container--location">
                    
                    {
                        location.items.map((location,i) => (
                            <SectionLocation location={location} key={i}/>
                        ))
                    }

                </section>

                <Slider {...settings}>
                    {
                        slider.items.map((img,i) => (
                            <img src={img.img.url} key={i}/>
                        ))
                    } 
                </Slider>

                <section className="big-two">
                    { 
                        bannerTwo.items.map((slice,i) => (
                            <SectionTwo slice={slice} key={i}/>
                        ))
                    }
                    
                </section>

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

export default Location;

export async function getStaticProps(context) {
	
	const client = Client()

	const doc = await client.getSingle("location")
  
  return {
	  props: {
		doc: doc.data,
    }
  }
}