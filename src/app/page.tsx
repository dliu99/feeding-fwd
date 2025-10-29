'use client';

import NavButton from "@/components/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { HandHelpingIcon, BuildingIcon, HeartIcon, PackageIcon, ArrowRight 
  } from "lucide-react";
import { useState, useEffect } from "react";
import { Marquee } from "@/components/magicui/marquee";


const Page = () => {
  const scrollToGetInvolved = () => {
    document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollMission = () => {
    document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [count, setCount] = useState(0);
  const targetCount = 8000;

  const [images, setImages] = useState<string[]>([]);
  
  // Calculate meals provided
  const meals = 6600;//Math.round(targetCount / 1.2);

  useEffect(() => {
    const imageFilenames = [
      "01.webp",
      "02.webp",
      "03.webp",
      "04.webp",
      "05.webp",
      "06.webp",
      "07.webp",
      "08.webp",
      
      // Add more filenames as needed
    ];
    setImages(imageFilenames.map(name => `/assets/${name}`));
  }, []);

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
        </div>
       

        <div className="text-center space-y-8 py-12" id="our-mission">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground" >Our Mission</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            After witnessing food waste at school and everyday life, we decided to challenge ourselves to make a genuine change in our community for a problem we truly cared about. 
            <br></br><br/>
            At Feed Forward, we hope to foster a community centered around charity and learn more about sustainable food production and distribution. 
          </p>
        </div>
        <section className="py-12  w-full">
          <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-sage-500">7+</h3>
              <p className="text-foreground/60">Markets</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-sage-500">4</h3>
              <p className="text-foreground/60">Chapters</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-sage-500">80+</h3>
              <p className="text-foreground/60">Volunteers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-sage-500">{targetCount.toLocaleString()}+</h3>
              <p className="text-foreground/60">Pounds of Food Donated</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-sage-500">{meals.toLocaleString()}+</h3>
              <p className="text-foreground/60">Meals Provided</p>
            </div>
          </div>
          </div>
        </section>
        
        {/* Logos Section */}
        <section className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Marquee className="[--duration:30s] py-8" reverse={true}>
              <Link href="https://www.openheartkitchen.org/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-48 h-24">
                  <Image src="/assets/ohk.webp" width={200} height={200} alt="Open Heart Kitchen" className="max-w-full max-h-full object-contain cursor-pointer"/>
                </div>
              </Link>
              <Link href="https://www.pcfma.org/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-48 h-24">
                  <Image src="/assets/pcfma.webp" width={200} height={200} alt="Pacific Coast Farmers Market Association" className="max-w-full max-h-full object-contain cursor-pointer"/>
                </div>
              </Link>
              <Link href="https://www.slzhelp.org/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-48 h-24">
                  <Image src="/assets/slz.webp" width={200} height={200} alt="San Lorenzo Family Help Center" className="max-w-full max-h-full object-contain cursor-pointer"/>
                </div>
              </Link>
              <Link href="https://www.tcvfoodbank.org/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-48 h-24">
                  <Image src="/assets/tcv.webp" width={100} height={200} alt="TCV Food Bank and Mobile Pantry" className="max-w-full max-h-full object/contain cursor-pointer"/>
                </div>
              </Link>
              <Link href="https://www.trivalleyhaven.org/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-48 h-24">
                  <Image src="/assets/tvh.webp" width={200} height={200} alt="Tri Valley Haven" className="max-w-full max-h-full object-contain cursor-pointer"/>
                </div>
              </Link>
            </Marquee>
          </div>
        </section>
        
        
      
      {/* About Us Section */}
      <section className="w-full bg-sage-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Meet the Team</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div>
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100 mb-4">
                  <Image src="/tj.avif" width={1000} height={1000} alt="TJ" className="rounded-full h-20 w-20 object-cover"/>
                </div>
                <h3 className="text-xl font-medium">Tejas Nagarkar</h3>
                <p className="text-foreground/60 mt-1">
                  Co-Founder
                </p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100 mb-4">
                  <Image src="/tom.avif" width={1000} height={1000} alt="Thomas" className="rounded-full h-20 w-20 object-cover"/>
                </div>
                <h3 className="text-xl font-medium">Thomas Liu</h3>
                <p className="text-foreground/60 mt-1">
                  Co-Founder
                </p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100 mb-4">
                  <Image src="/dliu.avif" width={1000} height={1000} alt="Devin" className="rounded-full h-20 w-20"/>
                </div>
                <h3 className="text-xl font-medium">Devin Liu</h3>
                <p className="text-foreground/60 mt-1">
                  Development
                </p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100 mb-4">
                  <Image src="/braden.avif"  alt="Braden" width={1000} height={1000} className="rounded-full h-20 w-20 object-cover"/>
                </div>
                <h3 className="text-xl font-medium">Braden Luu</h3>
                <p className="text-foreground/60 mt-1">
                  Outreach
                </p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100 mb-4">
                  <Image src="/scott.avif"  alt="Scott" width={1000} height={1000} className="rounded-full h-20 w-20 object-cover"/>
                </div>
                <h3 className="text-xl font-medium">Scott Wang</h3>
                <p className="text-foreground/60 mt-1">
                  Operations
                </p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-sage-100 mb-4">
                  <Image src="/orion.avif"  alt="Orion" width={1000} height={1000} className="rounded-full h-20 w-20 object-cover"/>
                </div>
                <h3 className="text-xl font-medium">Orion Olmsted</h3>
                <p className="text-foreground/60 mt-1">
                  Director @ Fremont
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Involved Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 max-w-6xl" style={{ animationDelay: "400ms" }}>
          
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
      <section id="get-involved" className="w-full max-w-6xl mx-auto py-24 px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Interested?</h2>
          <h1 className="text-lg text-foreground/60">Contact us via email at feedingforward2024@gmail.com</h1>
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
                Contact us via email and help us make a difference in our community!
              </p>
              <Button className="bg-sage-500 hover:bg-sage-600 text-white">
                <a target="_blank" href="mailto:feedingforward2024@gmail.com">
                Contact Us
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