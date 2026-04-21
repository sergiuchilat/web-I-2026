import NavBar from "@/components/NavBar";
import CustomImage from "@/components/CustomImage";

export default function PhotosPage() {
    return (
        <>
            <NavBar />
            <h1>Photos Page</h1>
            <div>
                {[101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111].map(id => (
                    <CustomImage key={id} id={id} width={300} height={200} />
                ))}
            </div>
            <p>This is the Photos page of our React application.</p>
        </>
    )
}