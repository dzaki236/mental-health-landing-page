import { Link } from "react-scroll"

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer id="footer">
                <div className="icons">
                    <Link href="#">
                        <box-icon color='#a4133c' type='logo' name="twitter" size='md'></box-icon>
                    </Link>
                    <Link href="#">
                        <box-icon color='#a4133c' type='logo' name="instagram-alt" size='md'></box-icon>
                    </Link>
                    <Link href="#">
                        <box-icon color='#a4133c' type='logo' name="tiktok" size='md'></box-icon>
                    </Link>
                    <Link href="#">
                        <box-icon color='#a4133c' type='logo' name="facebook-circle" size='md'></box-icon>
                    </Link>
                </div>
                Copyright © <b> {year} </b> Mental Health Support. All rights reserved.
            </footer>
        </>
    )
}
export default Footer