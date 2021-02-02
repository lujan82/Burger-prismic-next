import Head from 'next/head';
import { Client } from '../prismic';

import SectionThree from '../components/SectionThree'
import Footer from '../components/Footer';
import Header from '../components/header';
import Facebook from '../components/icon/Facebook';
import Instagram from '../components/icon/Instagram';
import Spotify from '../components/icon/Spotify';
import Twitter from '../components/icon/Twitter';
import Youtube from '../components/icon/Youtube';

const Contact = ({ doc }) => {
    const bannerThree = doc.body.find(slice => slice.slice_type === 'banner_three')


    return (
        <>
            <Head>
              <title>Burger Demo | Next-Prismic</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header title={doc.title} img={doc.img_main} />

            <main>

                <section className="container">

                  <div className="form--content">
                    <p>¿Tienes cualquier duda o necesitas más información?</p>
                    <p>¿O quizá tienes alguna sugerencia? Háblanos, nosotros te escuchamos, queremos seguir mejorando y ayudarte. Nos importa mucho tu opinión.</p>
                    <p>Escribe tu mensaje en el formulario o contáctanos a traves de nuestras redes sociales.</p>
              
                    <div className="rrss--container">
                        <div className="rrss--item">
                            <a href="#"><Youtube /></a>
                        </div>                    
                        <div className="rrss--item">
                            <a href="#"><Facebook /></a>
                        </div>                    
                        <div className="rrss--item">
                            <a href="#"><Spotify /></a>
                        </div>                    
                        <div className="rrss--item">
                            <a href="#"><Twitter /></a>
                        </div>                    
                        <div className="rrss--item">
                            <a href="#"><Instagram /></a>
                        </div>                    
                    </div>
              
                  </div>
                  
                  <div className="form">
                    <form>
                      <input type="text" placeholder="Nombre" />
                      <input type="email" placeholder="Email" />
                      <textarea rows="12" placeholder="Cuentanos">
                      </textarea>
                    </form>
                    <button>ENVIAR MENSAJE</button>
                  </div>

          </section>
          
          <section className="big-three">
					{
						bannerThree.items.map((slice,i) => (
              <SectionThree slice={slice} key={i}/>
						)) || null
					}
		  		</section>

        </main>
        
        <Footer />
        </>
    );
};

export default Contact;

export async function getStaticProps(context) {
	
	const client = Client()

	const doc = await client.getSingle("contact")
  
	console.log(doc)

  return {
	  props: {
		doc: doc.data,
    }
  }
}
