import Button from "../general-use/button";
import { FaCheck, FaTimes } from "react-icons/fa";
import FreePackageTag from "./images/subscriptionPlan/freePlanTag.svg";
import BasicPackageTag from "./images/subscriptionPlan/BasicPlanTag.svg";
import PremiumPackageTag from "./images/subscriptionPlan/PremiumPlantag.svg";
import Coin from "./images/subscriptionPlan/coin.svg";

const plans = [
  {
    name: "Free plan",
    price: "Free",
    features: [
      "3 user requests",
      "10 downloads per day",
      "Daily content updates",
      "Fully editable files",
    ],
  },
  {
    name: "Basic plan",
    price: "$10/month",
    features: [
      "15 user requests",
      "100 downloads per day",
      "Daily content updates",
      "20 Editable Files",
    ],
  },
  {
    name: "Premium plan",
    price: "$30/month",
    features: [
      "Unlimited user requests",
      "Unlimited downloads",
      "Daily content updates",
      "Fully Editable Files",
    ],
  },
];

const TechJourney = () => {
  return (
    <section>
      <header className="text-center">
        <h2 className="font-bold my-4 text-secondaryColor text-xl">
          Ready to Begin Your Tech Journey?
        </h2>
        <p className=" text-secondaryColor text-base">
          Choose a package to get started
        </p>
      </header>

      <article className="flex flex-wrap justify-center my-12 gap-12">
        {plans.map((plan, planIndex) => (
          <article
            key={planIndex}
            className="flex flex-col gap-4 mb-8 shadow-xl px-4 py-8 rounded-2xl relative"
          >
            <figure className="absolute top-0 left-5 flex items-center">
              <img src={Coin} alt="" />
              {plan.name === "Free plan" && <img src={FreePackageTag} alt="" />}
              {plan.name === "Basic plan" && (
                <img src={BasicPackageTag} alt="" />
              )}
              {plan.name === "Premium plan" && (
                <img src={PremiumPackageTag} alt="" />
              )}
            </figure>

            <div className="text-secondaryColor mt-24">
              <span className="uppercase block">{plan.name}</span>
              <span className="font-semibold">{plan.price}</span>
            </div>
            <ul className="list-none pl-0">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center my-2 py-1">
                  {plan.name === "Free plan" &&
                  featureIndex === plan.features.length - 1 ? (
                    <FaTimes className="text-red-500 mr-2" />
                  ) : (
                    <FaCheck className="text-green-500 mr-2" />
                  )}
                  {feature}
                </li>
              ))}
            </ul>
            <div className="self-start">
              <Button>Choose this plan</Button>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
};

export default TechJourney;
