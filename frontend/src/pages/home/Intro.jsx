const Intro = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1
        data-aos="fade-up"
        className="text-4xl font-bold font-mono text-center text-[#001b5e]"
      >
        About
      </h1>
      <ol
        data-aos="fade-up"
        className="flex flex-col md:flex-row relative border-l border-black"
      >
        <li className="mb-4 ml-4 mt-4">
          <div className="absolute w-3 h-3 bg-[#0ea45c] rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 text-xl font-bold font-mono text-black ">
              Product Categories
            </span>
          </p>
          <p className="my-2 text-base font-normal font-mono text-gray">
            Toys are often categorized based on age groups, interests, and types
            (e.g., educational, tech, soft toys, etc.), making it easy for
            customers to find what they are looking for.
          </p>
          <div className="absolute w-3 h-3 bg-[#0ea45c] rounded-full mt-1.5 -left-1.5 border-black" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 text-xl font-bold font-mono text-black ">
              User Experience
            </span>
          </p>
          <p className="my-2 text-base font-normal font-mono text-gray">
            A good web shop will have an intuitive and user-friendly interface,
            allowing customers to search for toys, filter options by price,
            brand, or theme, and easily navigate the checkout process.
          </p>
          <div className="absolute w-3 h-3 bg-[#0ea45c] rounded-full mt-1.5 -left-1.5 border-black" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 text-xl font-bold font-mono text-black ">
              Payment and Shipping
            </span>
          </p>
          <p className="my-2 text-base font-normal font-mono text-gray">
            Most online toy stores provide multiple payment options like credit
            cards, digital wallets, and even cash on delivery. They also offer
            shipping services, often including both local and international
            options.
          </p>
          <div className="absolute w-3 h-3 bg-[#0ea45c] rounded-full mt-1.5 -left-1.5 border-black" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 text-xl font-bold font-mono text-black ">
              Customer Reviews and Ratings
            </span>
          </p>
          <p className="my-2 text-base font-normal font-mono text-gray">
            To help buyers make informed decisions, web shops often include
            product reviews and ratings from other customers.
          </p>
          <div className="absolute w-3 h-3 bg-[#0ea45c] rounded-full mt-1.5 -left-1.5 border-black" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 text-xl font-bold font-mono text-black ">
              Promotions and Discounts
            </span>
          </p>
          <p className="my-2 text-base font-normal font-mono text-gray">
            Online toy shops frequently offer seasonal sales, bundle deals, or
            loyalty programs to attract and retain customers.
          </p>
          <div className="absolute w-3 h-3 bg-[#0ea45c] rounded-full mt-1.5 -left-1.5 border-black" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 text-xl font-bold font-mono text-black ">
              Parental Resources
            </span>
          </p>
          <p className="my-2 text-base font-normal font-mono text-gray">
            Some shops include blogs or advice sections to help parents select
            age-appropriate and developmentally beneficial toys for their
            children.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Intro;
