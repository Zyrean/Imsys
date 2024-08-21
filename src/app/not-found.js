import Button from "@/components/ui/Button";

function NotFoundPage() {
  return (
    <div className="mx-8 my-10 flex flex-col gap-10 border-b-[1px] border-t-[1px] border-black py-10 lg:border-none lg:pt-20">
      <h1 className="text-3xl font-semibold sm:w-[300px]">
        Die eingegebene Seite/URL wird leider nicht unterstützt
      </h1>

      <Button style="read article" to="/">
        Zur Homepage
      </Button>
    </div>
  );
}

export default NotFoundPage;
