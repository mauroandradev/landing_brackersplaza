import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "../atoms/Form";
import InputForm from "../atoms/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div
        className="w-full flex flex-wrap bg-slate-900 min-h-[40dvh] gap-10 p-10"
        id="contact">
        <div className="lg:w-1/3 m-auto flex flex-col gap-10 text-xl">
          <h2 className="font-bold text-5xl">Contact Us</h2>
          <p>
            Do you have questions? We're here to help you plan your perfect
            stay. Write to us or call us for more information.
          </p>
          <div className=" flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faPhone} className="text-emerald-600" />
              +1 956-761-4208
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 m-auto w-full ">
          <Form>
            <InputForm
              text="Name"
              placeHolder="Your Name"
              id="name"
              change={() => console.log("hello")}
            />
            <InputForm
              text="Phone Number"
              placeHolder="Your telephone number"
              id="phone"
              change={() => console.log("hello")}
            />
            <InputForm
              text="Email"
              placeHolder="Your Email"
              id="email"
              change={() => console.log("hello")}
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={20}
              rows={5}
              className="bg-black rounded resize-none"></textarea>
          </Form>
        </div>
      </div>
      <div className="bg-slate-900 w-full border-t-2 border-slate-600 text-center p-5">
        <p>© 2025 South Padre Island Condos. All rights reserved.</p>
      </div>
    </footer>
  );
}
