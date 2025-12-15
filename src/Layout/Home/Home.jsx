import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import FeatureProducts from "../../Components/FeaturePeoducts/FeatureProducts";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FeatureProducts></FeatureProducts>
            <PromoBanner></PromoBanner>
            <ProductsSection></ProductsSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;