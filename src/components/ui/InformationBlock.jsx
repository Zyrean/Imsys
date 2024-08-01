function InformationBlock({ title }) {
  return (
    <div className="flex flex-col gap-6 px-8">
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr.
      </p>
    </div>
  );
}

export default InformationBlock;
