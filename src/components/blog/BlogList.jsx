import BlogItem from "./BlogItem";
import Pic1 from "@/assets/Mask1.png";
import Pic2 from "@/assets/Mask2.png";
import Pic3 from "@/assets/Mask3.png";
import Pic4 from "@/assets/Mask4.png";

function BlogList() {
  return (
    <ul className="flex flex-col gap-10 px-8 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-y-6">
      <BlogItem
        image={Pic1}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
      />
      <BlogItem
        image={Pic2}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
      />
      <BlogItem
        image={Pic3}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
      />
      <BlogItem
        image={Pic4}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
      />
      <BlogItem
        image={Pic1}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic2}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic3}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic4}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
        className="hidden lg:flex"
      />
      <BlogItem
        image={Pic1}
        interests="alle"
        title="Mulih - Real Estat Landing Page"
        className="hidden lg:flex"
      />
    </ul>
  );
}

export default BlogList;
