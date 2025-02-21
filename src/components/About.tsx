import { Statistics } from "./Statistics";
import pilot from "../assets/icon.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
              About our {" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Product{" "} 
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Our smart document management system automates the entire document lifecycle, from scanning and intelligent sorting to categorization and key information extraction.  It streamlines workflows, reduces manual effort, and improves overall efficiency, allowing you to focus on your core business.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
