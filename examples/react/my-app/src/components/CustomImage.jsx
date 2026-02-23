export default function CustomImage({id, width, height}) {
    return (
        <div className="custom-image-container">
            <img src={`https://placedog.net/${width || 400}x${height || 200}?id=${id}`} alt="Custom Image" />
        </div>
    )
}