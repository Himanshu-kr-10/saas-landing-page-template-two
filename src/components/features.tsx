import Card from "./ui/card";
import Tag from "./ui/tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Avatar from "./ui/avatar";
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import Key from "./ui/key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
      <section className="py-24">
        <div className="container">
          <div className="flex justify-center">
            <Tag>Features</Tag>
          </div>
          <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
              Where power meets{" "}<span className="text-lime-400">simplicity</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
            <Card 
              title="Real-time collaboration"
              description="Work together seamlessly with conflict-free team editing"
              className="md:col-span-2 lg:col-span-1 group"
            >
              <div className="aspect-video flex items-center justify-center">
                <Avatar className="z-40">
                  <Image src={avatar1} alt="Avatar 1" className="rounded-full"/>
                </Avatar>
                <Avatar className="-ml-6 border-indigo-500 z-30">
                  <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
                </Avatar>
                <Avatar className="-ml-6 border-amber-500 z-20">
                  <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
                </Avatar>
                <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                  <div className="size-full bg-neutral-700 rounded-full flex items-center justify-center relative">
                    <Image src={avatar4} alt="Avatar 4" className="absolute rounded-full size-full opacity-0 group-hover:opacity-100 transition" />
                    <Ellipsis className="size-8"/>
                  </div>
                </Avatar>
              </div>
            </Card>
            <Card 
              title="Interactive prototyping"
              description="Engage your client with prototypes that react to user actions"
              className="md:col-span-2 lg:col-span-1 group"
            >
              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">
                  You can achieve{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                    <span>incredible</span>
                    <video 
                      src={"/gif-incredible.mp4"} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl showdow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500"
                    />
                  </span>{" "} 
                  growth in a year.
                </p>
              </div>
            </Card>
            <Card 
              title="Keyboard Quick Actions"
              description="Poweful commands to help you create designs more quickly"
              className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
            >
              <div className="aspect-video flex items-center justify-center gap-4">
                <Key className="w-28 outline-transparent group-hover:outline-lime-400 outline outline-2 outline-offset-4 transition-all duration-500 group-hover:translate-y-1">Shift</Key>
                <Key className="outline-transparent group-hover:outline-lime-400 outline outline-2 outline-offset-4 transition-all duration-500 group-hover:translate-y-1 delay-150">alt</Key>
                <Key className="outline-transparent group-hover:outline-lime-400 outline outline-2 outline-offset-4 transition-all duration-500 group-hover:translate-y-1 delay-300">C</Key>
              </div>
            </Card> 
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center ">
            {features.map((feature) => (
              <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-300">
                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl ">&#10038;</span>
                <span className="font-medium md:text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
