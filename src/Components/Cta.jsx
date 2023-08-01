import { Link } from "react-scroll"

const Cta = () => {
    return (
        <>
            <section id="cta" className="cta">
                <div className="content">
                    <h2>Ready to embrace the change?</h2>
                    <div className="btns">
                        <Link href='#links' to='links' smooth={true} offset={200} duration={800}>Explore Our Articles</Link>
                        <Link href='#contact' to='contact' smooth={true} duration={800}>Contact Our Helpline</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cta
