import NavBar from "components/core/NavBar";
import HeroPricing from "components/pricing/HeroPricing";
import FreeTier from "components/pricing/FreeTier";
import PremiumTier from "components/pricing/PremiumTier";
import FooterBar from "components/core/FooterBar";

export default function Pricing() {
  return (
    <div>
      <NavBar />
      <HeroPricing />
      <FreeTier />
      <PremiumTier />
      <FooterBar />
    </div>
  );
}
