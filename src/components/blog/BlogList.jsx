import BlogItem from "./BlogItem";
import Pic1 from "@/assets/Mask1.png";
import Pic2 from "@/assets/Mask2.png";
import Pic3 from "@/assets/Mask3.png";
import Pic4 from "@/assets/Mask4.png";

function BlogList() {
  return (
    <ul className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-y-6">
      <BlogItem image={Pic1} interests="mobile design" title="Blogpost 1" />
      <BlogItem image={Pic2} interests="alle" title="Blogpost 2" />
      <BlogItem image={Pic3} interests="typography" title="Blogpost 3" />
      <BlogItem image={Pic4} interests="branding" title="Blogpost 4" />
      <BlogItem
        image={Pic1}
        interests="web design"
        title="Blogpost 5"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic2}
        interests="mobile design"
        title="Blogpost 6"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic3}
        interests="illustration"
        title="Blogpost 7"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic4}
        interests="alle"
        title="Blogpost 8"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic1}
        interests="web design"
        title="Blogpost 9"
        className="hidden lg:flex"
      />
    </ul>
  );
}

export default BlogList;
