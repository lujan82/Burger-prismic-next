import Head from 'next/head'
import { useState } from 'react';
import { Client } from '../prismic'
import Prismic from "prismic-javascript";

import Header from '../components/header'
import Burger from '../components/Burger';
import SectionThree from '../components/SectionThree';
import SectionTwo from '../components/SectionTwo';
import Footer from '../components/Footer';
import PopUp from '../components/PopUp';
import Follow from '../components/Follow';

export default function Home({ doc, dataBurgers }) {

	const [isPopupOpen, setIsPopupOpen] = useState({
		popup: false,
		burgerData: ''
	})

	const { popup, burgerData} = isPopupOpen

	const bannerThree = doc.body.find(slice => slice.slice_type === 'banner_three')
	const bannerTwo = doc.body.find(slice => slice.slice_type === 'banner_two')
    const follow = doc.body.find(slice => slice.slice_type === 'follow')


	return (
		<>
			<Head>
				<title>Burger Demo | Next-Prismic</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<Header title={doc.title} img={doc.img_main} />
			<main className="home">

				<section className="burgers">
					{
						dataBurgers.map(burger => (
							<Burger
								burger={burger}
								isPopupOpen={isPopupOpen}
								setIsPopupOpen={setIsPopupOpen}
								key={burger.id}
							/>
						))
					}
				</section>

				<PopUp
					burger={burgerData}
					popup={popup}
					setIsPopupOpen={setIsPopupOpen}
				/>

				<Follow follow={follow.primary} />

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
	)
}


export async function getStaticProps(context) {
	
	const client = Client()

	const doc = await client.getSingle("home")
  
	const burgers = await client.query(
		Prismic.Predicates.at("document.type", "burgers"), {
			orderings: "[my.post.date desc]"
        },
	)		

  return {
	  props: {
		doc: doc.data,
		dataBurgers: burgers ? burgers.results : [],
    }
  }
}
