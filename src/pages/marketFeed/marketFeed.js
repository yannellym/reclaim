import MarketNav from "../../components/MarketNav/MarketNav"
import Footer from "../../components/Footer/Footer"
import "./marketFeed.css"
import BasicSelect from "../../components/BasicSelect/BasicSelect"
import Batch from "../../components/Batch/Batch"
import React, { useEffect, useState } from "react"
import BatchDetails from "../../components/BatchDetails/BatchDetails" 
import { collection, getDocs } from 'firebase/firestore'
import { database } from "../firebaseConfig/firebaseConfig"

const MarketFeed = () => {
    let [currentBatch, setCurrentBatch] = useState({ 
        currBatch:null,
        showComponent: false,
    })
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [details, setDetails] = useState([]);

    const [filterInput, setFilterInput] = useState(false);
    const [filteredOutput, setFilteredOutput] = useState([]);
    const [filteredDetails, setFilteredDetails] = useState([]);

    const getData = async () =>{
        const batchesCol = collection(database, 'batches');
        const batchesSnapshot = await getDocs(batchesCol);
        const batchesList = batchesSnapshot.docs.map((doc) => (
            {...doc.data(), id: doc.id,
        }));
        setDetails(batchesList);
    }

    useEffect(() => {
        getData();
    }, []);


    useEffect(() => {
        setOutput([])
        details.filter(val => {
            if(val.location.toLowerCase().includes(input.toLocaleLowerCase())) 
            {
                setOutput(output => [...output, val])
            }
        })
    }, [input, details])

    function onlyAvailable(){
        setOutput([])
        details.filter(val => {
            if(val.available === true) 
            {
                setOutput(output => [...output, val])
            }
        })
    }
    function onlyClaimed(){
        setOutput([])
        details.filter(val => {
            if(val.available === false) 
            {
                setOutput(output => [...output, val])
            }
        })
    }

    let batchRecords = output.map((item) => {
        return (
            <Batch
                key={item.id}
                id={item.id}
                item={item}
                handleDetails={handleDetails} 
                handleClaim={handleClaim} 
            />  
        )         
    })

    
    function handleDetails(batchkey){
        return setCurrentBatch({currBatch: batchkey, showComponent: true})
    }

    function handleClaim(batchkey){
        return setCurrentBatch({currBatch: batchkey, showComponent: false})
    }
    
    return (
        <div className="marketFeed">
            <MarketNav/>
            <section className="logoSearchBox">
                <div className="market-box">
                    <h1>MarketFeed</h1>
                    <img src="../images/market.png" alt="market logo" />
                </div>
                <div className="search-box">
                    <div className="bar-box">
                        <input type="text" placeholder="Search for a location..." onChange= { e => setInput(e.target.value)} />
                        <button>SEARCH</button>
                    </div>
                    <div className="categories">
                        <section>
                            <h4>Filter:</h4>
                            <p onClick= {onlyAvailable}>available</p>
                            <p onClick= {onlyClaimed} className="claimedFilter">Claimed</p>
                            
                        </section>
                    </div>
                </div>
                <section className="world-box">
                    <p>
                        The MarketFeed is a place where you can find 
                        goods to recycle! These goods come from different
                        households that would like to donate the items. Browse 
                        through the batches below and see how you can help save 
                        the world one good(recycable) at a time!
                     </p>
                    <img src="../images/reclaim.png" alt="reclaim logo" />
                </section>
            </section>
            <section className="body">
                <section className="badges">
                    {batchRecords}
                </section>
                <section className="displayedBadge">
                {
                        currentBatch.showComponent? <BatchDetails {...details.find(item => item.id === currentBatch.currBatch )}> </BatchDetails>
                    : 
                        <div><img src="../images/earth.png" alt="earth" className="earth-waiting" /><h1 className="save-title">Thank you for helping to save the earth!</h1></div> 
                }
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default MarketFeed;
