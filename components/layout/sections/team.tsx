
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import abhijit from '@/app/assets/AbhijitMishra.jpg'
import jayashree from '@/app/assets/jayashridas.jpg'
import bhabani from '@/app/assets/bhabaninandi.svg'
import UserPlace from '@/app/assets/User.jpg'

interface TeamProps {
  imageUrl: any;
  firstName: string;
  lastName: string;
  positions: string[];
  
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:jayashree,
      firstName: "Jayashri",
      lastName: "Das",
      positions: ["Founder", "Digital Marketing Manager"],
      
    },
    {
      imageUrl: abhijit,
      firstName: "Abhijit",
      lastName: "Mishra",
      positions: ["Salesforce Developer"],
      
    },
    
    {
      imageUrl: bhabani,
      firstName: "Bhabani",
      lastName: "Nandi",
      positions: ["Social Media Manager"],
      
    },
    {
      imageUrl: UserPlace,
      firstName: "Subhankar",
      lastName: "",
      positions: ["Website & Mobile App Developer", "UI/UX Designer"],
      
    },
    
  ];


  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8 flex flex-col justify-center items-center">
        <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
          Team
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
        Meet Our Core Team Members
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}
{/* 
              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter> */}
            </Card>
          )
        )}
      </div>
    </section>
  );
};
