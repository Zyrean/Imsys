import Button from "@/components/ui/Button";

function NotFoundPage() {
  return (
    <div className="mx-8 my-44 flex flex-col items-center gap-10 lg:border-none lg:pt-20">
      <h1 className="text-center text-3xl font-semibold sm:w-[300px]">
        Die eingegebene Seite/URL wird leider nicht unterstützt
      </h1>

      <Button style="read article" to="/" className="lg:mb-36">
        Zur Homepage
      </Button>
    </div>
  );
}

export default NotFoundPage;
