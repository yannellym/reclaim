import {Link} from "react-router-dom";
import "../css/marketNav.css"

export default function MarketNav(){
    return(
        <div>
            <nav>
                <section className="nav-inner">
                    <Link to='/'>
                        <section className="logo-section">
                            <img src="../images/reclaim.png" alt="reclaim logo" />
                            <p><span class="logo-half">Re</span>Claim</p>
                        </section>
                    </Link>
                        <section>
                            <img src="../images/trashIcon.png" alt="basket icon" />
                            <a href="./marketfeed" className="links">MarketFeed</a>
                        </section>
                        <section>
                            <img src="../images/heartIcon.png" alt="heart icon" />
                            <a href="./liked" className="links">Liked Batches</a>
                        </section>
                        <section>
                            <img src="../images/fireIcon.png" alt="fire icon" />
                            <a href="./claimed" className="links">Claimed Batches</a>
                        </section>
                        <img src="../images/profile.png" alt="trash icon" />
                </section>
            </nav>
        </div>
    )
}