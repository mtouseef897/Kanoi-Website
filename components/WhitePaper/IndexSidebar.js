import React from "react";

const IndexSidebar = () => {
  return (
    <div className="w-[200px] gap-[20px] flex-col flex">
      <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.05em]">
        On this page
      </h2>
      <div className="flex flex-col gap-3">
        <p className="text-[24px] leading-[30px] tracking-[-0.05em]">GmLabs</p>
        <p className="text-[24px] leading-[30px] tracking-[-0.05em]">
          Rarities
        </p>
        <p className="text-[24px] leading-[30px] tracking-[-0.05em]">Reprint</p>
        <p className="text-[24px] leading-[30px] tracking-[-0.05em]">
          Non-NFT cards
        </p>
      </div>
    </div>
  );
};

export default IndexSidebar;
