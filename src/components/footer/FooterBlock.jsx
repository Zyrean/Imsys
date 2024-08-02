import Image from "next/image";

import Logo from "@/assets/Logo Imsys.png";
import Arrow from "@/assets/ArrowEast.png";
import YoutubeIcon from "@/assets/Youtube.png";
import InstagramIcon from "@/assets/Instagram.png";
import FacebookIcon from "@/assets/Facebook.png";
import LinkedInIcon from "@/assets/LinkedIn.png";

function FooterBlock({ type }) {
  if (type === "agentur") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Agentur</h3>
        <ul className="flex flex-col gap-2">
          <li>Startseite</li>
          <li>Über uns</li>
          <li>Blog</li>
          <li>Kontakt</li>
          <li>FAQ</li>
        </ul>
      </div>
    );
  }

  if (type === "kontakt") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Kontakt</h3>
        <Image src={Logo} alt="Imsys log" />
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
            className="border-b-2 border-black pb-2 placeholder-gray-700"
          />
          <Image src={Arrow} alt="arrow" className="absolute right-0 top-0" />
        </div>
      </div>
    );
  }

  if (type === "social media") {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Folge uns</h3>

        <div className="flex justify-between">
          <Image src={YoutubeIcon} alt="Youtube icon" />
          <Image src={InstagramIcon} alt="Instagram icon" />
          <Image src={FacebookIcon} alt="Facebook icon" />
          <Image src={LinkedInIcon} alt="LinkedIn icon" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Service</h3>
      <ul className="flex flex-col gap-2">
        <li>Virtual Reality</li>
        <li>Augmented Reality</li>
        <li>Mixed Reality</li>
        <li>Virtual Reality</li>
        <li>Augmented Reality</li>
        <li>Mixed Reality</li>
      </ul>
    </div>
  );
}

export default FooterBlock;
