import React, { useState } from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./Ingredients.css";
import SideImg from "../assets/cooking.png";

export default function Ingredients() {
  return (
    <div className="footer-margin">
      <Navbar />

      <div className="search-tip">
        <p className="tip-text">
          welcome to mai's recipe. need something new to cook? i have you
          covered!
        </p>
      </div>
      
      <div className="ingredient-body">
        <div className="tab-container">
          <span>select your ingredients</span>
          <div class="tabs">
            <input type="radio" name="tabs" id="tabone" checked="checked" />
            <label htmlFor="tabone">Protien</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="chicken" type="checkbox" />
                  <label for="chicken">Chicken</label>
                </li>
                <li>
                  <input id="turkey" type="checkbox" />
                  <label for="turkey">Turkey</label>
                </li>
                <li>
                  <input id="duck" type="checkbox" />
                  <label for="duck">Duck</label>
                </li>
                <li>
                  <input id="beef" type="checkbox" />
                  <label for="beef">Beef</label>
                </li>
                <li>
                  <input id="ground-beef" type="checkbox" />
                  <label for="ground-beef">Ground Beef</label>
                </li>
                <li>
                  <input id="steak" type="checkbox" />
                  <label for="steak">Steak</label>
                </li>
                <li>
                  <input id="pork" type="checkbox" />
                  <label for="pork">Pork</label>
                </li>
                <li>
                  <input id="lamb" type="checkbox" />
                  <label for="lamb">Lamb</label>
                </li>
                <li>
                  <input id="fish" type="checkbox" />
                  <label for="fish">Fish</label>
                </li>
                <li>
                  <input id="shrimp" type="checkbox" />
                  <label for="shrimp">Shrimp</label>
                </li>
                <li>
                  <input id="salmon" type="checkbox" />
                  <label for="salmon">Salmon</label>
                </li>
                <li>
                  <input id="tuna" type="checkbox" />
                  <label for="tuna">Tuna</label>
                </li>
                <li>
                  <input id="cod" type="checkbox" />
                  <label for="cod">Cod</label>
                </li>
                <li>
                  <input id="halibut" type="checkbox" />
                  <label for="halibut">Halibut</label>
                </li>
                <li>
                  <input id="trout" type="checkbox" />
                  <label for="trout">Trout</label>
                </li>
                <li>
                  <input id="crab" type="checkbox" />
                  <label for="crab">Crab</label>
                </li>
                <li>
                  <input id="lobster" type="checkbox" />
                  <label for="lobster">Lobster</label>
                </li>
                <li>
                  <input id="scallops" type="checkbox" />
                  <label for="scallops">Scallops</label>
                </li>
                <li>
                  <input id="clams" type="checkbox" />
                  <label for="clams">Clams</label>
                </li>
                <li>
                  <input id="mussels" type="checkbox" />
                  <label for="mussels">Mussels</label>
                </li>
                <li>
                  <input id="tofu" type="checkbox" />
                  <label for="tofu">Tofu</label>
                </li>
              </ul>
            </div>

            <input type="radio" name="tabs" id="tabtwo" />
            <label htmlFor="tabtwo">Vegetables</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="tomato" type="checkbox" />
                  <label for="tomato">Tomato</label>
                </li>
                <li>
                  <input id="onion" type="checkbox" />
                  <label for="onion">Onion</label>
                </li>
                <li>
                  <input id="carrot" type="checkbox" />
                  <label for="carrot">Carrot</label>
                </li>
                <li>
                  <input id="broccoli" type="checkbox" />
                  <label for="broccoli">Broccoli</label>
                </li>
                <li>
                  <input id="spinach" type="checkbox" />
                  <label for="spinach">Spinach</label>
                </li>
                <li>
                  <input id="zucchini" type="checkbox" />
                  <label for="zucchini">Zucchini</label>
                </li>
                <li>
                  <input id="bellpepper" type="checkbox" />
                  <label for="bellpepper">Bell Pepper</label>
                </li>
                <li>
                  <input id="asparagus" type="checkbox" />
                  <label for="asparagus">Asparagus</label>
                </li>
                <li>
                  <input id="cabbage" type="checkbox" />
                  <label for="cabbage">Cabbage</label>
                </li>
                <li>
                  <input id="cucumber" type="checkbox" />
                  <label for="cucumber">Cucumber</label>
                </li>
                <li>
                  <input id="potato" type="checkbox" />
                  <label for="potato">Potato</label>
                </li>
                <li>
                  <input id="lettuce" type="checkbox" />
                  <label for="lettuce">Lettuce</label>
                </li>
                <li>
                  <input id="celery" type="checkbox" />
                  <label for="celery">Celery</label>
                </li>
                <li>
                  <input id="peas" type="checkbox" />
                  <label for="peas">Peas</label>
                </li>
                <li>
                  <input id="mushrooms" type="checkbox" />
                  <label for="mushrooms">Mushrooms</label>
                </li>
                <li>
                  <input id="cauliflower" type="checkbox" />
                  <label for="cauliflower">Cauliflower</label>
                </li>
                <li>
                  <input id="green-beans" type="checkbox" />
                  <label for="green-beans">Green Beans</label>
                </li>
                <li>
                  <input id="sweet-potato" type="checkbox" />
                  <label for="sweet-potato">Sweet Potato</label>
                </li>
                <li>
                  <input id="kale" type="checkbox" />
                  <label for="kale">Kale</label>
                </li>
                <li>
                  <input id="eggplant" type="checkbox" />
                  <label for="eggplant">Eggplant</label>
                </li>
                <li>
                  <input id="radish" type="checkbox" />
                  <label for="radish">Radish</label>
                </li>
                <li>
                  <input id="beets" type="checkbox" />
                  <label for="beets">Beets</label>
                </li>
                <li>
                  <input id="corn" type="checkbox" />
                  <label for="corn">Corn</label>
                </li>
              </ul>
            </div>

            <input type="radio" name="tabs" id="tabthree" />
            <label htmlFor="tabthree">Fruits</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="banana" type="checkbox" />
                  <label for="banana">Banana</label>
                </li>
                <li>
                  <input id="apples" type="checkbox" />
                  <label for="apples">Apples</label>
                </li>
                <li>
                  <input id="orange" type="checkbox" />
                  <label for="orange">Orange</label>
                </li>
                <li>
                  <input id="strawberries" type="checkbox" />
                  <label for="strawberries">Strawberries</label>
                </li>
                <li>
                  <input id="blueberries" type="checkbox" />
                  <label for="blueberries">Blueberries</label>
                </li>
                <li>
                  <input id="raspberries" type="checkbox" />
                  <label for="raspberries">Raspberries</label>
                </li>
                <li>
                  <input id="blackberries" type="checkbox" />
                  <label for="blackberries">Blackberries</label>
                </li>
                <li>
                  <input id="cranberries" type="checkbox" />
                  <label for="cranberries">Cranberries</label>
                </li>
                <li>
                  <input id="mango" type="checkbox" />
                  <label for="mango">Mango</label>
                </li>
                <li>
                  <input id="pineapple" type="checkbox" />
                  <label for="pineapple">Pineapple</label>
                </li>
                <li>
                  <input id="lime" type="checkbox" />
                  <label for="lime">Lime</label>
                </li>
                <li>
                  <input id="kiwi" type="checkbox" />
                  <label for="kiwi">Kiwi</label>
                </li>
                <li>
                  <input id="watermelon" type="checkbox" />
                  <label for="watermelon">Watermelon</label>
                </li>
                <li>
                  <input id="grapes" type="checkbox" />
                  <label for="grapes">Grapes</label>
                </li>
                <li>
                  <input id="peaches" type="checkbox" />
                  <label for="peaches">Peaches</label>
                </li>
                <li>
                  <input id="pear" type="checkbox" />
                  <label for="pear">Pear</label>
                </li>
                <li>
                  <input id="apricots" type="checkbox" />
                  <label for="apricots">Apricots</label>
                </li>
                <li>
                  <input id="plums" type="checkbox" />
                  <label for="plums">Plums</label>
                </li>
                <li>
                  <input id="nectarine" type="checkbox" />
                  <label for="nectarine">Nectarine</label>
                </li>
                <li>
                  <input id="grapefruit" type="checkbox" />
                  <label for="grapefruit">Grapefruit</label>
                </li>
                <li>
                  <input id="cherries" type="checkbox" />
                  <label for="cherries">Cherries</label>
                </li>
                <li>
                  <input id="pomegranate" type="checkbox" />
                  <label for="pomegranate">Pomegranate</label>
                </li>
                <li>
                  <input id="guava" type="checkbox" />
                  <label for="guava">Guava</label>
                </li>
              </ul>
            </div>

            <input type="radio" name="tabs" id="tabfour" />
            <label htmlFor="tabfour">Dairy</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="milk" type="checkbox" />
                  <label for="milk">Milk</label>
                </li>
                <li>
                  <input id="cheese" type="checkbox" />
                  <label for="cheese">Cheese</label>
                </li>
                <li>
                  <input id="yogurt" type="checkbox" />
                  <label for="yogurt">Yogurt</label>
                </li>
                <li>
                  <input id="butter" type="checkbox" />
                  <label for="butter">Butter</label>
                </li>
                <li>
                  <input id="cream" type="checkbox" />
                  <label for="cream">Cream</label>
                </li>
                <li>
                  <input id="cottage-cheese" type="checkbox" />
                  <label for="cottage-cheese">Cottage Cheese</label>
                </li>
                <li>
                  <input id="sour-cream" type="checkbox" />
                  <label for="sour-cream">Sour Cream</label>
                </li>
                <li>
                  <input id="whipped-cream" type="checkbox" />
                  <label for="whipped-cream">Whipped Cream</label>
                </li>
                <li>
                  <input id="ice-cream" type="checkbox" />
                  <label for="ice-cream">Ice Cream</label>
                </li>
                <li>
                  <input id="evaporated-milk" type="checkbox" />
                  <label for="evaporated-milk">Evaporated Milk</label>
                </li>
                <li>
                  <input id="condensed-milk" type="checkbox" />
                  <label for="condensed-milk">Condensed Milk</label>
                </li>
                <li>
                  <input id="buttermilk" type="checkbox" />
                  <label for="buttermilk">Buttermilk</label>
                </li>
                <li>
                  <input id="goat-milk" type="checkbox" />
                  <label for="goat-milk">Goat Milk</label>
                </li>
                <li>
                  <input id="almond-milk" type="checkbox" />
                  <label for="almond-milk">Almond Milk</label>
                </li>
                <li>
                  <input id="soy-milk" type="checkbox" />
                  <label for="soy-milk">Soy Milk</label>
                </li>
                <li>
                  <input id="oat-milk" type="checkbox" />
                  <label for="oat-milk">Oat Milk</label>
                </li>
                <li>
                  <input id="rice-milk" type="checkbox" />
                  <label for="rice-milk">Rice Milk</label>
                </li>
                <li>
                  <input id="maple-syrup" type="checkbox" />
                  <label for="maple-syrup">Maple Syrup</label>
                </li>
              </ul>
            </div>

            <input type="radio" name="tabs" id="tabfive" />
            <label htmlFor="tabfive">Grains & Cereal</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="rice" type="checkbox" />
                  <label for="rice">Rice</label>
                </li>
                <li>
                  <input id="quinoa" type="checkbox" />
                  <label for="quinoa">Quinoa</label>
                </li>
                <li>
                  <input id="oats" type="checkbox" />
                  <label for="oats">Oats</label>
                </li>
                <li>
                  <input id="pasta" type="checkbox" />
                  <label for="pasta">Pasta</label>
                </li>
                <li>
                  <input id="cereal" type="checkbox" />
                  <label for="cereal">Cereal</label>
                </li>
                <li>
                  <input id="rye" type="checkbox" />
                  <label for="rye">Rye</label>
                </li>
                <li>
                  <input id="wheat" type="checkbox" />
                  <label for="wheat">Wheat</label>
                </li>
                <li>
                  <input id="cornmeal" type="checkbox" />
                  <label for="cornmeal">Cornmeal</label>
                </li>
                <li>
                  <input id="rice-noodles" type="checkbox" />
                  <label for="rice-noodles">Rice Noodles</label>
                </li>
              </ul>
            </div>

            <input type="radio" name="tabs" id="tabsix" />
            <label htmlFor="tabsix">Baking Supplies</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="flour" type="checkbox" />
                  <label for="flour">Flour</label>
                </li>
                <li>
                  <input id="sugar" type="checkbox" />
                  <label for="sugar">Sugar</label>
                </li>
                <li>
                  <input id="brown-sugar" type="checkbox" />
                  <label for="brown-sugar">Brown Sugar</label>
                </li>
                <li>
                  <input id="granulated-sugar" type="checkbox" />
                  <label for="granulated-sugar">Granulated Sugar</label>
                </li>
                <li>
                  <input id="honey" type="checkbox" />
                  <label for="honey">Honey</label>
                </li>
                <li>
                  <input id="corn-syrup" type="checkbox" />
                  <label for="corn-syrup">Corn Syrup</label>
                </li>
                <li>
                  <input id="baking-powder" type="checkbox" />
                  <label for="baking-powder">Baking Powder</label>
                </li>
                <li>
                  <input id="baking-soda" type="checkbox" />
                  <label for="baking-soda">Baking Soda</label>
                </li>
                <li>
                  <input id="yeast" type="checkbox" />
                  <label for="yeast">Yeast</label>
                </li>
                <li>
                  <input id="vanilla-extract" type="checkbox" />
                  <label for="vanilla-extract">Vanilla Extract</label>
                </li>
                <li>
                  <input id="cocoa-powder" type="checkbox" />
                  <label for="cocoa-powder">Cocoa Powder</label>
                </li>
                <li>
                  <input id="chocolate-chips" type="checkbox" />
                  <label for="chocolate-chips">Chocolate Chips</label>
                </li>
                <li>
                  <input id="cornstarch" type="checkbox" />
                  <label for="cornstarch">Cornstarch</label>
                </li>
                <li>
                  <input id="bread-crumbs" type="checkbox" />
                  <label for="bread-crumbs">Bread Crumbs</label>
                </li>
              </ul>
            </div>

            <input type="radio" name="tabs" id="tabseven" />
            <label htmlFor="tabseven">Spices</label>
            <div class="tab">
              <ul class="ks-cboxtags">
                <li>
                  <input id="salt" type="checkbox" />
                  <label for="salt">Salt</label>
                </li>
                <li>
                  <input id="pepper" type="checkbox" />
                  <label for="pepper">Pepper</label>
                </li>
                <li>
                  <input id="garlic-powder" type="checkbox" />
                  <label for="garlic-powder">Garlic Powder</label>
                </li>
                <li>
                  <input id="onion-powder" type="checkbox" />
                  <label for="onion-powder">Onion Powder</label>
                </li>
                <li>
                  <input id="cayenne-pepper" type="checkbox" />
                  <label for="cayenne-pepper">Cayenne Pepper</label>
                </li>
                <li>
                  <input id="paprika" type="checkbox" />
                  <label for="paprika">Paprika</label>
                </li>
                <li>
                  <input id="cumin" type="checkbox" />
                  <label for="cumin">Cumin</label>
                </li>
                <li>
                  <input id="cinnamon" type="checkbox" />
                  <label for="cinnamon">Cinnamon</label>
                </li>
                <li>
                  <input id="mustard" type="checkbox" />
                  <label for="mustard">Mustard</label>
                </li>
                <li>
                  <input id="ketchup" type="checkbox" />
                  <label for="ketchup">Ketchup</label>
                </li>
                <li>
                  <input id="mayonnaise" type="checkbox" />
                  <label for="mayonnaise">Mayonnaise</label>
                </li>
                <li>
                  <input id="vinegar" type="checkbox" />
                  <label for="vinegar">Vinegar</label>
                </li>
                <li>
                  <input id="soy-sauce" type="checkbox" />
                  <label for="soy-sauce">Soy Sauce</label>
                </li>
                <li>
                  <input id="fish-sauce" type="checkbox" />
                  <label for="fish-sauce">Fish Sauce</label>
                </li>
                <li>
                  <input id="oyster-sauce" type="checkbox" />
                  <label for="oyster-sauce">Oyster Sauce</label>
                </li>
                <li>
                  <input id="sesame-oil" type="checkbox" />
                  <label for="sesame-oil">Sesame Oil</label>
                </li>
                <li>
                  <input id="olive-oil" type="checkbox" />
                  <label for="olive-oil">Olive Oil</label>
                </li>
                <li>
                  <input id="broth" type="checkbox" />
                  <label for="broth">Broth</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="search-instructions">
            <ol>
              <li>
                Click on the section tabs to switch between different ingredient
                categories. Each tab represents a specific group of ingredients.
              </li>
              <li>
                Within each section, you'll find a list of ingredients related
                to the chosen category. Check the checkbox ingredient you want
                to include in your selection.
              </li>
              <li>
                Once you've selected your desired ingredients, review your
                choices to ensure you've included everything you have.
              </li>
              <li>
                Finally, i'll display a list of all the wonderful recipes you
                can make with your selected ingredients.
              </li>
            </ol>
          </div>
        </div>

        {/* image side*/}
        <div className="side-container">
          <div className="side-img-container">
            <img src={SideImg}></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
