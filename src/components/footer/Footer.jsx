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

      <footer className="mt-32 hidden flex-col gap-20 p-8 lg:flex">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-6">
            <FooterBlock type="kontakt" />
            <FooterBlock type="newsletter" />
          </div>

          <FooterBlock />
          <FooterBlock type="agentur" />
          <FooterBlock type="social media" />
        </div>

        <p>2022 IMSYS GmbH & Co. KG. Alle rechte vorbehalten.</p>
      </footer>
    </>
  );
}

export default Footer;
