import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import CustomImage from "@/components/CustomImage";

export default function Home() {
  return (
    <>
      <>
        <NavBar />
        <h1>Hello World from my React App!</h1>
        <div>REACT App. <span>I am a span</span></div>
        <CustomImage id={100} height={500} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorum. Quisquam ipsam qui nemo laudantium quos voluptatem dolorum exercitationem nam! Veritatis, molestias magnam. Quaerat velit consectetur hic consequuntur labore explicabo adipisci. Labore obcaecati architecto praesentium doloribus, quod culpa neque quisquam maiores asperiores velit saepe ex voluptatibus consequatur beatae fugit sequi exercitationem accusantium aperiam quo error enim aliquam! Itaque ad perferendis, nostrum tenetur expedita inventore facere eveniet omnis, quaerat mollitia sint a amet magnam. Quisquam aspernatur quis, molestias doloremque facilis sit ratione nihil quod laudantium ea nulla, maxime, culpa nam cupiditate iure recusandae soluta totam! Veritatis suscipit debitis beatae, ex autem corrupti. Natus amet iusto consectetur. Porro sequi, minus veritatis consequuntur beatae neque architecto dicta quasi quidem provident eum exercitationem, nemo nam? Impedit dolor ad debitis, aspernatur temporibus officia laborum ratione earum animi consequuntur laudantium ipsa magnam repudiandae sit repellat quae perspiciatis excepturi consequatur fuga dolore tempora nihil fugiat eaque. Aspernatur delectus voluptate alias repellendus sunt, velit accusantium voluptatibus est aliquam nemo perferendis neque assumenda odio, cumque saepe culpa nesciunt officia quisquam dolores iure veniam at non eius suscipit? Distinctio inventore optio odit similique hic fugit at, pariatur dignissimos voluptates ex, facere amet temporibus aspernatur nostrum numquam magnam veritatis consequatur impedit.</p>
      </>
      <>
      </>
    </>
  );
}
