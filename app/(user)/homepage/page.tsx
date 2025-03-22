import { Metadata } from "next";
import HomeComponent from "@/app/(user)/homepage/components/home-component";

export const metadata: Metadata = {
  title: "Hiiiiiii",
  description: "Home page for Hiiiiiiii",
};

export default function HomePage() {
  return (
    <div>
      <HomeComponent />
    </div>
  );
}