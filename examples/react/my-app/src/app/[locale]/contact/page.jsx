import NavBar from "@/components/NavBar";
import CustomImage from "@/components/CustomImage";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <NavBar />
            <h1>Contact Page</h1>
            <CustomImage id={101} width={1000} />
            <ContactForm />
        </>
    )
}