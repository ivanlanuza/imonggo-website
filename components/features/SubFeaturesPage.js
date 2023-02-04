import NavBar from "components/core/NavBar";
import SubFeaturesHero from "./SubFeaturesHero";
import SubFeaturesContent from "components/features/SubFeaturesContent";
import FooterBar from "components/core/FooterBar";

import OrangeButton from "components/core/OrangeButton";

import ContentProof from "components/home/ContentProof";
import FreeTier from "components/pricing/FreeTier";
import PremiumTier from "components/pricing/PremiumTier";

export default function SubFeaturesPage({ data, hero }) {
  return (
    <div>
      <NavBar />
      <SubFeaturesHero hero={hero} />
      <div className="my-20">
        {data.map((item) => (
          <SubFeaturesContent
            title={item.title}
            icon={item.icon}
            text={item.text}
            key={item.id}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 justify-items-center my-20">
        <div className="block w-3/5">
          <div className="grid-cols-2 grid">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <div className="w-96 h-8 block float-left">
                <OrangeButton text="Try Imonggo for FREE!" url="/signup-now" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
}
