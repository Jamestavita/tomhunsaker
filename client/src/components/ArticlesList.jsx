import React, { useEffect, useState } from "react";
import { AppButton900 } from "./reuseable/AppButtons";

export default function ArticlesList() {
  const articleList = [
    {
      id: "01",
      link: "https://sloanreview.mit.edu/article/the-role-of-culture-in-enabling-change/",
      title: "The Role of Culture in Enabling Change",
    },
    {
      id: "02",
      link: "https://sloanreview.mit.edu/article/bed-bath-bankruptcy-lessons-for-senior-leaders/",
      title: "Bed Bath & Bankruptcy: Lessons for Senior Leaders",
    },
    {
      id: "03",
      link: "https://sloanreview.mit.edu/article/the-new-math-of-multistakeholderism/",
      title: "The New Math of Multistakeholderism",
    },
    {
      id: "04",
      link: "https://sloanreview.mit.edu/article/leading-change-means-changing-how-you-lead/",
      title: "Leading Change Means Changing How You Lead",
    },
    {
      id: "05",
      link: "https://sloanreview.mit.edu/article/effective-innovation-begins-with-strategic-direction/",
      title: "Effective Innovation Begins With Strategic Direction",
    },
    {
      id: "06",
      link: "https://sloanreview.mit.edu/article/great-strategy-considers-more-than-customers-and-investors/#:~:text=Employees%2C%20business%20partners%2C%20and%20local,essential%20stakeholders%20in%20business%20strategy",
      title: "Great Strategy Considers More Than Customers and Investors",
    },
    {
      id: "07",
      link: "https://sloanreview.mit.edu/article/most-businesses-should-neither-pivot-nor-double-down/",
      title: "Most Businesses Should Neither ‘Pivot’ nor ‘Double Down’",
    },
    {
      id: "08",
      link: "https://sloanreview.mit.edu/article/the-essence-of-strategy-is-now-how-to-change/",
      title: "The Essence of Strategy Is Now How to Change",
    },
    {
      id: "09",
      link: "https://sloanreview.mit.edu/article/changing-how-we-think-about-change/",
      title: "Changing How We Think About Change",
    },
    {
      id: "10",
      link: "https://store.hbr.org/product/digital-transformation-at-imptek-chova/TB0692",
      title: "Digital Transformation at Imptek Chova",
    },
    {
      id: "11",
      link: "https://store.hbr.org/product/kiwa-international-trade-with-a-purpose/TB0688#:~:text=The%20KIWA%3A%20INTERNATIONAL%20TRADE%20WITH,change%20through%20alternative%20agricultural%20practices",
      title:
        "Kiwa: International Trade with a Purpose. What Is the Purpose of Your Purpose?",
    },
    {
      id: "12",
      link: "https://store.hbr.org/product/rapid-supplier-connect-leveraging-blockchain-for-urgent-sourcing-of-ppe-and-medical-supplies/TB0621",
      title:
        "Rapid Supplier Connect: Leveraging Blockchain for Urgent Sourcing of PPE and Medical Supplies",
    },
    {
      id: "13",
      link: "https://store.hbr.org/product/waykana-strategic-prioritization-for-entrepreneurs/TB0631",
      title: "Waykana: Strategic Prioritization for Entrepreneurs",
    },
    {
      id: "14",
      link: "https://store.hbr.org/product/amazon-merging-digital-and-physical-worlds-for-market-growth/TB0589",
      title: "Amazon: Merging Digital and Physical Worlds for Market Growth",
    },
    {
      id: "15",
      link: "https://hbsp.harvard.edu/product/TB0587-PDF-ENG",
      title:
        "Fidelity Labs and the Digital Transformation of Fidelity Investments",
    },
    {
      id: "16",
      link: "https://thunderbird.asu.edu/thought-leadership/journals-case-series/case-series-listing/when-better-doesnt-pay-case-0",
      title: "When Better Doesn't Pay: The Case of Ecuadorian Roses",
    },
    {
      id: "17",
      link: "https://hbsp.harvard.edu/product/TB539S-PDF-SPA",
      title:
        "Coda and Bext360 Supply Chain: Machine Vision, AI, IoT, and Blockchain",
    },
    {
      id: "18",
      link: "https://hbsp.harvard.edu/product/TB0535-PDF-ENG",
      title: "IBM: Building with Blockchain",
    },
    {
      id: "19",
      link: "https://www.hbsp.harvard.edu/product/TB0543-PDF-ENG",
      title: "Intel: AI and Industry 4.0 Strategy",
    },
    {
      id: "20",
      link: "https://store.hbr.org/product/singularitynet-blockchain-driven-ai-marketplace-and-quest-for-agi/TB0547",
      title:
        "SingularityNET: Blockchain-Driven AI Marketplace and Quest for AGI",
    },
    {
      id: "21",
      link: "https://hbr.org/2012/01/finding-great-ideas-in-emergin",
      title: "Finding Great Ideas in Emerging Markets: The Idea in Practice",
    },
    {
      id: "22",
      link: "https://hbr.org/2011/09/why-someone-from-apple-needs-t",
      title: "Why Someone from Apple Needs to Ride the Shanghai Subway",
    },
    {
      id: "23",
      link: "https://thunderbird.asu.edu/thought-leadership/journals-case-series/case-series-listing/bext360-and-esg-paradox-leveraging-ai",
      title:
        "Bext360 and the ESG Paradox: Leveraging AI, Blockchain, and IoT for Supply-Chain-Level ESG Measurement",
    },
    {
      id: "24",
      link: "https://hbr.org/2011/09/finding-great-ideas-in-emerging-markets",
      title: "Finding Great Ideas in Emerging Markets",
    },
    {
      id: "25",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/tie.22125",
      title: "Innovation Bridgers: The new talent imperative",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  function updateSize() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.onresize = updateSize;
  }, []);

  return (
    <ul className="">
      {articleList
        .slice(0, size > 768 ? 25 : showMore ? 25 : 5)
        .map((article) => (
          <li key={article.id}>
            <a
              href={article.link}
              className="grid gap-4 py-4 md:py-3 md:px-10 border-t border-t-Greyscale400 text-Greyscale700 font grid-cols-2 md:grid-cols-[0.1fr_1fr_0.2fr] justify-between items-center"
            >
              <p className="font-bold text-[18px]">{article.id}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="justify-self-end col-start-3"
              >
                <path
                  d="M7 17.0645L17 7.06445M17 7.06445H9M17 7.06445V15.0645"
                  stroke="#656558"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="font-medium text-[18px] col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
                {article.title}
              </p>
            </a>
          </li>
        ))}
      {size <= 768 && (
        <AppButton900
          className="bg-transparent w-full border-Greyscale800 mt-5"
          label={!showMore ? "Show all articles" : "Show less articles"}
          onClick={() => setShowMore(!showMore)}
        />
      )}
    </ul>
  );
}
