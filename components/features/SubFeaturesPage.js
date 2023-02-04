import NavBar from "components/core/NavBar";
import SubFeaturesHero from "./SubFeaturesHero";
import SubFeaturesContent from "components/features/SubFeaturesContent";
import FooterBar from "components/core/FooterBar";

import OrangeButton from "components/core/OrangeButton";
import SignUpFooter from "components/core/SignUpFooter";

export default function SubFeaturesPage({ data, hero }) {
  return (
    <div className="font-sans">
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

      <SignUpFooter />
      <FooterBar />
    </div>
  );
}
