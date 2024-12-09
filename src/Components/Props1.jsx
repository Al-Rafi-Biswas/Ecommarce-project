import React from "react";

const Props1 = ({ heading, li1, li2, li3 }) => {
  return (
    <>
      <section>
        <div className="bg-[#F6F5FF]">
          <div className="container mx-auto">
            <h1 className="text-[36px] text-[#101750]">{heading}</h1>
            <div className="flex items-center justify-start gap-2 mt-3">
              <ul className="text-[16px]">
                <li className="text-[#000000]">{li1}</li>
                <li className="text-[#000000]">{li2}</li>
                <li className="text-[#FB2E86]">{li3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Props1;
