import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const pricingPlans = [
        {
          id: 1,
          plan_name: "Basic",
          price_per_month: 5.99,
          price_per_year: 59.99,
          features: [
            "Access to all content",
            "Stream on 1 device at a time",
            "Standard Definition (SD) quality",
            "Offline downloads (limited to 5)"
          ]
        },
        {
          id: 2,
          plan_name: "Standard",
          price_per_month: 9.99,
          price_per_year: 99.99,
          features: [
            "Access to all content",
            "Stream on up to 2 devices at a time",
            "High Definition (HD) quality",
            "Offline downloads (up to 15)"
          ]
        },
        {
          id: 3,
          plan_name: "Premium",
          price_per_month: 14.99,
          price_per_year: 149.99,
          features: [
            "Access to all content",
            "Stream on up to 4 devices at a time",
            "Ultra High Definition (4K) quality",
            "Unlimited offline downloads",
            "Priority customer support"
          ]
        }
      ];
      
    return (
        <div className="m-12">
            <h2 className="text-3xl font-semibold underline">OTT Subscription Plannning</h2>
            <div className="grid md:grid-cols-3 gap-9 m-10">
            {
                pricingPlans.map(option => <PriceOption key ={option.id} option={option} ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;