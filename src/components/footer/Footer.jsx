import FooterBlock from "./FooterBlock";

function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-20 p-8 lg:hidden">
        <div className="grid grid-cols-2 gap-8">
          <FooterBlock />
          <FooterBlock type="agentur" />
          <FooterBlock type="kontakt" />
          <div className="flex flex-col justify-between">
            <FooterBlock type="newsletter" />
            <FooterBlock type="social media" />
          </div>
        </div>

        <p>2022 IMSYS GmbH & Co. KG. Alle rechte vorbehalten.</p>
      </footer>

      <footer className="mt-16 hidden flex-col gap-20 p-8 lg:flex">
        <div className="flex justify-between gap-8">
          <FooterBlock type="kontakt" />

          <FooterBlock />
          <FooterBlock type="agentur" />
          <div className="flex flex-col gap-10">
            <FooterBlock type="newsletter" />
            <FooterBlock type="social media" />
          </div>
        </div>

        <p>2022 IMSYS GmbH & Co. KG. Alle rechte vorbehalten.</p>
      </footer>
    </>
  );
}

export default Footer;
