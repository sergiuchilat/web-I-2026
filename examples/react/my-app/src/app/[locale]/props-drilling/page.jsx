import NavBar from "@/components/NavBar";
import Level1 from "@/components/props-drilling/Level1";

export default function PropsDrillingPage() {
  return (
    <div>
      <h1>Props Drilling Page</h1>
      <NavBar />
      <p>This page demonstrates props drilling in React.</p>
      <Level1 counter={100} />  
    </div>
  );
}