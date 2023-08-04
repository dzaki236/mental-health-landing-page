import hannah_bussing from "@/assets/hannah-busing.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import 'sweetalert2/dist/sweetalert2.css'

const Contact = () => {
  const [name, setName] = useState(""); // useState to store Name
  const [city, setCity] = useState(""); // useState to store City
  const [email, setEmail] = useState(""); // useState to store Email address of the user
  const [postCode, setPostCode] = useState(""); // useState to store postCode
  const notify = (msg) => toast.error(msg);
  const mySwal = withReactContent(Swal);
  const validateForm = (event) => {
    event.preventDefault();
    // alert(typeof parseInt(postCode) == "number")
    if (name.length == 0) {
      notify("Nama tidak boleh kosong!");
      return;
    }
    if (email.length == 0) {
      notify("Email tidak boleh kosong!");
      return;
    }
    if (city.length == 0) {
      notify("Nama kota tidak boleh kosong!");
      return;
    }
    if (postCode.length == 0) {
      notify("Kode pos tidak boleh kosong!");
      // console.log(typeof postCode)
      return;
    }
    if (typeof parseInt(postCode) !== "number") {
      notify("Kode pos harus berupa angka!");
      return;
    }
    let regex = new RegExp("/^[^\s@]+@[^\s@]+\.[^\s@]+$/");
    if (regex.test(email)) {
      notify("Format email harus benar!");
      return;
    }
    mySwal.fire("Success!", "Data berhasil di simpan!", "success");
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        draggable={true}
        closeOnClick
        rtl={false}
        theme="light"
      />
      <section id="contact" className="helpline">
        <div className="content">
          <div className="left">
            <img src={hannah_bussing} />
          </div>
          <div className="right">
            <h1>We`re Here to Listen and Support</h1>
            <form id="myForm" onSubmit={validateForm}>
              <div className="set">
                <input
                  id="name"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  id="email"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="city"
                  placeholder="City"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  id="zip-code"
                  placeholder="Zipcode"
                  type="number"
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>
              <div className="status">
                <input type="checkbox" id="status" required />
                <label for="status" id="status">
                  Dengan ini saya menyatakan data yang diisi pada form ini
                  adalah benar dan telah sesuai.
                </label>
              </div>
              <div className="status">
                <button id="submit-form" type="submit">
                  Submit
                </button>
                <div id="warning"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <section id="contact" className="contact">
                <div className="left"><img src={mason_dhal} alt="test"/></div>
                <div className="right">    
                    <h2>We`re Here to Listen and Support</h2>
                    <p>Feel free to get in touch with us if you have any suggestions or inquiries about our
                        mental health initiatives and resources. We value your feedback and are here to support you on your
                        journey to better mental well-being.</p>
                    <p><box-icon color='#a4133c' name='chevron-right'></box-icon> <a href="#">info@mentalhealthhub.com</a></p>
                    <p><box-icon color='#a4133c' name='chevron-right'></box-icon> +1 (123) 456-7890</p>
                    <p><box-icon color='#a4133c' name='chevron-right'></box-icon> 123 Mindfulness Street, Serenity City, MH 56789</p>
                </div>
            </section> */}
    </>
  );
};
export default Contact;
