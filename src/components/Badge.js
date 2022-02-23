import "../css/badge.css"

export default function Badge(){
    return(
        <div className="badge-container">
           <h1>Wine Bottles</h1>
           <section className="badge-inner">
               <div className="badge-left">
                    <img src="../images/bottles.png" alt="bottles" />
               </div>
               <div className="badge-right">
                    <section className="badge-right-first">
                        <div className="badge-location">
                            <img src="../images/location.png" alt="location" />
                            <p>Brooklyn, NY</p>
                        </div>
                        <div className="badge-button">
                            <button>CLAIM</button>
                        </div>
                    </section>
                    <section className="badge-right-second">
                        <h4>Description</h4>
                        <p>I have a bin with 15+ wine bottles that could go to a nice home. They can be recycled and made into nice decorative bottles. </p>
                    </section>
                   <img src="../images/heart.png" alt="Heart"  />
               </div>
           </section>
        </div>     
    )
}