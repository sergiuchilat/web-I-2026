import CustomImage from "@/components/CustomImage";
import NavBar from "@/components/NavBar";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <>
            <NavBar />
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
            <CustomImage id={102} width={100} height={100} />
            <p>This is the About page of our React application.</p>
        </>
    )
}