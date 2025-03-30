'use client';

import NavButton from "@/components/navbar";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { HandHelpingIcon, BuildingIcon, HeartIcon, PackageIcon, ArrowRight 
  } from "lucide-react";
import { useState, useEffect } from "react";
import { Marquee } from "@/components/magicui/marquee";
import img01 from "@/assets/01.jpg";
import img02 from "@/assets/02.jpg";
import img03 from "@/assets/03.jpg";
import img04 from "@/assets/04.jpg";
import img05 from "@/assets/05.jpg";


const Page = () => {
  const scrollToGetInvolved = () => {
    document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollMission = () => {
    document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' });
  };
  const images = [img01, img02, img03, img04, img05];
  

  const [count, setCount] = useState(0);
  const targetCount = 500;

  useEffect(() => {
    const duration = 1000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-warmth-50">
      <nav className="sticky top-0 z-50 bg-sage-50 w-full mx-auto p-4">
        <div className="text-center md:text-left">
          <NavButton/>
        </div>
      </nav>
      <div className=" w-full max-w-6xl mx-auto flex flex-col justify-center text-center pt-16 px-4">
        <div className="min-h-[90vh] space-y-8">
          <div className="space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-500 animate-fade-up">
              <HeartIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{count}+ lbs of food donated</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance max-w-3xl mx-auto text-foreground">
              We&apos;re connecting businesses with food banks to fight hunger
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              Help us reduce food waste and support our community.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-sage-500 hover:bg-sage-600 text-white transition-all duration-200 px-6"
              onClick={scrollToGetInvolved}
            >
            
              Partner With Us
              
            </Button>
            <Button
              variant="link"
              size="lg"
              className="border-sage-200 hover:bg-sage-100 hover:no-underline text-sage-500 transition-all duration-200 px-6"
              onClick={scrollMission}
            >
              Learn More <ArrowRight />
            </Button>
          </div>

          <Marquee className="[--duration:30s] py-8">
                {images.map((src, index) => (
                  <Image key={index} src={src} width={250} height={250} alt={`Image ${index+1}.jpg`} style={{objectFit: "cover"}} className="rounded-xl"/>
                ))}
          </Marquee>
        </div>
        
        <div className="text-center space-y-8 py-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Our Mission</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            After witnessing food waste at school and everyday life, we decided to challenge ourselves to make a genuine change in our community for a problem we truly cared about. 
            <br></br><br/>
            At Feed Forward, we hope to foster a community centered around charity and learn more about sustainable food production and distribution. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12" style={{ animationDelay: "400ms" }}>
          
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/50 border border-sage-100 transition-all duration-200 hover:shadow-lg hover:shadow-sage-100/50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage-100">
              <BuildingIcon className="w-6 h-6 text-sage-500" />
            </div>
            <h3 className="text-lg font-medium">Business Partners</h3>
            <p className="text-foreground/60 text-center">We work with you to bring surplus food straight to local food banks.</p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/50 border border-sage-100 transition-all duration-200 hover:shadow-lg hover:shadow-sage-100/50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage-100">
              <HandHelpingIcon className="w-6 h-6 text-sage-500" />
            </div>
            <h3 className="text-lg font-medium">Volunteers</h3>
            <p className="text-foreground/60 text-center">Help us collect and transport food before it goes to waste.</p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/50 border border-sage-100 transition-all duration-200 hover:shadow-lg hover:shadow-sage-100/50">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage-100">
              <HeartIcon className="w-6 h-6 text-sage-500" />
            </div>
            <h3 className="text-lg font-medium">Community Impact</h3>
            <p className="text-foreground/60 text-center">Together, we can create lasting change and support those in need!</p>
          </div>
        </div>
        
      </div>
      {/* About Us Section */}
      <section className="w-full bg-sage-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100">
                  <Image src="/tj.avif" width={1000} height={1000} alt="TJ" className="rounded-full"/>
                </div>
                <h3 className="text-xl font-medium">Tejas Nagarkar</h3>
                <p className="text-foreground/60">
                Hi! My name is Tejas Nagarkar and I&apos;m a junior at Monte Vista High School. I&apos;ve been involved in food service and food banks since the third grade, and giving back to my community has always been a big part of who I am. My intention in starting Feed Forward is to keep that passion alive and empower other students like me who want to make a real difference in their communities. Through this project, I hope to create unity among communities to create lasting change and help those in need! 
                </p>
              </div>
              <div className="space-y-4">
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100">
                  <Image src="/tom.avif" width={1000} height={1000} alt="Thomas" className="rounded-full h-20 w-20"/>
                </div>
                <h3 className="text-xl font-medium">Thomas Liu</h3>
                <p className="text-foreground/60">
                My name is Thomas Liu and I&apos;m junior at Monte Vista High School. This past year, I&apos;ve volunteered at multiple instructional gardens, which has gotten me interested in how my community utilizes and distributes local, healthy produce. This curiosity led to starting Feed Forward with TJ as both an opportunity to make an impact in my community but also to challenge myself to learn more about food waste and sustainable business practices. Happy to work with everyone!
                </p>
              </div>
              <div className="space-y-4">
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100">
                  <Image src="/dliu.avif" width={1000} height={1000} alt="Devin" className="rounded-full h-20 w-20"/>
                </div>
                <h3 className="text-xl font-medium">Devin Liu</h3>
                <p className="text-foreground/60">
                Hi, I&apos;m Devin, a junior at Monte Vista High School. In the past I&apos;ve volunteered and led service projects for food banks -- there, I learned a lot about food waste and realized the issue was about logistics/convenience, not necessarily the amount of food available. With Feed Forward, I hope to bring that experience and take it to a larger scale. I&apos;m excited to work with my community and other students to make a real difference!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Involved Section */}
      <section id="get-involved" className="w-full max-w-6xl mx-auto py-24 px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Interested?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
            <div className="p-6 rounded-2xl bg-white border border-sage-100 space-y-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-sage-100">
                <BuildingIcon className="w-6 h-6 text-sage-500" />
              </div>
              <h3 className="text-xl font-medium">For Businesses</h3>
              <p className="text-foreground/60">
                Partner with us to reduce food waste and make a positive impact.
              </p>
              <Button className="bg-sage-500 hover:bg-sage-600 text-white">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe6KLJJe6julD7_tP_YX2UKhYzv5STeA0yc0JETDniRHIQ4zQ/viewform">Register as a Business</a>
              </Button>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-sage-100 space-y-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-sage-100">
                <PackageIcon className="w-6 h-6 text-sage-500" />
              </div>
              <h3 className="text-xl font-medium">For Volunteers</h3>
              
              <p className="text-foreground/60">
                Help us make a difference in our community!
              </p>
              <Button className="bg-sage-500 hover:bg-sage-600 text-white">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfPRzhR38-kC-nzUETlmdNvkqWjNIqI7Vo1z_YigEfP_7aceQ/viewform">
                Register as a Volunteer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;