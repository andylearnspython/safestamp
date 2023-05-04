import React from "react";
import { ContentSection, PageContainer } from "../components/ContentBlocks";
import "./socialimpact.css"

function NewsStory({ title, author, url }: {
    title: string,
    author: string,
    url: string
  }) {
    return <div>
      <h3><a href={url} target="_blank">{title}</a></h3>
      <p>{author}</p>
    </div>
  }





const SocialImpact = () => {
return <PageContainer>
    <ContentSection textSize="medium" centered>
    {/*<div class="box">*/}
    {/*    <div>*/}
    {/*        <p className="text"> <b>Globally, counterfeit drugs cause 1,000,000 annual deaths annually (Interpol)</b>*/}
    {/*        </p>*/}
    {/*    </div>*/}
    {/*    <div>*/}
    {/*        <p className="text"> <b>~$200BN in lost pharma sales (Havocscope)</b>*/}
    {/*        </p>*/}
    {/*    </div>*/}
    {/*    <div>*/}

    {/*    </div>*/}
    {/*</div>*/}
        <h2>Impact to Individuals</h2>
        <div className="square">
            <p className="text"> <b>Globally, counterfeit drugs cause 1,000,000 annual deaths annually (Interpol)
            </b>
            </p>
        </div>
    <div className="square">
        <p className="text"> <b>Fake medicines kill almost 500,000 sub-Saharan Africans a year (UNODC)
        </b>
        </p>
    </div>
    </ContentSection>


    <ContentSection textSize="medium" centered>
        <h2>Impact to Companies</h2>
            <h4>Loss of Revenue</h4>
            <div className="square">
                <p className="text"> <b>~$200BN in total lost pharma sales globally (Havocscope)
                </b>
                </p>
            </div>

            <div className="square">
                <p className="text"> <b>In 2003, the turnover from India’s pharmaceutical industry was
                    estimated at USD 4.2 billion; of this, counterfeiters produced an estimated USD 1 billion (OECD, 2016).
                </b>
                </p>
            </div>
        <h4>Increased Costs of Security Measures</h4>
        <div className="square">
            <p className="text"> <b>The costs of introducing a unique identifier for manufacturers and parallel
                importers have been estimated by European Commission at EUR 50 to 320 million annually.
            </b>
            </p>
        </div>
        <div className="square">
            <p className="text"> <b>The estimation of costs for the entire sector (including manufacturers, wholesalers,
                retailers and repositories systems) ranges between EUR 200 and 800 million.
            </b>
            </p>
        </div>
        <h4>Damage to Brands</h4>
        <div className="square">
            <p className="text"> <b>According to OECD, firm may be subject to liability if consumers are harmed by
                counterfeit versions of their drugs.
            </b>
            </p>
        </div>
        <h4>Undermining Innovation</h4>
        <div className="square">
            <p className="text"> <b> Less than 10% of global health research expenditures are directed to conditions
                that account for more than 90% of preventable mortality – conditions that are prevalent in developing economies.
            </b>
            </p>
        </div>
    </ContentSection>

    <ContentSection textSize="medium">
      <h2>Related News</h2>
      <NewsStory
        title="Counterfeit and Pirated Goods Get Boost From Pandemic, New Report Confirms"
        author="Europol"
        url="https://www.europol.europa.eu/media-press/newsroom/news/counterfeit-and-pirated-goods-get-boost-pandemic-new-report-confirms"
      />
      <NewsStory
        title="The Counterfeit Problem and How Retailers Can Fight Back in 2020"
        author="Forbes Technology Council"
        url="https://www.forbes.com/sites/forbestechcouncil/2020/03/17/the-counterfeit-problem-and-how-retailers-can-fight-back-in-2020/#7fb35d261f32"
      />
      <NewsStory
        title="Interpol Seizes $14m in Fake #COVID19 Pharma Goods"
        author="Info Security Group"
        url="https://www.infosecurity-magazine.com/news/interpol-seizes-14-m-fake-covid/"
      />
      <NewsStory
        title="CBP Officers Seize Fake COVID-19 Test Kits at LAX"
        author="U.S. Customs and Border Protection"
        url="https://www.cbp.gov/newsroom/national-media-release/cbp-officers-seize-fake-covid-19-test-kits-lax"
      />
    </ContentSection>
    </PageContainer>
};

export default SocialImpact
