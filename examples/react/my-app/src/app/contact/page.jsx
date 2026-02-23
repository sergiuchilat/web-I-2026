import NavBar from "@/components/NavBar";
import CustomImage from "@/components/CustomImage";

export default function ContactPage() {
    return (
        <>
            <NavBar />
            <h1>Contact Page</h1>
            <CustomImage id={101} width={1000} />
            <p>This is the Contact page of our React application.</p>
        </>
    )
}