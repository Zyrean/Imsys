import Image from "next/image";

import Button from "../../ui/Button";

function WebsiteInformation({
  style,
  h1,
  h1Color = "text-white",
  h1Width,
  image,
  buttonText,
  buttonHref,
  buttonStyle,
  children,
}) {
  if (style === "split") {
    return (
      <section className="relative flex flex-col gap-10 lg:flex-row-reverse lg:items-center">
        <div className="h-[214px] w-full sm:h-[298px] lg:w-1/2 lg:pr-8">
          <Image
            src={image}
            alt="Picture of a men with VR"
            className="h-full w-full rounded-sm lg:rounded-md"
          />
        </div>

        <div className="flex flex-col gap-10 px-8 lg:mb-8 lg:w-1/2">
          <h1
            className={`absolute left-0 top-8 px-8 text-4xl drop-shadow-2xl sm:top-12 lg:relative lg:mb-10 lg:px-0 lg:text-5xl ${h1Width} ${h1Color}`}
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
        <div className="flex flex-col gap-8 sm:items-start lg:items-start">
          <Image
            src={image}
            alt="Picture of a men with VR"
            className="w-full rounded-sm"
          />

          <h1
            className={`px-8 text-4xl drop-shadow-2xl lg:top-14 lg:mt-4 lg:text-5xl ${h1Width} ${h1Color}`}
          >
            {h1}
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-8 lg:flex-row">{children}</div>

        <Button
          style={buttonStyle}
          to={buttonHref}
          className="mx-8"
          shadow="drop-shadow-none"
        >
          {buttonText}
        </Button>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col gap-10">
      <div className="h-[214px] w-full sm:h-[298px] lg:h-[562px]">
        <Image
          src={image}
          alt="Picture of a men with VR"
          className="h-full rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-10 px-8 lg:absolute lg:bottom-14 lg:w-[540px] lg:px-12">
        <h1
          className={`absolute left-0 top-8 px-8 text-4xl drop-shadow-2xl sm:top-12 lg:relative lg:mb-12 lg:px-0 lg:text-5xl ${h1Width} ${h1Color}`}
        >
          {h1}
        </h1>

        {children}

        <Button style={buttonStyle} to={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}

export default WebsiteInformation;
