import { ContentSection, PageContainer } from "../components/ContentBlocks";
import awards from "../assets/awards.png";
import './aboutus.css'

/**
 * The AboutUs function returns a JSX component that displays information about SafeStamp Inc., a
 * veteran-owned company with an award-winning product on a mission to end counterfeiting.
 * @returns A React functional component called AboutUs, which returns a PageContainer containing a
 * ContentSection with information about SafeStamp Inc. and their mission to end counterfeiting. The
 * ContentSection includes a heading, paragraphs of text, and an image of awards.
 */
const AboutUs = () => {
    return <PageContainer>
        <ContentSection centered textSize="medium">
        <h1>
            About Us
        </h1>
        <p>
            SafeStamp Inc. is an <b>award-winning</b> company with an award-winning product on a
        mission to <b>end counterfeiting</b>.
        </p>
        <p></p>
        <p>
            <img width="1200px" src={awards}/>
        </p>
        <p></p>
        <p>
            SafeStamp Inc. is a <b>veteran-owned</b> firm with a mission to eliminate counterfeit pharmaceuticals by providing an <b>innovative, end-user friendly, and irreplicable</b> deep tech indicator for the product packaging. The indicator, which changes colors and reveals patterns when touched, allows users to easily distinguish legitimate products from counterfeits. It resists replication by counterfeiters through the employment of advanced nanomaterials; thus, it can serve as proof of authenticity for its use. 
        </p>
        <p> 
            We work with our clients to customize our patented, advanced nanomaterial to their anticounterfeiting and branding needs. We can manufacture tailor-made designs that stand out against competitors, engage end-consumers, and can be placed on all forms of packaging. 
        </p>
        <p>
            We manufacture in America but serve clients and partner with governments throughout the globe.
        </p>
        </ContentSection>
    </PageContainer>

};

export default AboutUs;