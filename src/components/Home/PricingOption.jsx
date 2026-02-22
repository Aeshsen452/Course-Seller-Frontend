import PricingCard from "../Card/PricingCard";
export default function PricingOption() {
  const plans = [
    {
      title: (
        <>
          {" "}
          Download Online courses onto your school or institution's LMS for the school or institution students only. <br />{" "}
          Single Program $150 <br /> All Four Program $500{" "}
        </>
      ),
      // price: "$150",
      paragraph:
        "Support for downloading and set up",
      features: [
     
        "Full code access",
        "Access for single purchaser for 12 months $25",
        "Free updates for 2 years.",
      ],
      buttonText: "Purchase Now",
    },
    // {
    //   title: (
    //     <>
    //       Single Program $150 <br />
    //       All Four Program $500
    //     </>
    //   ),

    //   paragraph:
    //     "Use by you or one client in a single end product that is not charged to end users",
    //   features: [
    //     "06 Month Validity",
    //     "Free Lifetime Access to Updates",
    //     "06 Months of Support from us",
    //     "Full source code",
    //     "06 Month Validity",
    //     "Free Lifetime Access to Updates",
    //     "6 Months of Support from us",
    //     "Full source code",
    //   ],
    //   buttonText: "Purchase Now",
    // },
  ];

  return (
    <section className="">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Online License Pricing Options</h1>
        <p className="text-gray-600">
          Flexible plans for individual programs or full access to all four
          programs.
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <div className="w-[]">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
