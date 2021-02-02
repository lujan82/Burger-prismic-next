import Link from 'next/link'

const SectionThree = ({slice}) => {
    
    return (

        <div className="big-three--item">
            <div className="big-three--img">
                <img src={slice.img.url} alt={slice.img.alt} />
            </div>
            
            <h2>
                {
                    slice.link === "home"
                        ? <Link href="/"><a>{slice.text} </a></Link>
                        : <Link href={slice.link}><a>{slice.text}</a></Link>
                }
               
            </h2>
            
        </div>

    );
};

export default SectionThree;