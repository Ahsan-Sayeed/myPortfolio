import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function MyVerticallyCenteredModal(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    if (e.target.user_name && e.target.user_email && e.target.message) {
      emailjs
        .sendForm(
          "service_edy41wk",
          "template_6qvy11r",
          form.current,
          "vOx0R8JC8fIpTkA4g"
        )
        .then(
          (result) => {
            alert("success");
          },
          (error) => {
            alert("something went wrong");
          }
        );
    }
  };

  //service_c93h5np

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: "RGBA(0, 0, 0, 0.1)" }}
    >
      <Modal.Body
        class="text-black p-5"
        style={{ backgroundColor: "rgba(100,100,100,0.2)" }}
      >
        <h4 className="mb-4">Contact</h4>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <br />
          <input type="text" name="user_name" className="w-100" autoFocus />
          <br />
          <label>Email</label>
          <br />
          <input type="email" name="user_email" className="w-100" />
          <br />
          <label>Message</label>
          <br />
          <textarea
            name="message"
            className="w-100 border"
            id=""
            cols="30"
            rows="10"
            placeholder="Write your message.."
          />
          <Button onClick={props.onHide} type="submit" variant="danger">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
