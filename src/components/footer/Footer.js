import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div id="footer">
      <footer className="p-7 bg-orange-100 text-gray-900 mt-16">
        <div className="footer  flex justify-around text-base">
          <nav>
            <h6 className="font-bold text-base">Social Media</h6>
            <p>Book your trip in minute</p>
            <div className="flex gap-4 hover:cursor-pointer align-middle">
              <FaFacebook className="w-6 h-6" />
              <PiInstagramLogoFill className="w-7 h-7 " />
              <AiFillTwitterCircle className="w-8 h-8" />
            </div>
          </nav>

          <nav>
            <h6 className="font-bold text-base">Contacts</h6>
            <div className="flex  gap-1">
              <FaLocationDot className="text-orange-400 w-5 h-5 " />
              <a className="link link-hover">Marvilla, Lisbon, Portugal</a>
            </div>
            <div className="flex  gap-1">
              <FaPhoneAlt className="text-orange-400 w-5 h-5 " />
              <a className="link link-hover"> +351 346 368 5708</a>
            </div>
            <div className="flex gap-1 	">
              <IoMdMail className="text-orange-400 w-5 h-5 " />
              <a className="link link-hover pb-5">wondergo@gmail.com</a>
            </div>
          </nav>
          <nav>
            <h6 className="font-bold text-base ">Services</h6>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Provicy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </div>
        <aside className="footer footer-center mt-20">
          <p>Copyright © 2024 - All right reserved by WonderGo</p>
        </aside>
      </footer>
    </div>
  );
}
