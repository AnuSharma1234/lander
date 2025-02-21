import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/smartCategorization.jpeg";
import image3 from "../assets/automatedSorting.jpeg";
import image4 from "../assets/intelligentScanning.jpeg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Intelligent Scanning",
    description:"Our Intelligent Scanning feature goes beyond basic document digitization. It's designed to capture information accurately and efficiently, setting the stage for seamless document processing.",
    image: image4,
  },
  {
    title: "Automated Sorting",
    description:
      "Our Automated Sorting feature takes the hassle out of manually organizing documents.  It intelligently analyzes scanned documents and automatically routes them to the correct locations based on predefined rules or content analysis.",
    image: image3,
  },
  {
    title: "Smart Categorization",
    description:
      "Our Smart Categorization feature takes document organization to the next level.  It goes beyond simple sorting by intelligently categorizing documents into predefined folders or categories, making them easy to find and retrieve.",
    image: image,
  },
];

const featureList: string[] = [
  "Intelligent Scanning",
  "Automated Sorting",
  "Smart Categorization",
  "Customizable Workflows",
  "Analytics",
  "User-Friendly",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
