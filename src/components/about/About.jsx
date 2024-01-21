import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectComplete from "../../assets/project_complete.svg";
import ProjectTeam from "../../assets/project_team.svg";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const About = () => {
  const [location] = useLocation();

  return (
    <div className="w-full">
      <Card className="flex pt-4 w-full mb-4">
        <CardHeader className="w-[25%]">
          <img src={ProjectComplete} alt="Project Complete" />
        </CardHeader>
        <CardContent className="w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl mb-2">Our Experience</h3>
          <p>
            Boasting over 25 years of industry leadership in manufacturing, we
            redefine the art of turning visions into tangible excellence. Our
            seamless process, marked by minimal revisions and expedited
            production, ensures impeccable quality in every product. At the
            heart of our approach is a fusion of advanced computer-aided design
            and rich manufacturing acumen, significantly reducing waste and
            elevating efficiency. Committed to the ethos of unparalleled
            perfection, we eagerly anticipate collaborating on your next
            groundbreaking project, promising a partnership where innovation
            meets mastery.
          </p>
        </CardContent>
      </Card>
      <Card className="flex pt-4 mb-4 w-full flex-row-reverse">
        <CardHeader className="w-[25%]">
          <img src={ProjectTeam} alt="Project Team" />
        </CardHeader>
        <CardContent className="w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl mb-2">Our Service</h3>
          <p>
            At the heart of our consulting firm lies a mastery in comprehensive
            project management and state-of-the-art Computer Aided Drafting and
            Design. Our team of certified project managers and CAD experts
            infuses every project with unmatched passion and enthusiasm. We
            transform concepts into meticulously detailed prints, ensuring
            seamless execution from start to finish. Whether it's precise
            estimation, rigorous quality assurance, or leveraging the latest in
            project management technology, our bespoke approach has every aspect
            of your project impeccably covered.
          </p>
        </CardContent>
      </Card>
      <div className="bg-primary text-white flex items-center p-4">
        <Link href="/contact">
          <Button
            variant="outline"
            className="mr-4 text-3xl text-dark hover:text-primary"
          >
            Contact Us
          </Button>
        </Link>
        <p className="text-xl">
          For over 25 years, our dedication to detail has been unwavering. We
          are committed to providing personalized guidance and attention to each
          of our clients. Seeking a strategic alliance or a unique skill set?
          Contact us. Together, we'll craft and perfect your pathway to success.
          Just as we've grown and evolved through collaboration, we're here to
          help you do the same.
        </p>
      </div>
    </div>
  );
};

export default About;
