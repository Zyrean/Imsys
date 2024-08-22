import Image from "next/image";

import Logo from "@/assets/Logo Imsys.png";
import Arrow from "@/assets/ArrowEast.png";
import YoutubeIcon from "@/assets/Youtube.png";
import InstagramIcon from "@/assets/Instagram.png";
import FacebookIcon from "@/assets/Facebook.png";
import LinkedInIcon from "@/assets/LinkedIn.png";
import NavLink from "../header/NavLink";

function FooterBlock({ type }) {
  if (type === "agentur") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Agentur</h3>
        <ul className="flex flex-col gap-2">
          <NavLink arrow={false} to="/" className="hover:text-orange">
            Startseite
          </NavLink>
          <NavLink arrow={false} to="/ueberUns" className="hover:text-orange">
            Über uns
          </NavLink>
          <NavLink arrow={false} to="/blog" className="hover:text-orange">
            Blog
          </NavLink>
          <NavLink arrow={false} to="/kontakt" className="hover:text-orange">
            Kontakt
          </NavLink>
        </ul>
      </div>
    );
  }

  if (type === "kontakt") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Kontakt</h3>

        <NavLink to="/" arrow={false}>
          <svg
            className="hover:fill-orange"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 137.3 41.1"
            fill="#2b6c9b"
            height={40}
            width={150}
          >
            <path d="M102.1 33.4c0 1.3-.6 2.5-2.4 2.4H86.1v3.7h13.6c3.7 0 6.1-1.9 6.2-6.2v-5.9h-3.7l-.1 6zm3.7-25.3h-3.7v12.1h3.7V8.1zM3.8 1.5H1.5c-.4 0-.8.3-.8.8v2.3c0 .4.3.8.8.8h2.3c.4 0 .8-.3.8-.8V2.2c0-.4-.4-.7-.8-.7zm-3 20.9c0 2.9 3.8 3.4 3.8 3.4V8.1H.8v14.3zM76.1 15H60.5c-1.4-.3-1.6-2.6 0-3.2h18.8V8.1h-19c-.9 0-5 .9-5 5.4 0 3.9 3.5 5.3 5 5.4h15.8c1.4.6 1.3 2.8 0 3.2H51.6c-1.2 0-1.2-.5-1.2-1.2v-6.6c0-3.8-1-6.1-4.9-6.2h-31c-3.4 0-4.9 1.5-5 5V17v8.9h3.8v-13c0-.7.6-1 1.1-1h12.4c.8 0 1.2.5 1.2 1.2v12.8h3.8V13.1c0-.7.6-1.2 1.2-1.2h12.4c1.2 0 1.2 1 1.2 2.4v6.6c0 3.4 1.6 5 5 5h24.5c1.3 0 4.9-1.1 4.9-5.4S77.7 15 76.1 15zm55.5.1H116c-1.2-.4-1.3-2.7.1-3.3h18.7V8.1h-18.9c-.9 0-5 1.1-5 5.5 0 3.9 3.5 5.3 5 5.4h15.8c1.3.7 1.3 2.6 0 3.1H90.9s-1.1.2-1.1-1.1v-9.4c0-2.9-3.8-3.4-3.8-3.4V21c0 3.1 1.3 4.7 4.2 4.9h0 41.5c1.3 0 4.8-1 4.9-5.3 0-4.4-3.4-5.5-5-5.5z" />
          </svg>
        </NavLink>

        <div className="flex flex-col">
          <p>Hertichstraße 81</p>
          <p>71229 Leonberg</p>
          <p>E-Mail: Imsys@web.de</p>
          <p>Tel: 07152 9063070</p>
        </div>
      </div>
    );
  }

  if (type === "newsletter") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Newsletter</h3>

        <div className="relative">
          <input
            type="email"
            name="newsletter"
            placeholder="E-Mail..."
            className="w-36 border-b-2 border-black py-2"
          />
          <Image
            src={Arrow}
            alt="arrow"
            className="absolute right-2 top-2.5 sm:right-[82px] lg:right-[8px]"
          />
        </div>
      </div>
    );
  }

  if (type === "social media") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Folge uns auf</h3>

        <div className="flex justify-between sm:justify-normal sm:gap-4">
          <a target="_blank" href="https://youtube.com/">
            <Image src={YoutubeIcon} alt="Youtube icon" />
          </a>
          <a target="_blank" href="https://instagram.com/">
            <Image src={InstagramIcon} alt="Instagram icon" />
          </a>
          <a target="_blank" href="https://facebook.com/">
            <Image src={FacebookIcon} alt="Facebook icon" />
          </a>
          <a target="_blank" href="https://linkedIn.com/">
            <Image src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Service</h3>
      <ul className="flex flex-col gap-2">
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Beratung
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Planung
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Projektierung
        </NavLink>

        <NavLink arrow={false} to="/" className="hover:text-orange">
          Service
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Schulung
        </NavLink>
      </ul>
    </div>
  );
}

export default FooterBlock;
