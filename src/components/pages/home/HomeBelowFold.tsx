"use client";

import dynamic from "next/dynamic";
import LazySection from "@/src/components/LazySection";

// Below-the-fold: ssr: false = zero JS shipped until user scrolls near them
// Combined with LazySection, components only mount when near the viewport
const HomePageSteps = dynamic(() => import("@/src/components/homePageSteps/homePageSteps"), { ssr: false });
const HomePageJobMatchingSection = dynamic(() => import("@/src/components/homePageJobMatchingSection/homePageJobMatchingSection"), { ssr: false });
const HomePageCareerCTA = dynamic(() => import("@/src/components/homePageCareerCTA/homePageCareerCTA"), { ssr: false });
const HomePageBeforeAfter = dynamic(() => import("../../homePageBeforeAfter/homePageBeforeAfter"), { ssr: false });
const HomePageResultStats = dynamic(() => import("@/src/components/homePageResultStats/homePageResultStats"), { ssr: false });
const HomePageOfferLetters = dynamic(() => import("@/src/components/homePageOfferLetters/homePageOfferLetters"), { ssr: false });
const HomePageMilestones = dynamic(() => import("@/src/components/homePageMilestones/homePageMilestones"), { ssr: false });
const HomePageVideo = dynamic(() => import("@/src/components/homePageVideo/homePageVideo"), { ssr: false });
const HomePageWhyChooseFF = dynamic(() => import("@/src/components/homePageWhyChooseFF/homePageWhyChooseFF"), { ssr: false });
const HomePageHappyUsers = dynamic(() => import("@/src/components/homePageHappyUsers/homePageHappyUsers"), { ssr: false });
const HomePageFoundersNote = dynamic(() => import("@/src/components/homePageFoundersNote/homePageFoundersNote"), { ssr: false });
const HomePagePTNote = dynamic(() => import("@/src/components/homePagePTNote/homePagePTNote"), { ssr: false });
const HomePageFAQ = dynamic(() => import("@/src/components/homePageFAQ/homePageFAQ"), { ssr: false });
const YouTubeVideo = dynamic(() => import("../../youtubeVideo/youtubeVideo"), { ssr: false });
const HomePageDemoCTA = dynamic(() => import("@/src/components/homePageDemoCTA/homePageDemoCTA"), { ssr: false });

export default function HomeBelowFold() {
  return (
    <>
      {/* Each LazySection defers mounting until near viewport — massive JS savings */}
      <LazySection minHeight="400px">
        <HomePageSteps />
      </LazySection>

      <LazySection minHeight="300px">
        <HomePageJobMatchingSection />
      </LazySection>

      <LazySection minHeight="200px">
        <HomePageCareerCTA />
      </LazySection>

      <LazySection minHeight="400px">
        <HomePageBeforeAfter />
      </LazySection>

      <LazySection minHeight="300px">
        <HomePageResultStats />
      </LazySection>

      <LazySection minHeight="300px">
        <HomePageOfferLetters />
      </LazySection>

      <LazySection minHeight="200px">
        <HomePageMilestones />
      </LazySection>

      <LazySection minHeight="400px">
        <HomePageVideo />
      </LazySection>

      <LazySection minHeight="300px">
        <HomePageWhyChooseFF />
      </LazySection>

      <LazySection minHeight="400px">
        <HomePageHappyUsers />
      </LazySection>

      <LazySection minHeight="300px">
        <HomePageFoundersNote />
      </LazySection>

      <LazySection minHeight="200px">
        <HomePagePTNote />
      </LazySection>

      <LazySection minHeight="400px">
        <HomePageFAQ />
      </LazySection>

      <LazySection minHeight="400px">
        <YouTubeVideo />
      </LazySection>

      <LazySection minHeight="200px">
        <HomePageDemoCTA />
      </LazySection>
    </>
  );
}
