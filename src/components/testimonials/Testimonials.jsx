import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = useRef(null);
  const [location] = useLocation();
  console.log(location);

  useEffect(() => {
    if (location === "/testimonials" && testimonials.current) {
      testimonials.current.scrollIntoView({ behavior: "smooth" });
    }
    // Add similar conditions for other sections
  }, [location]);
  return (
    <div ref={testimonials}>
      <h3 className="self-start text-3xl my-2 underline">Testimonials</h3>
      <div className="flex">
        <Card className="max-w-[350px] mr-4">
          <CardHeader>
            <CardTitle>Dave Myers</CardTitle>
            <CardDescription>
              Director of Business Operations UCT
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              "Michael's in depth knowledge of business and project management,
              combined with his innate feel for customer interaction was
              instrumental in the execution of multiple complex new product
              introductions in our factory."
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-[350px] mr-2">
          <CardHeader>
            <CardTitle>Tim Provencher</CardTitle>
            <CardDescription>VP of Engineering CTS</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              "Michael will be able to manage any project within his skill set
              to a very high degree of quality and satisfaction"
            </p>
          </CardContent>
        </Card>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3" className="flex flex-col">
          <AccordionTrigger className="flex flex-row-reverse justify-end text-xl">
            {" "}
            <h4 className="ml-2">Dave Myers Letter of Reccomendation</h4>
          </AccordionTrigger>
          <AccordionContent>
            <iframe src="/dave_rec_letter.pdf" width="100%" height="700px" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="flex flex-col">
          <AccordionTrigger className="flex flex-row-reverse justify-end text-xl">
            {" "}
            <h4 className="ml-2">Tim Provencher Letter of Reccomendation</h4>
          </AccordionTrigger>
          <AccordionContent>
            <iframe src="/tim_rec_letter.pdf" width="100%" height="700px" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Testimonials;
