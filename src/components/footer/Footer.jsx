import FooterBlock from "./FooterBlock";

function Footer({ type }) {
  // if (type === "desktop") {
  //   return (
  //     <footer className="flex flex-col gap-20 p-8">
  //       <div className="grid grid-cols-2 gap-8">
  //         <FooterBlock />
  //         <FooterBlock type="agentur" />
  //         <FooterBlock type="kontakt" />
  //         <div className="flex flex-col justify-between">
  //           <FooterBlock type="newsletter" />
  //           <FooterBlock type="social media" />
  //         </div>
  //       </div>

  //       <p>2022 IMSYS GmbH & Co. KG. Alle rechte vorbehalten.</p>
  //     </footer>
  //   );
  // }

  // return (
  //   <footer className="flex flex-col gap-20 p-8">
  //     <div className="grid grid-cols-2 gap-8">
  //       <FooterBlock />
  //       <FooterBlock type="agentur" />
  //       <FooterBlock type="kontakt" />
  //       <div className="flex flex-col justify-between">
  //         <FooterBlock type="newsletter" />
  //         <FooterBlock type="social media" />
  //       </div>
  //     </div>

  //     <p>2022 IMSYS GmbH & Co. KG. Alle rechte vorbehalten.</p>
  //   </footer>
  // );

  return (
    <footer className="flex flex-col gap-20 p-8">
      <div className="flex justify-between gap-8">
        <div>
          <FooterBlock type="kontakt" />
          <FooterBlock type="newsletter" />
        </div>

        <FooterBlock />
        <FooterBlock type="agentur" />
        <FooterBlock type="social media" />
      </div>

      <p>2022 IMSYS GmbH & Co. KG. Alle rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;
