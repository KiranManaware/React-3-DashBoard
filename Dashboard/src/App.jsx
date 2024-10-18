import Customer from "./components/Customer";
import Delivery from "./components/Delivery";
import PrimaryNavbar from "./components/PrimaryNavbar";
import Rating from "./components/Rating";
import Sales from "./components/Sales";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Orders from "./Orders";

const App=()=>{
  return(
    <>
     <div class="navbars">
      <PrimaryNavbar/>

      <SecondaryNavbar/>

      <div class="container">
        <Customer/>
        <Delivery/>
        <Rating/>
        <Sales/>
        <Orders/>
      </div>
    </div>
    </>
  )
}
export default App;