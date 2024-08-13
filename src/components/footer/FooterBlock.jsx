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
          <NavLink arrow={false} to="/" className="hover:text-orange">
            Über uns
          </NavLink>
          <NavLink arrow={false} to="/" className="hover:text-orange">
            Blog
          </NavLink>
          <NavLink arrow={false} to="/" className="hover:text-orange">
            Kontakt
          </NavLink>
          <NavLink arrow={false} to="/" className="hover:text-orange">
            FAQ
          </NavLink>
        </ul>
      </div>
    );
  }

  if (type === "kontakt") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Kontakt</h3>
        <NavLink arrow={false} to="/">
          <Image src={Logo} alt="Imsys log" />
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
            className="w-36 border-b-2 border-black py-2 placeholder-gray-700"
          />
          <Image
            src={Arrow}
            alt="arrow"
            className="absolute right-2 top-2.5 sm:right-[86px] md:right-[86px] lg:right-[24px]"
          />
        </div>
      </div>
    );
  }

  if (type === "social media") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Folge uns auf</h3>

        <div className="flex gap-3">
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
          Virtual Reality
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Augmented Reality
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Mixed Reality
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Virtual Reality
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Augmented Reality
        </NavLink>
        <NavLink arrow={false} to="/" className="hover:text-orange">
          Mixed Reality
        </NavLink>
      </ul>
    </div>
  );
}

export default FooterBlock;
