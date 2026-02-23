import CustomImage from "@/components/CustomImage";
import NavBar from "@/components/NavBar";

export default function AboutPage() {
    return (
        <>
            <NavBar />
            <h1>About Page</h1>
            <CustomImage id={102} width={100} height={100} />
            <p>This is the About page of our React application.</p>
        </>
    )
}