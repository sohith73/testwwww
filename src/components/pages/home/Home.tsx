"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Above-the-fold: load eagerly for instant display
import Navbar from "@/src/components/navbar/navbar";
import HeroSection from "@/src/components/heroSection/heroSection";
import HomePageStatsCards from "@/src/components/homePageStatsCards/homePageStatsCards";
import Footer from "@/src/components/footer/footer";

// Below-the-fold: lazy load for faster initial page render
const HomePageSteps = dynamic(() => import("@/src/components/homePageSteps/homePageSteps"), { ssr: true });
const HomePageJobMatchingSection = dynamic(() => import("@/src/components/homePageJobMatchingSection/homePageJobMatchingSection"), { ssr: true });
const HomePageCareerCTA = dynamic(() => import("@/src/components/homePageCareerCTA/homePageCareerCTA"), { ssr: true });
const HomePageBeforeAfter = dynamic(() => import("../../homePageBeforeAfter/homePageBeforeAfter"), { ssr: true });
const HomePageResultStats = dynamic(() => import("@/src/components/homePageResultStats/homePageResultStats"), { ssr: true });
const HomePageOfferLetters = dynamic(() => import("@/src/components/homePageOfferLetters/homePageOfferLetters"), { ssr: true });
const HomePageMilestones = dynamic(() => import("@/src/components/homePageMilestones/homePageMilestones"), { ssr: true });
const HomePageVideo = dynamic(() => import("@/src/components/homePageVideo/homePageVideo"), { ssr: true });
const HomePageWhyChooseFF = dynamic(() => import("@/src/components/homePageWhyChooseFF/homePageWhyChooseFF"), { ssr: true });
const HomePageHappyUsers = dynamic(() => import("@/src/components/homePageHappyUsers/homePageHappyUsers"), { ssr: true });
const HomePageFoundersNote = dynamic(() => import("@/src/components/homePageFoundersNote/homePageFoundersNote"), { ssr: true });
const HomePagePTNote = dynamic(() => import("@/src/components/homePagePTNote/homePagePTNote"), { ssr: true });
const HomePageFAQ = dynamic(() => import("@/src/components/homePageFAQ/homePageFAQ"), { ssr: true });
const YouTubeVideo = dynamic(() => import("../../youtubeVideo/youtubeVideo"), { ssr: true });
const HomePageDemoCTA = dynamic(() => import("@/src/components/homePageDemoCTA/homePageDemoCTA"), { ssr: true });

const Home = () => {
  const pathname = usePathname();

  useEffect(() => {
    const isHomePage = pathname === "/" || pathname === "/en-ca";

    if (isHomePage) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePageStatsCards />
      <HomePageSteps />
      <HomePageJobMatchingSection />
      <HomePageCareerCTA />
      <HomePageBeforeAfter />
      <HomePageResultStats />
      <HomePageOfferLetters />
      <HomePageMilestones />
      <HomePageVideo />
      <HomePageWhyChooseFF />
      <HomePageHappyUsers />
      <HomePageFoundersNote />
      <HomePagePTNote />
      <HomePageFAQ />
      <YouTubeVideo />
      <HomePageDemoCTA />
      <Footer />
    </>
  );
};

export default Home;
