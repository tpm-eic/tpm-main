import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const Certs = () => {
  const certifications = useRef(null);
  const [location] = useLocation();
  console.log(location);

  useEffect(() => {
    if (location === "/certifications" && certifications.current) {
      certifications.current.scrollIntoView({ behavior: "smooth" });
    }
    // Add similar conditions for other sections
  }, [location]);
  return (
    <div ref={certifications}>
      <h3 className="self-start text-3xl my-2 underline">Certifications</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3" className="flex flex-col">
          <AccordionTrigger className="flex flex-row-reverse justify-end text-xl">
            {" "}
            <h4 className="ml-2">PMP Certification</h4>
          </AccordionTrigger>
          <AccordionContent>
            <iframe src="/PMP_certificate.pdf" width="100%" height="700px" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="flex flex-col">
          <AccordionTrigger className="flex flex-row-reverse justify-end text-xl">
            {" "}
            <h4 className="ml-2">Solidworks Certification</h4>
          </AccordionTrigger>
          <AccordionContent>
            <iframe src="/solidworks_cert.pdf" width="100%" height="700px" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Certs;
