import mason_dhal from '@/assets/mason_dahl.jpg'
const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="left"><img src={mason_dhal} alt="test"/></div>
                <div className="right">    
                    <h2>We`re Here to Listen and Support</h2>
                    <p>Feel free to get in touch with us if you have any suggestions or inquiries about our
                        mental health initiatives and resources. We value your feedback and are here to support you on your
                        journey to better mental well-being.</p>
                    <p><box-icon color='#a4133c' name='chevron-right'></box-icon> <a href="#">info@mentalhealthhub.com</a></p>
                    <p><box-icon color='#a4133c' name='chevron-right'></box-icon> +1 (123) 456-7890</p>
                    <p><box-icon color='#a4133c' name='chevron-right'></box-icon> 123 Mindfulness Street, Serenity City, MH 56789</p>
                    {/* </ul> */}
                </div>
            </section>
        </>
    )
}
export default Contact