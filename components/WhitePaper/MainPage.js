import React from "react";
import WpMainHeading from "./WpElements/WpHeadings.js/WpMainHeading";
import WpMainPara from "./WpElements/WpParas.js/WpMainPara";
import WpImage from "./WpElements/WpMedia.js/WpImage";
import WpSubHeading from "./WpElements/WpHeadings.js/WpSubHeading";
import WpSubPara from "./WpElements/WpParas.js/WpSubPara";
import WpSmallHeading from "./WpElements/WpHeadings.js/WpSmallHeading";
import WpBullet from "./WpElements/WpParas.js/WpBullets";
import WpSmallPara from "./WpElements/WpParas.js/WpSmallPara";
import WpTable from "./WpElements/WpMedia.js/WpTable";
import Rarities from "@/data/Rarities";
import WpVestingTable from "./WpElements/WpMedia.js/WpVestingTable";
import WpTokenUsesTable from "./WpElements/WpMedia.js/WpTokenUsesTable";



const MainPage = () => {
  return (
    <div className=" max-w-[800px] mb-[40px] md:mb-[80px]   ">
      {/* Preamble */}
      <div >
      
        <h1 className="bebas-neue-regular text-[36px] md:text-[48px] leading-[42px] md:leading-[54px] tracking-[-1px] font-bold   text-[#1D1D1B] uppercase ">
        Preamble
        </h1>
        <WpMainPara>
          {" "}
          In recent years, the digital gaming landscape has experienced rapid
          growth across various platforms, including PCs, consoles, and
          smartphones. This expansion has led to a vast array of game choices,
          providing players with unparalleled access to diverse gaming
          experiences. However, this diversity also poses a challenge, as it
          often results in fleeting interactions with games, making it rare to
          find titles that truly captivate players for extended periods.
        </WpMainPara>
        <WpMainPara>
          {" "}
          The Kanoi Trading Card Game [TCG] leverages blockchain technology to
          forge novel connections with players, a feat not achievable in
          traditional games. By skillfully integrating Japan's renowned media
          mix strategy with NFT culture and meticulously crafting game design,
          it pioneers the development of intellectual property (IP), fostering
          deep player engagement.
        </WpMainPara>
        <WpMainPara>
          {" "}
          Rooted in a richly developed universe and compelling IP, the Kanoi TCG
          will offer content both digitally and physically. This strategic
          convergence is complemented by innovative game and ecosystem design,
          delivering fresh value and enjoyment to players both during gameplay
          and beyond. The Kanoi TCG promises unparalleled excitement and
          emotions, redefining the gaming experience and beckoning players into
          thrilling new adventures.
        </WpMainPara>
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[390px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto">
            <img className="w-full h-full object-cover " src={`/wp/image1.png`} />
        </div>
      </div>

      {/* **** The Kanoi trading card game ********** */}
      <div id="Kanoi trading">
        <WpMainHeading>The Kanoi trading card game</WpMainHeading>
        <WpMainPara>
          {" "}
          The Kanoi TCG draws inspiration from Japan’s rich folklore of Yokai
          and Onmyoji, timeless narratives that have been passed down through
          generations. Through intricate artwork and animations, it breathes new
          life into this beloved world, expanding its depth and scope. Utilizing
          cutting-edge blockchain technology, particularly tokens, the game
          offers an immersive experience that fosters profound connections
          between players, the game, its intellectual property (IP), and the
          community.
        </WpMainPara>
        <WpMainPara>
          {" "}
          By digitizing trading cards as non-fungible tokens (NFTs),
          facilitating peer-to-peer (P2P) transactions, implementing
          play-to-earn (P2E) incentives through smart contracts, and ensuring
          transparency in game rule formulation via decentralized token-centric
          management, it transcends the limitations of traditional TCGs,
          creating an innovative economic sphere.
        </WpMainPara>
        <WpMainPara>
          {" "}
          Within this economic sphere, players own not only trading cards but
          also their time, skills, and investments as assets, exchangeable for
          real-world value. In addition, they gain the right to directly
          participate in governance based on their holdings, contributing to the
          evolution of The Kanoi TCG's digital nation and transcending the mere
          frameworks of P2E and PlayFi. The ownership of NFTs and tokens
          represents genuine involvement in this digital realm, offering a
          unique avenue for deep engagement with the game, its IP, and the
          broader community.
        </WpMainPara>
        <WpMainPara>
          {" "}
          By seamlessly integrating the game, IP, and a token-based ecosystem,
          these three pillars synergize to deliver an unparalleled immersive
          gaming experience and cultivate a vibrant IP. This integrated approach
          allows players to delve deeper into the game world and experience a
          new sense of connection with its IP.
        </WpMainPara>
        <WpImage Image={"image2.png"} />
        <WpSubHeading>gmlabs</WpSubHeading>
        <WpSubPara>
          gmlabs is a Japanese startup responsible for the development of the
          Kanoi TCG. Founded in 2022 with the mission of crafting innovative and
          exciting experiences for global audiences, gmlabs combines Japan's
          rich entertainment culture with next-generation technology. The
          company has secured approximately 80 million JPY in seed funding from
          several Japanese venture capital and corporate venture capital firms.
        </WpSubPara>
        <WpImage Image={"image3.png"} />
      </div>

      {/* **** Card as a digital asset ********** */}
      <div id="digital asset">
        <WpMainHeading>Card as a digital asset</WpMainHeading>
        <WpMainPara>
          {" "}
          The Kanoi TCG is a card game that leverages NFT digital assets.
          Players contruct their decks using a diverse selection of cards
          aligned with their chosen strategies, engaging in head-to-head battles
          for honor and prizes.  These cards serve not only as tools for
          gameplay but also as tradable digital assets, offering the potential
          to be held, purchased, and sold, with the opportunity to convert them
          into tangible value in the real world. With its distinctive worldview
          and intricate artistry, The Kanoi TCG presents an extensive array of
          cards that inspire a desire for collection.
        </WpMainPara>
        {/* <WpImage Image={"image4.png"} /> */}
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto border-[1px] border-[#E5E5E7]">
            <img className="w-full h-full object-cover " src={`/wp/image4.png`} />
        </div>
        <WpSubHeading>Rarities</WpSubHeading>
        <WpSubPara>
          The cards are categorized into different rarities, each corresponding
          to its scarcity and consequently, its value as an asset. The quantity
          of cards provided is determined by their rarity, with rarer cards
          being more scarce and thus potentially more valuable. Regardless of
          rarity, cards with the same name perform identically within the game.
        </WpSubPara>
       
        <WpTable head1={'Rarities'} head2={'Description'} data={Rarities}/>

        <WpSubHeading>Reprint</WpSubHeading>
        <WpSubPara>
          Following a community governance vote, certain cards will undergo
          reprinting. These reprinted cards will retain their original
          functionality in the game, but to safeguard the asset value of the
          original cards, the reprints will be distinguished by a mark or other
          identifiable characteristics.
        </WpSubPara>
        <WpSubHeading>Non-NFT cards</WpSubHeading>
        <WpSubPara>
          Non-NFT cards, obtainable through gameplay or by opening Non-NFT card
          packs, function similarly to NFT cards within the game. However, The
          rate of token acquisition within the Play-to-Earn (P2E) system
          fluctuates based on the proportion of NFT cards in the deck. Players
          who exclusively construct their decks with NFT cards will
          substantially accrue more tokens through the P2E system. Non-NFT cards
          are integrated to streamline players' entry into The Kanoi TCG.
        </WpSubPara>
      </div>

      {/* **** Kanoi ecosystem *********  */}
      <div id="Kanoi ecosystem">
        <WpMainHeading>Kanoi ecosystem</WpMainHeading>
        <WpMainPara>
          The ecosystem of The Kanoi TCG is designed to empower the community in
          participating and governing various developmental aspects that
          significantly influence the ecosystem’s future. This transparent and
          collaborative approach enables The Kanoi TCG and its ecosystem to grow
          continuously with the community. Operated by the community, this
          decentralized ecosystem is established by the Isekai Foundation
          [Isekai].
        </WpMainPara>

        <WpSubHeading>Isekai Foundation</WpSubHeading>
        <WpSubPara>
          Isekai is a foundation established to construct and support the
          ecosystem of The Kanoi TCG. It furnishes the infrastructure, including
          tokens, necessary to establish a decentralized, community-driven
          ecosystem. The community, rather than Isekai, determines the
          subsequent evolution of the ecosystem
        </WpSubPara>
        <WpMainPara>
          Isekai receives 5% of the secondary distribution of The Kanoi TCG on
          supported platforms as royalties. This allocation is earmarked for
          development and marketing expenditures aimed at sustaining and
          expanding the ecosystem.
        </WpMainPara>
        <WpMainPara>
          gmlabs is entitled to receive token grants and rewards from Isekai for
          its contributions to community and ecosystem growth through
          development and marketing initiatives within The Kanoi TCG ecosystem.
        </WpMainPara>
        <WpImage Image={"image5.png"}></WpImage>

        <WpSubHeading>Tokens and economy</WpSubHeading>
        <WpSubPara>
          The tokens serve as vital infrastructure within The Kanoi TCG
          ecosystem and consist of two ERC-20 tokens: the utility token $SAISEN
          and the governance token $KANOI. They are designed to uphold the
          stable operation of the Play-to-Earn (P2E) mechanism and foster the
          sustainable expansion of the token economy. This framework ensures
          equitable value distribution throughout the community of players,
          developers, and creators, preventing the concentration of all
          player-generated value solely with the developers.
        </WpSubPara>

        <WpSubHeading>$Saisen: Utility token</WpSubHeading>
        <WpSubPara>
          $SAISEN serves as the primary currency within The Kanoi TCG, used by
          players to purchase and upgrade cards, as well as to participate in
          specific events and tournaments.Tightly integrated with player
          actions, $SAISEN can be earned through active gameplay, playing a
          pivotal role in driving economic activity within the game.
        </WpSubPara>
        <WpImage Image={"image6.gif"}></WpImage>
       

        <WpSmallHeading>SUPPLY AND ALLOCATION</WpSmallHeading>
        <WpSubPara>
          The $SAISEN token has a fixed supply of 50,000,000,000, ensuring an
          abundant reserve as the primary currency within the ecosystem. The
          allocation of $SAISEN tokens is as follows:
        </WpSubPara>
        <WpSmallPara>
          <WpBullet>70% to the ecosystem P2E pool</WpBullet>
          <WpBullet>12% to the ecosystem staking pool</WpBullet>
          <WpBullet>6% to the ecosystem token reserve</WpBullet>
          <WpBullet>6% to Initial Exchange Offering (IEO)</WpBullet>
        </WpSmallPara>
        <WpSmallPara>
          The ecosystem token reserve comprises reserved tokens intended for
          fostering growth within The Kanoi TCG ecosystem, primarily intended
          for use in campaigns and similar activities.
        </WpSmallPara>
        {/* <WpImage Image={"chart.gif"}></WpImage> */}
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto border-[1px] border-[#E5E5E7]">
            <img className="w-full h-full object-cover " src={`/wp/chart.gif`} />
        </div>
        <WpSmallHeading>Staking</WpSmallHeading>
        <WpSubPara>
          Locking $SAISEN tokens in the $SAISEN staking pool enables users to
          earn additional $SAISEN rewards. The amount of rewards received is
          contingent upon the quantity of tokens locked and the duration of the
          lockup period. Staking incentives may encompass exclusive NFTs,
          in-game items, and other perks.
        </WpSubPara>
        {/* <WpImage Image={"saisen.gif"}></WpImage> */}
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto border-[1px] border-[#E5E5E7]">
            <img className="w-full h-full object-cover " src={`/wp/saisen.gif`} />
        </div>

        <WpSubHeading>$KANOI : GOVERNANCE TOKEN</WpSubHeading>
        <WpSubPara>
          The $KANOI token is a scarce asset that is difficult to obtain
          in-game. It is essential for unlocking premium benefits and accessing
          exclusive events within The Kanoi TCG ecosystem. Additionally, $KANOI
          plays a pivotal governance role, granting token holders the authority
          to vote on the game's future direction, updates, and balance
          adjustments. This instills a community-driven governance framework,
          empowering players and creators to directly influence the game's
          evolution. The extent of voting rights is determined by the quantity
          of $KANOI held, promoting the ecosystem's robust growth and
          transparency.
        </WpSubPara>
        <WpImage Image={"kanoi1.gif"}></WpImage>

        <WpSmallHeading>SUPPLY AND ALLOCATION</WpSmallHeading>
        <WpSubPara>
          The $KANOI token has a fixed supply of 100,000,000, deliberately
          limited in issuance to maintain its scarcity relative to $SAISEN. The
          allocation of $KANOI tokens is as follows:
        </WpSubPara>
        <WpSmallPara>
          <WpBullet>34% to the ecosystem P2E pool</WpBullet>
          <WpBullet>15% to the ecosystem staking pool</WpBullet>
          <WpBullet>12% to the ecosystem token reserve</WpBullet>
          <WpBullet>13% to IEO</WpBullet>
          <WpBullet>13% to gmlabs token reserve</WpBullet>
          <WpBullet>5% to investors</WpBullet>
          <WpBullet>8% to partners</WpBullet>
        </WpSmallPara>
        <WpSmallPara>
          The ecosystem token reserve comprises reserved tokens intended for
          fostering growth within The Kanoi TCG ecosystem. These tokens may be
          utilized for marketing initiatives, development boosts, or deposited
          into a treasury managed according to the governance decisions of
          $KANOI token holders.
        </WpSmallPara>
        {/* <WpImage Image={"chart2.gif"}></WpImage> */}
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto border-[1px] border-[#E5E5E7]">
            <img className="w-full h-full object-cover " src={`/wp/chart2.gif`} />
        </div>

        <WpSmallHeading>VESTING TERM</WpSmallHeading>
        <WpSubPara>
          The following owners of $KANOI will be subject to a lock-up under the
          conditions below, starting from the date of listing on the exchange.
        </WpSubPara>
        {/* table */}
        <WpVestingTable></WpVestingTable>
        <WpSmallHeading>Staking</WpSmallHeading>
        <WpSubPara>
          Rewards vary based on the amount of tokens locked and the lockup
          duration. When $KANOI tokens are locked in the $SAISEN staking pool,
          the reward amount in $SAISEN is calculated by converting $KANOI to the
          prevailing market value of $SAISEN. Staking incentives may encompass
          exclusive NFTs and in-game items.
        </WpSubPara>
        {/* <WpImage Image={"kanoi.gif"}></WpImage> */}
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto border-[1px] border-[#E5E5E7]">
            <img className="w-full h-full object-cover " src={`/wp/kanoi.gif`} />
        </div>

        <WpSubHeading>TOKEN USES AND VALUE FLOWS</WpSubHeading>
        {/* <WpImage Image={"kanoiuser.gif"}></WpImage> */}
        <div className="w-[343px] h-[192px] md:w-[800px] md:h-[446px] rounded-lg mt-[20px] md:mt-[32px] overflow-hidden mx-auto border-[1px] border-[#E5E5E7]">
            <img className="w-full h-full object-cover " src={`/wp/kanoiuser.gif`} />
        </div>
        <WpMainPara>
          $SAISEN and $KANOI provide players of The Kanoi TCG within the
          ecosystem with digital assets, services, and functionalities that can
          only be accessed or exchanged using tokens. Below are some examples of
          the digital assets, services, and functionalities that can be accessed
          or exchanged with each token:
        </WpMainPara>
        {/* Table */}
        <WpTokenUsesTable/>
        <WpMainPara>
          P2E continues to supply players with $SAISEN and $KANOI, so the prices
          of the above digital assets, services, and functions must be
          permanently adjusted to offset a potential oversupply. In The Kanoi
          TCG ecosystem, prices are dynamically adjusted based on information
          from the Oracle.
        </WpMainPara>

        <WpSubHeading>$ZENI : IN-GAME COIN</WpSubHeading>
        <WpSubPara>
          In The Kanoi TCG, there also exists an off-chain, in-game coin $ZENI
          that is limited to use within the game. It cannot be used for
          exchanging with real-world value, nor for purchasing NFTs or tokens.
          $ZENI facilitates the onboarding of players who are not familiar with
          Web3 or blockchain, and it is useful for simplifying transactions of
          items that do not need to be turned into assets.
        </WpSubPara>
      </div>

      {/* **** PLAY TO EARN *********  */}
      <div id="Play to earn">
        <WpMainHeading>PLAY TO EARN</WpMainHeading>
        <WpMainPara>
          Participating in the game is a primary way for players to contribute
          to the ecosystem. The preferential treatment given to winners
          stimulates competitive spirit and serves as an incentive for
          continuous play and collection of cards to become stronger,
          encouraging players to engage more enthusiastically in the ecosystem.
          The majority of the supply of $SAISEN and $KANOI is distributed to
          players through the P2E (Play-to-Earn) mechanism.
        </WpMainPara>
        <WpSubHeading>$SAISEN</WpSubHeading>
        <WpSubPara>
          Players can earn $SAISEN by winning matches in The Kanoi TCG. $SAISEN
          is issued to players based on several factors, including the outcome
          of the game and the percentage of NFT cards in their deck. The
          issuance of $SAISEN in The Kanoi TCG varies in non-tournament matches
          (likely the most frequently played type of match) based on the
          following factors:
        </WpSubPara>
        <WpSmallPara>
          <WpBullet>
            Outcome: $SAISEN is issued only if the player wins the match.
          </WpBullet>
          <WpBullet>
            Rank: The higher the rank, the more difficult it is to win, and the
            greater the amount of $SAISEN issued.
          </WpBullet>
          <WpBullet>
            Deck Composition: Players receive bonus $SAISEN based on the number
            of NFT cards in their deck.
          </WpBullet>
        </WpSmallPara>
        <WpSmallPara>
          In addition, $SAISEN can also be earned through rewards based on rank
          or the final results of tournaments, rewards for defeating jackpot
          battles, and staking rewards for $SAISEN and $KANOI.
        </WpSmallPara>
        <WpSubHeading>$KANOI</WpSubHeading>
        <WpSubPara>
          The highly scarce $KANOI can only be obtained by achieving outstanding
          results in The Kanoi TCG gameplay. Below are examples of gameplay
          through which $KANOI can be earned:
        </WpSubPara>
        <WpSmallPara>
          <WpBullet>
            Rank: Being in the top ranks at the end of the season
          </WpBullet>
          <WpBullet>Tournament: Ranking high in tournaments</WpBullet>
          <WpBullet>
            Tower Battle: Defeating the boss in the upper levels of the tower
            battle
          </WpBullet>
        </WpSmallPara>

        <WpSubHeading>Gameplay</WpSubHeading>
        <WpSubPara>
          $SAISEN can be earned by playing and winning matches in The Kanoi TCG.
          Each match is typically a one-on-one turn-based battle, where the
          player whose life points reach zero first loses. A deck consists of
          one avatar card, three spell cards that vary depending on the avatar
          card, and twenty monster cards, making a total of twenty-four cards.
          Numerous TCGs (Trading Card Games) that have gained global popularity
          were born in Japan. The Kanoi TCG specializes in the professional
          analysis of popular Japanese TCGs and features quick and strategy-rich
          gameplay filled with originality, incorporating exciting essences
          while being distinct from others.
        </WpSubPara>
        <WpMainPara>
          Here, we provide information on some of the game modes planned for
          implementation. Further details about the gameplay will be announced
          during the public testing phase.
        </WpMainPara>
        <WpSubHeading>CASUAL (PvP)</WpSubHeading>
        <WpSubPara>
          The casual mode is the most common game mode. You can compete against
          other players, and if you win, you can earn $SAISEN based on the
          results of the match. Additionally, you can earn Rank Points [RP]
          according to the results of the match, and your rank will change based
          on the RP you have earned. Rewards and badges are provided according
          to the rank you are in at the end of the season.
        </WpSubPara>
        <WpSubHeading>JACKPOT (PvE)</WpSubHeading>
        <WpSubPara>
          The jackpot is an exciting game mode where there's a chance to win a
          large amount of $SAISEN. Before playing the jackpot, players deposit a
          certain amount of $SAISEN. Then, players face off against CPUs of
          random strength, losing the deposited $SAISEN if they lose, but
          winning all the $SAISEN deposited by other players if they win. Since
          the strength of the CPUs is random, even players who have just started
          playing The Kanoi TCG have a chance of winning.
        </WpSubPara>
        <WpSubHeading>TOuRNAMENT (PvP)</WpSubHeading>
        <WpSubPara>
          Participants can join the tournament by obtaining a tournament pass,
          and they compete for rewards, badges, and honor set for each
          tournament. Players who win their matches will continue to compete
          against each other to determine the champion.
        </WpSubPara>
        <WpSubHeading>TOWER (PvE)</WpSubHeading>
        <WpSubPara>
          The Tower Battle is a high-difficulty game mode that can be attempted
          by obtaining a Tower Pass. Players face off against boss CPUs on each
          floor, and by defeating them, they can ascend to the next level,
          earning rewards with each boss defeated. The rewards become more
          luxurious as the players defeat bosses on higher floors.
        </WpSubPara>
      </div>

      {/* **** BEYOND THE TCG *********  */}
      <div id="Beyond the TCG">
        <WpMainHeading>BEYOND THE TCG</WpMainHeading>
        <WpMainPara>
          In The Kanoi TCG, a grand narrative serves as the backdrop for the
          appearance of characters with rich personalities. Leading with
          trailers that are made public, we plan to further deepen and expand
          the world through the development of various contents such as anime,
          manga, and merchandise.
        </WpMainPara>
        <WpMainPara>
          In an era where content overflows on the internet and social media,
          leading to reduced consumption time for each piece of content, games
          emerge as a powerful tool that realizes long-term engagement with
          content, forming an essential foundation of attachment to IPs. The
          fact that many globally popular IPs in Japan have their roots in games
          demonstrates that games are an excellent means for building IP brands.
        </WpMainPara>
        <WpMainPara>
          The Kanoi TCG aims to build a world-renowned IP brand by deepening and
          expanding the world through the development of various contents,
          rooted in a TCG that combines the game with the exciting experience of
          blockchain technology.
        </WpMainPara>
        <WpMainPara>
          The most important factor in IP construction is fostering attachment
          to the IP, and the most effective way to achieve this is by increasing
          touchpoints with the IP in everyday life. Psychologically, people tend
          to develop attachment to subjects they have more interactions with.
          For digital-born IPs, increasing physical touchpoints becomes a
          strategic necessity for mid-to-long term development.
        </WpMainPara>
        <WpMainPara>
          The Kanoi TCG will actively pursue physical merchandise development.
          Additionally, leveraging the strong network with the entertainment
          industry held by its developer, gmlabs, it will engage in
          collaborations with various IPs, including Web2, to create
          multidimensional touchpoints with the IP.
        </WpMainPara>
        <WpMainPara>
          By merging digital and physical elements and utilizing technology in
          innovative game design and IP construction, The Kanoi TCG promises to
          offer new values and enjoyment beyond a mere TCG, providing
          unprecedented excitement and emotional highs in every moment
          experienced both inside and outside the game.
        </WpMainPara>
      </div>

      {/* **** LEGAL NOTICE AND RISK DISCLOSURE  *********  */}
      <div id="Legal notice">
        <WpMainHeading>LEGAL NOTICE AND RISK DISCLOSURE</WpMainHeading>
        <WpMainPara>
          This Legal Notice and Risk Disclosure Notice is provided by Isekai and
          gmlabs (collectively with its affiliates, referred to as "we", "our",
          or "us"). gmlabs is an independent service provider offering
          development and marketing support for The Kanoi TCG to Isekai. All
          statements, representations made by us or on our behalf, and tokens,
          platforms, products, and services provided are subject to this Notice.
          Please read this Notice carefully before using The Kanoi TCG or any
          tokens.
        </WpMainPara>
        <WpSubHeading>LEGAL NOTICE</WpSubHeading>
        <WpSmallHeading>INFORMATION AND COMMUNICATIONS</WpSmallHeading>
        <WpSubPara>
          All information communicated through our website [Website] (accessible
          via{" "}
          <a
            href="https://kanoi.io/"
            target="_blank"
            className="underline text-[#F20057]"
          >
            https://kanoi.io/
          </a>{" "}
          or any successor or alternative URLs), by us, or on our behalf through
          whitepapers, communication channels, or other media [Materials], is
          not intended to offer or solicit the purchase, sale, holding of
          tokens, or any other assets, nor the use of any related products or
          services.
        </WpSubPara>
        <WpMainPara>
          All Materials are provided solely for informational and educational
          purposes and should not be relied upon, in whole or in part, for
          making any decisions. The Materials do not guarantee accuracy or
          reliability, either expressly or impliedly. Therefore, we are under no
          obligation to update or correct the Materials, nor do we accept any
          responsibility for the accuracy or reliability of the information
          provided. The use of Materials is always at your own discretion and
          risk, and you alone are responsible for any damage or loss that may
          result from their use. You should always conduct your own independent
          research and analysis of any information.
        </WpMainPara>
        <WpMainPara>
          The Materials may include references to third-party data and
          publications. While we believe this data to be accurate and
          reasonable, we do not warrant the accuracy or reliability of such
          data. References to third-party data and publications do not imply
          endorsement.
        </WpMainPara>
        <WpMainPara>
          The Materials may also contain references to third-party data and
          publications. While we believe that such data is accurate and
          reasonable, we do not guarantee the accuracy or reliability of that
          data. References to third-party data and publications do not imply
          endorsement or support of them.
        </WpMainPara>
        <WpSmallHeading>the tokens</WpSmallHeading>
        <WpSubPara>
          We make no warranties or representations whatsoever with respect to
          the tokens, and we expressly disclaim all warranties and
          representations in connection with the tokens. There is no guarantee
          that the tokens will perform as expected, or that they will hold any
          particular value or price. The tokens may lose some or all of their
          value. We make no promises regarding the value, price, supply, or
          performance of the tokens.
        </WpSubPara>
        <WpMainPara>
          The tokens are not investments, securities, stocks, debt, loans, or
          any derivative financial products thereof. All information provided in
          the Materials or communicated by us does not in any way constitute an
          offer or solicitation to buy or sell the tokens or any other assets.
        </WpMainPara>
        <WpMainPara>
          Unless expressly allowed by us at our discretion, Tokens cannot be
          received, used, or held by, transferred or sold to, a person which is 
        </WpMainPara>
        <WpMainPara>
          (I) the subject of economic or financial sanctions or trade embargoes
          administered or enforced by any country or government, including, but
          not limited to, those administered by the United Nations Security
          Council, the European Union, Her Majesty’s Treasury of the United
          Kingdom or Office of Foreign Assets Control of the United States or
          any other applicable jurisdictions, 
        </WpMainPara>
        <WpMainPara>
          (II) located, organised or resident in any country or territory that
          is the subject of country-wide or territory-wide sanctions, 
        </WpMainPara>
        <WpMainPara>
          (III) listed in any sanctions-related list of sanctioned persons,
          including, but not limited to, those maintained by the United Nations
          Security Council, the European Union, Her Majesty’s Treasury of the
          United Kingdom or Office of Foreign Assets Control of the United
          States,
        </WpMainPara>
        <WpMainPara>
          (IV) located, organised or resident in Australia, Canada, Cuba, the
          Democratic People’s Republic of North Korea, Hong Kong SAR, the
          Islamic Republic of Iran, Libya, the People's
        </WpMainPara>
        <WpMainPara>
          Republic of China, South Sudan, Sudan (North), Syria, The Crimea,
          United States of America, any jurisdiction in which the acquisition
          and/or ownership of Tokens is prohibited by applicable law, or 
        </WpMainPara>
        <WpMainPara>
          (V) directly or indirectly owned or controlled by any person or
          persons described above.
        </WpMainPara>

        <WpSmallHeading>FORWARD-LOOKING STATEMENTS</WpSmallHeading>
        <WpSubPara>
          The Website, and the Materials may contain forward-looking statements
          based on current expectations that involve a number of risks and
          uncertainties. All opinions, forecasts, projections, future plans or
          other statements other than statements of historical fact, are
          forward-looking statements. Any development plans and projections,
          business projections, future functionality and projected performance
          of the Tokens, the Project or us, as well as prospects and the future
          prospects of any industry, are forward-looking statements.
        </WpSubPara>
        <WpMainPara>
          Forward-looking statements by their nature address matters that are,
          to different degrees, uncertain or unknown. We can give no assurance
          that any forward-looking statements will prove to have been correct.
          Actual events, results or outcomes could differ materially from what
          is stated in the forward-looking statement, and you should not rely on
          any such forward-looking statement. These risks and uncertainties
          include the impact of economic, competitive, technical and other
          factors affecting the Tokens, the Project, us or our operations,
          including, but not limited to, the following: development of science
          and technology, development of the industry in which we are in,
          competition, regulatory uncertainty and government actions, the
          introduction of new regulations and laws, market changes, the
          performance of the Tokens, the Project or related products, other
          business and market conditions.
        </WpMainPara>
        <WpSmallHeading>INDEMNITY AND LIMITATION OF LIABILITY</WpSmallHeading>
        <WpSubPara>
          You do hereby to the fullest extent permitted by applicable laws and
          regulations indemnify, defend and hold us, our employees, directors,
          shareholders, officers, consultants, representatives, agents or
          contractors harmless from and against any and all loss, penalty,
          claim, damage, liability or expense whatsoever (including reasonable
          attorneys’ fees and disbursements) due to or arising out of or based
          upon{" "}
        </WpSubPara>
        <WpMainPara>
          (I) any inaccurate representation or warranty made by you, or breach
          or failure by you to comply with any covenant or agreement made by you
          or in any other document furnished by you to any of the foregoing
          persons in connection with the Tokens or the Project, or <br /> (II)
          any action instituted by or on your behalf against any of the
          foregoing persons that is finally resolved by judgment against you or
          in favor of any of the foregoing persons. To the maximum extent
          permitted by applicable laws and regulations, in no event shall us,
          our employees, directors, shareholders, officers, consultants,
          representatives, agents or contractors be liable or responsible for
          any direct, indirect, special, punitive, exemplary, incidental, or
          consequential damages or losses of any kind, nor shall they be liable
          for the loss of goodwill, loss of profits (including expected), loss
          of data, diminution of value, and business interruption arising out of
          or in connection with the use of the Tokens, the Project or the
          Materials or reliance thereon, any inaccuracy or omission in any
          Materials, whether based upon breach of warranty or contract,
          negligence, strict liability, tort, or any other legal theory,
          regardless of whether we have been advised of the possibility of such
          damages or losses
        </WpMainPara>

        <WpSubHeading>RISK DISCLOSURE</WpSubHeading>
        <WpSmallHeading>RISK OF SOFTWARE WEAKNESS</WpSmallHeading>
        <WpSubPara>
          Reasonable efforts will be made to ensure a high level of security for
          the software and tokens related to The Kanoi TCG, but there is no
          guarantee that the tokens or related software are secure, or that they
          are protected from phishing, malware, or other malicious attacks.
          Furthermore, the tokens and related software may contain weaknesses,
          bugs, vulnerabilities, viruses, or other defects, which could have a
          significant adverse effect on the operation of the tokens or related
          software and may cause harm to you or third parties.
        </WpSubPara>
        <WpSmallHeading>RISK INHERENT IN THE BLOCKCHAIN</WpSmallHeading>
        <WpSubPara>
          Software and tokens related to The Kanoi TCG are deployed on the
          Ethereum blockchain's mainnet or may be deployed on other blockchains
          in the future. Therefore, failures, malfunctions, or abandonment of
          such blockchains could have a significant adverse effect on the
          software and tokens related to The Kanoi TCG. Additionally, the
          evolution of cryptographic technologies or technological advancements
          like quantum computing could invalidate the cryptographic consensus
          mechanisms underlying blockchains, posing risks to the software and
          tokens related to The Kanoi TCG. Although the possibility is extremely
          low, blockchains are susceptible to attacks, which could lead to the
          complete loss of digital assets.
        </WpSubPara>
        <WpSmallHeading>RISK OF SOFTWARE WEAKNESS</WpSmallHeading>
        <WpSubPara>
          Software and tokens related to The Kanoi TCG are deployed on the
          Ethereum blockchain's mainnet or may be deployed on other blockchains
          in the future. Therefore, failures, malfunctions, or abandonment of
          such blockchains could have a significant adverse effect on the
          software and tokens related to The Kanoi TCG. Additionally, the
          evolution of cryptographic technologies or technological advancements
          like quantum computing could invalidate the cryptographic consensus
          mechanisms underlying blockchains, posing risks to the software and
          tokens related to The Kanoi TCG. Although the possibility is extremely
          low, blockchains are susceptible to attacks, which could lead to the
          complete loss of digital assets.
        </WpSubPara>
        <WpSmallHeading>RISK INHERENT IN THE BLOCKCHAIN</WpSmallHeading>
        <WpSubPara>
          In the countries where we provide our services, different laws and
          regulations apply. Therefore, we may be obligated to obtain various
          licenses or other authorization documents in some or all of the
          jurisdictions where we plan to offer our services. Additionally, there
          is a risk that certain activities may be deemed in violation of laws
          or regulations, and the penalties for potential violations are
          unpredictable. Furthermore, we may need to respond to changes in
          applicable laws and regulations or changes in the interpretation of
          existing laws. The compliance costs and capital expenditures that
          these issues may cause could impact our ability to continue providing
          services.
        </WpSubPara>
      </div>
    </div>
  );
};

export default MainPage;
