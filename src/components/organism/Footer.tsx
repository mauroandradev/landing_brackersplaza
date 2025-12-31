import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import InputForm from "../atoms/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Footer() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const captchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [sending, setSending] = useState(false);

  // 1️⃣ Submit del form → ejecuta captcha invisible
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || sending) return;

    recaptchaRef.current?.execute();
  };

  // 2️⃣ Google valida → acá recién enviamos el mail
  const handleCaptchaSuccess = async (token: string | null) => {
    if (!token || !formRef.current) return;

    try {
      setSending(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("❌ An error occurred while sending the message");
    } finally {
      setSending(false);
      recaptchaRef.current?.reset();
    }
  };

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
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faPhone} className="text-emerald-600" />
              +1 956-761-4208
            </div>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-emerald-600" />
              info@thebreakersplaza.com
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 m-auto w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full p-8 bg-slate-700 flex flex-col gap-5 rounded">
            <InputForm text="Name" placeHolder="Your Name" id="name" />
            <InputForm
              text="Phone Number"
              placeHolder="Your telephone number"
              id="phone"
            />
            <InputForm text="Email" placeHolder="Your Email" id="email" />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={20}
              rows={5}
              className="bg-black rounded resize-none"
            />

            {/* reCAPTCHA v2 INVISIBLE */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={captchaKey}
              size="invisible"
              onChange={handleCaptchaSuccess}
            />

            <button
              type="submit"
              disabled={sending}
              className="bg-blue-400 text-white font-semibold p-3 rounded-sm disabled:opacity-60">
              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-slate-900 w-full border-t-2 border-slate-600 text-center p-5">
        <p>© 2025 South Padre Island Condos. All rights reserved.</p>
      </div>
    </footer>
  );
}
