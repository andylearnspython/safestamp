import { PropsWithChildren } from "react"
import { ContentSection, ImageBackground, PageContainer } from "../components/ContentBlocks"
import computer from "../assets/computer.jpg"
import fashion from "../assets/fashion.jpg"
import beverage from "../assets/beverage.jpg"
import './clients.css';

function Client({ children, backgroundImage }: PropsWithChildren<{
  backgroundImage: string
}>) {
  return <ImageBackground backgroundImage={backgroundImage}>
    <ContentSection className="client" centered textSize="medium">
      {children}
    </ContentSection>
  </ImageBackground>
}

/**
 * The Clients function returns a page container with sections showcasing the various industries and
 * products that can be protected from counterfeiting.
 * @returns A React component called Clients is being returned. It renders a PageContainer component
 * that contains three Client components, each with a different background image and text describing
 * the industries and products that can be protected from counterfeiting.
 */
const Clients = () => {
  return <PageContainer>
    <ContentSection centered textSize="large">
      We are so much more than pharma. Here are just a few examples of the many products and industries we can protect.
    </ContentSection>
    <Client backgroundImage={computer}>
      <h2>Technology</h2>
      <div>We can protect phones, laptops, and manufacturing components alike.</div>
    </Client>
    <Client backgroundImage={fashion}>
      <h2>Consumer Goods</h2>
      <div>From shoes to sunglasses, everyday items are counterfeited at a startling rate.</div>
    </Client>
    <Client backgroundImage={beverage}>
      <h2>Food and Beverages</h2>
      <div>From formula for newborns to wines that have aged for decades, we can protect food and beverage products consumed around the world.</div>
    </Client>
  </PageContainer>
}
  
export default Clients