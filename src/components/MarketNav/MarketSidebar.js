import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./MarketSidebar.css"

export default function MarketSidebar (props) {


  return (
    // Pass on our props
    <Menu {...props} right >
      <main id="page-wrap">
      <section>
        <img src="https://img.icons8.com/pastel-glyph/64/ffffff/shopping-basket-2--v1.png" alt="basket icon" />
        <a href="./marketfeed" className="links">MarketFeed</a>
      </section>
      <section>
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/like--v1.png" alt="heart icon" />
        <a href="./liked" className="links">Liked Batches</a>
      </section>
      <section>
        <img src="https://img.icons8.com/glyph-neue/64/ffffff/fire-element.png" alt="fire icon" />
        <a href="./claimed" className="links">Claimed Batches</a>
      </section>
      <section>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/add--v1.png" alt="cross icon" />
        <a href="./addbatch" className="links">Add Batch</a>
      </section>
      <section>
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/gender-neutral-user.png" alt="profile icon" />
        <a href="./profile" className="links">Profile</a>
      </section>
                        
      </main>
    </Menu>
  );
};
