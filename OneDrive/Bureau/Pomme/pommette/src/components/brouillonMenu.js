import React from "react";
import Mains from "./Mains";
import Extras from "./Extra";
import Total from "./Total";
import { Provider } from "../context";
import data from "../data.json";

import "../styles.css";

const { mains } = data.mains
const { sides } = data.sides
const { drinks } = data.drinks



class Menu extends React.Component {
 
    render() {
      return (
      <Provider>
        <div className="menu">
          <Mains meals={mains} />
          <aside className="aside">
            <Extras type="Sides" items={sides} />
            <Extras type="Drinks" items={drinks} />
          </aside>
          <Total />
        </div>
    </Provider>
      )
    }
}

export default Menu;
