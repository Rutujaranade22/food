import React from "react";
import FoodCard from "./components/foodCard";
 import "./styles.css";

const App = () => {
    return(
        <div>
            <h1>Food Cards</h1>
            <div style={{display:"flex",gap:"20px"}}>
            <FoodCard
          title="Paneer Tikka"
           price={250}
          rating={4.5}
          isVeg={true}
        />
        <FoodCard
          title="Chicken Biryani"
           price={300}
          rating={4.8}
          isVeg={false}
        />
      </div>  
     </div>
     );
};
export default App;