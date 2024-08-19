import Image from "next/image";

import Button from "../../ui/Button";

function WebsiteInformation({
  style,
  h1,
  h1Color = "text-white",
  image,
  buttonText,
  buttonHref,
  buttonStyle,
  children,
}) {
  if (style === "split") {
    return (
      <section className="relative flex flex-col gap-10 lg:flex-row-reverse">
        <Image
          src={image}
          alt="Picture of a men with VR"
          className="w-full lg:w-1/2"
        />

        <div className="flex flex-col gap-10 px-8">
          <h1
            className={
              `absolute top-12 text-4xl drop-shadow-2xl sm:w-80 lg:relative lg:mb-10 lg:text-5xl ` +
              h1Color
            }
          >
            {h1}
          </h1>
          <p className="leading-relaxed drop-shadow-2xl">{children}</p>

          <Button style={buttonStyle} to={buttonHref}>
            {buttonText}
          </Button>
        </div>
      </section>
    );
  }

  if (style === "small") {
    return (
      <section className="relative flex flex-col gap-10">
        <div className="flex flex-col items-center gap-8 sm:items-start lg:items-start">
          <Image
            src={image}
            alt="Picture of a men with VR"
            className="w-full"
          />

          <h1
            className={
              `px-8 text-4xl drop-shadow-2xl sm:absolute sm:top-12 sm:w-96 lg:top-14 lg:w-[470px] lg:px-12 lg:text-5xl ` +
              h1Color
            }
          >
            {h1}
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-8 lg:flex-row lg:px-12">
          {children}
        </div>
      </section>
    );
  }

  // return (
  //   <section className="relative flex flex-col gap-10">
  //     <div className="flex items-center lg:items-start">
  //       <Image src={image} alt="Picture of a men with VR" className="w-full" />

  //       <h1
  //         className={
  //           `absolute px-8 text-4xl drop-shadow-2xl sm:top-12 sm:w-80 lg:top-14 lg:w-[470px] lg:px-12 lg:text-5xl ` +
  //           h1Color
  //         }
  //       >
  //         {h1}
  //       </h1>
  //     </div>

  //     <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-14 lg:w-[540px] lg:px-12 lg:text-white">
  //       <p className="leading-relaxed drop-shadow-2xl">{children}</p>

  //       <Button style={buttonStyle} to={buttonHref}>
  //         {buttonText}
  //       </Button>
  //     </div>
  //   </section>
  // );

  return (
    <section className="relative flex flex-col gap-10">
      <div className="flex items-center lg:items-start">
        <Image src={image} alt="Picture of a men with VR" className="w-full" />

        <h1
          className={
            `absolute px-8 text-4xl drop-shadow-2xl sm:top-12 sm:w-80 lg:top-14 lg:w-[470px] lg:px-12 lg:text-5xl ` +
            h1Color
          }
        >
          {h1}
        </h1>
      </div>

      <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-14 lg:w-[540px] lg:px-12 lg:text-white">
        <p className="leading-relaxed drop-shadow-2xl">{children}</p>

        <Button style={buttonStyle} to={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </section>
  );

  // return (
  //   <section className="relative flex flex-col gap-10">
  //     <div className="flex items-center lg:items-start">
  //       <Image
  //         src={Picture1}
  //         alt="Picture of a men with VR"
  //         className="w-full"
  //       />

  //       <h1 className="absolute px-8 text-4xl text-white drop-shadow-2xl sm:top-12 sm:w-80 lg:top-14 lg:w-[470px] lg:px-12 lg:text-5xl">
  //         Wir arbeiten als Erweiterung Ihres Teams
  //       </h1>
  //     </div>

  //     <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-14 lg:w-[540px] lg:px-12 lg:text-white">
  //       <p>
  //         IMSYS ist seit über 20 Jahren eine der führenden XR-Agenturen für
  //         Beratung, Planung und Projektierung von digitalen Arbeitsumgebungen.
  //         Wir sind spezialisiert auf gut abgestimmte Medienkonzepte,
  //         Planungsdienstleistungen, Realisierung und Servicelösungen für Virtual
  //         Reality-, Augmented Reality- und Mixed Reality-Umgebungen.
  //       </p>

  //       <Button style="learn more" to="/loesungen">
  //         Mehr erfahren
  //       </Button>
  //     </div>
  //   </section>
  // );
}

export default WebsiteInformation;
