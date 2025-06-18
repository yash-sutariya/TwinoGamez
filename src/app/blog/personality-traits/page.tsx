import type { Metadata } from "next";
import PersonalityTraits from "./personality-traits";

export const metadata: Metadata = {
  title: "Exploring Personality Traits : 5 types of Personality traits",
  description: "Gain insights into the five major personality traits and how they influence human behavior. Understand the impact of these traits on relationships, work, and well-being.", 
  keywords: "personality traits, neuroticism, extraversion, openness to experience, agreeableness, conscientiousness",
};

export default function GomziConsultingPage() {
  return (
    <>
      <PersonalityTraits />
    </>
  );
}
