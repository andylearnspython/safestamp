import { IconDefinition, faCashRegister, faCertificate, faGavel, faMedal } from "@fortawesome/free-solid-svg-icons"
import { ContentSection, PageContainer } from "../components/ContentBlocks"
import { UShaped } from "../components/UShaped"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./applications.module.css"
import heroImage from "../assets/applications-hero.png"
import apparelFashion from "../assets/apparel.jpg"
import vapes from "../assets/vapes.jpg"
import electronics from "../assets/electronics.jpg"
import medicalDevices from "../assets/medical-devices.jpg"
import pharmaceuticals from "../assets/pharmaceuticals.jpg"
import foodBeverage from "../assets/food-beverage.jpg"
import babyProducts from "../assets/baby-products.jpg"
import cosmetics from "../assets/cosmetics.jpg"
import luxuryGoods from "../assets/luxury-goods.jpg"

/* The code defines two React functional components: `Application` and `Client`. */
function Application({ icon, title, alignment }: {
  icon: IconDefinition,
  title: string,
  alignment: "left" | "center" | "right"
}) {
  const alignmentClass = alignment === "left" ? styles.applicationLeft : alignment === "right" ? styles.applicationRight : styles.applicationCenter

  return <div className={`${styles.application} ${alignmentClass}`}>
    <FontAwesomeIcon icon={icon} className={styles.applicationIcon} />
    <div className={styles.applicationTitle}>{title}</div>
  </div>
}

function Client({ image, name }: { image?: string, name: string }) {
  return <div className={styles.client} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.clientName}>{name}</div>
  </div>
}

/**
 * This is a React component that renders a page with a hero image and sections for showcasing
 * different applications and industries.
 * @returns A React component that renders a page with a hero image and two content sections. The first
 * content section contains a heading, the hero image, and four Application components arranged in a
 * U-shape. The second content section contains a heading and a grid of Client components representing
 * different industries.
 */
export function Applications() {
  return <PageContainer>
    <ContentSection centered>
      <h1 className={styles.mainHeading}>Protect your product</h1>
      <h1 className={styles.mainHeading}>Enhance your brand</h1>
      <img src={heroImage} className={styles.heroImage} />
      <div className={styles.uShapedContainer}>
        <UShaped>
          <Application icon={faCashRegister} title="Revenue Recapture" alignment="left" />
          <Application icon={faMedal} title="Product Differentiation" alignment="center" />
          <Application icon={faCertificate} title="Brand Management" alignment="center" />
          <Application icon={faGavel} title="Regulatory Requirements" alignment="right" />
        </UShaped>
      </div>
    </ContentSection>
    <ContentSection centered wide>
      <h2>Industries</h2>
      <div className={styles.clientGrid}>
        <Client image={apparelFashion} name="Apparel and Fashion" />
        <Client image={vapes} name="Vapes" />
        <Client image={electronics} name="Electronics" />
        <Client image={medicalDevices} name="Medical Devices" />
        <Client image={pharmaceuticals} name="Pharmaceuticals and Over-the-Counter Medicines" />
        <Client image={foodBeverage} name="Food and Beverage" />
        <Client image={babyProducts} name="Baby Products" />
        <Client image={cosmetics} name="Cosmetics" />
        <Client image={luxuryGoods} name="Luxury Goods" />
      </div>
    </ContentSection>
  </PageContainer>
}