import ImageGallery from "react-image-gallery";
import Image1 from "../../assets/tpm_1.webp";
import Image2 from "../../assets/tpm_2.webp";
import Image3 from "../../assets/tpm_3.webp";
import Image4 from "../../assets/tpm_4.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const images = [
  {
    original: Image1,
    thumbnail: Image1,
    originalAlt: "Total Project Management Design Example",
    thumbnailAlt: "Total Project Management Design Example"
  },
  {
    original: Image2,
    thumbnail: Image2,
    originalAlt: "Total Project Management Design Example",
    thumbnailAlt: "Total Project Management Design Example"
  },
  {
    original: Image3,
    thumbnail: Image3,
    originalAlt: "Total Project Management Design Example",
    thumbnailAlt: "Total Project Management Design Example"
  },
  {
    original: Image4,
    thumbnail: Image4,
    originalAlt: "Total Project Management Design Example",
    thumbnailAlt: "Total Project Management Design Example"
  },
];

const Projects = () => {
  const projects = useRef(null);
  const [location] = useLocation();
  console.log(location);

  useEffect(() => {
    if (location === "/projects" && projects.current) {
      projects.current.scrollIntoView({ behavior: "smooth" });
    }
    // Add similar conditions for other sections
  }, [location]);
  return (
    <div ref={projects} className="flex items-center flex-col">
      <h3 className="self-start text-3xl my-2 underline">Project Examples</h3>
      <div className="w-[50%]">
        <ImageGallery lazyLoad items={images} />
      </div>
      <div className="w-full flex flex-col my-2 justify-between flex-wrap">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="flex flex-col">
            <AccordionTrigger className="flex flex-row-reverse justify-end text-xl">
              {" "}
              <h4 className="ml-2">MOBILE CMPRS STATION DIAGRAM</h4>
            </AccordionTrigger>
            <AccordionContent>
              <iframe src="/mobile_cmprs.pdf" width="100%" height="700px" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="flex flex-col">
            <AccordionTrigger className="flex flex-row-reverse justify-end text-xl">
              {" "}
              <h4 className="ml-2">SHEET METAL FRAME ASSY DIAGRAM</h4>
            </AccordionTrigger>
            <AccordionContent>
              <iframe
                src="/sheet_metal_frame.pdf"
                width="100%"
                height="700px"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;
