import ImageGallery from "react-image-gallery";
import Image1 from "../../assets/tpm_1.webp";
import Image2 from "../../assets/tpm_2.webp";
import Image3 from "../../assets/tpm_3.webp";
import Image4 from "../../assets/tpm_4.webp";

const images = [
  {
    original: Image1,
    thumbnail: Image1,
  },
  {
    original: Image2,
    thumbnail: Image2,
  },
  {
    original: Image3,
    thumbnail: Image3,
  },
  {
    original: Image4,
    thumbnail: Image4,
  },
];

const Projects = () => {
  return (
    <div className="flex items-center flex-col">
      <h3 className="self-start text-3xl my-2">Project Examples</h3>
      <div className="w-[80%]">
      <ImageGallery lazyLoad items={images} />
      </div>
    </div>
  );
};

export default Projects;
