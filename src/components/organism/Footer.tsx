import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

    return (
    <footer>
      <div className="w-full flex flex-wrap bg-slate-900 min-h-[40dvh] gap-10 p-10">
        <div className="lg:w-1/3 m-auto flex flex-col gap-10 text-xl">
          <h2 className="font-bold text-5xl lg:text-center">Contact Us</h2>
          <p>
            Do you have questions? We're here to help you plan your perfect
            stay. Write to us or call us for more information.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center lg:justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-emerald-600" />
              +1 956-761-4208
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 w-full border-t-2 border-slate-600 text-center p-5">
        <p>{`© 1982 - ${new Date().getFullYear()} South Padre Island Condos. All rights reserved.`}</p>
      </div>
    </footer>
  );
}
