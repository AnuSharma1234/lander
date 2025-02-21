import { cn } from "@/lib/utils";
import Marquee from "@/components/marquee.tsx";

const reviews = [
    {
        "name": "Amit Sharma",
        "username": "@AmitBizOps",
        "body": "Saves us hours! Sorting and extraction are seamless.",
        "img": "https://randomuser.me/api/portraits/men/15.jpg"
      },
      {
        "name": "Neha Verma",
        "username": "@Neha_Digital",
        "body": "No more manual sorting—efficiency at its best!",
        "img": "https://randomuser.me/api/portraits/women/18.jpg"
      },
      {
        "name": "Rajat Khanna",
        "username": "@Rajat_Tech",
        "body": "Instant key info extraction. Super useful!",
        "img": "https://randomuser.me/api/portraits/men/28.jpg"
      },
      {
        "name": "Pooja Singh",
        "username": "@Pooja_Organized",
        "body": "Smart automation that boosts productivity!",
        "img": "https://randomuser.me/api/portraits/women/35.jpg"
      },
      {
        "name": "Vivek Agarwal",
        "username": "@VivekEfficient",
        "body": "AI-powered sorting makes document handling easy.",
        "img": "https://randomuser.me/api/portraits/men/40.jpg"
      },
      {
        "name": "Ananya Rao",
        "username": "@AnanyaAI",
        "body": "Seamless integration, zero manual effort.",
        "img": "https://randomuser.me/api/portraits/women/45.jpg"
      },
      {
        "name": "Sandeep Mehta",
        "username": "@SandeepBiz",
        "body": "Optimized operations with smart workflows!",
        "img": "https://randomuser.me/api/portraits/men/48.jpg"
      },
      {
        "name": "Ritika Gupta",
        "username": "@Ritika_Optimized",
        "body": "Scanning to approval—fully automated!",
        "img": "https://randomuser.me/api/portraits/women/50.jpg"
      },
      {
        "name": "Arjun Nair",
        "username": "@ArjunStreamlined",
        "body": "No more lost documents—smooth workflows.",
        "img": "https://randomuser.me/api/portraits/men/55.jpg"
      },
      {
        "name": "Tanya Malhotra",
        "username": "@TanyaProductive",
        "body": "Super intuitive and highly efficient!",
        "img": "https://randomuser.me/api/portraits/women/58.jpg"
      }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-200 bg-white hover:bg-gray-50 shadow-lg transition duration-300",
        "dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-md",
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className="rounded-full"
          width={40}
          height={40}
          alt={`Avatar of ${name}`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-800 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            @{username}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};


export function Testimonials() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden py-[72px] md:shadow-xl">
      {/* First Marquee */}
      <Marquee pauseOnHover className="w-full flex gap-6 [--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      {/* Second Marquee (Reverse Direction) */}
      <Marquee reverse pauseOnHover className="w-full flex gap-6 [--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient Mask Effect on Sides */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-transparent"></div> */}
    </div>
  );
}
