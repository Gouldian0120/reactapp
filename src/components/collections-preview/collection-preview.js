import $ from "jquery";
import { gsap } from "gsap";

const InitPreviewAnimation = () => {
  $(".collection-title").each(function (index, el) {
    const $this = $(el);
    const thisId = el.id;
    const $thisPreviewImages = $(".preview__left, .preview__right").find(
      `img[id="${thisId}"]`
    );
    const $allImages = $(".preview__left img, .preview__right img");
    const $otherImages = $(".preview__left, .preview__right")
      .find("img")
      .not(`[id="${thisId}"]`);

    $(el).on("mouseenter", (el) => {
      console.log($this);
      // $($otherImages).addClass(".mouseentered");
      gsap.set($allImages, {
        y: 100,
      });
      gsap.to($thisPreviewImages, {
        opacity: 1,
        y: 0,
        ease: "Power1.easeOut",
        duration: 0.8,
      });

      gsap.to($otherImages, {
        opacity: 0,
      });
    });
  });
};

export default InitPreviewAnimation;