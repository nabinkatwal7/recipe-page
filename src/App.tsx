import "./App.css";

function App() {
  return (
    <div className={"bg-[#F3E5D8] w-screen min-h-screen flex justify-center items-center content-center"} >
        <div className={"bg-white rounded-xl p-6 flex flex-col gap-4 lg:w-[50%]"}>
            <img src="/assets/images/image-omelette.jpeg" className={"rounded-xl"} alt={"Omelette"}/>
            <h1 className={"font-yserif text-4xl"}>Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to
                perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div className={"bg-[#FFF7FC] p-2 flex flex-col gap-2 rounded-xl"}>
                <p className={"text-[#692645] font-bold text-xl"}>Preparation Time</p>
                <ul className={"list-disc list-inside"}>
                    <li><span className={"text-[#692645] font-bold"}>Total:</span> Approximately 10 mins.</li>
                    <li><span className={"text-[#692645] font-bold"}>Preparation:</span> Approximately 5 mins.</li>
                    <li><span className={"text-[#692645] font-bold"}>Cooking:</span> Approximately 5 mins.</li>
                </ul>
            </div>
            <div>
                <h1 className={"font-yserif text-2xl text-[#7F493C]"}>Ingredients</h1>
                <ul className={"list-disc list-inside"}>
                    <li>2-3 Large Eggs.</li>
                    <li>Salt to taste.</li>
                    <li>Pepper to taste.</li>
                    <li>1 tablespoon of butter or oil.</li>
                    <li>Optional fillings: Cheese, Vegetables or meat.</li>
                </ul>
            </div>
            <div>
                <h1 className={"font-yserif text-2xl text-[#7F493C]"}>Instructions</h1>
                <ul className={"list-decimal list-inside"}>
                    <li><span className={"text-[#692645] font-bold"}>Beat the eggs:</span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                    <li><span className={"text-[#692645] font-bold"}>Heat the pan:</span> Place a non stick pan on the middle of the oven and heat it up. You can also use a frying pan.</li>
                    <li><span className={"text-[#692645] font-bold"}>Cook the omelette:</span> Add the beaten eggs to the pan and cook the omelette for approximately 5 mins. Flip the omelette and cook for another 5 mins.</li>
                    <li><span className={"text-[#692645] font-bold"}>Add fillings(Optional):</span> Add your choice of cheese, vegetables, or meat to the omelette. </li>
                    <li><span className={"text-[#692645] font-bold"}>Fold and Serve:</span> Fold the omelette and serve.</li>
                    <li><span className={"text-[#692645] font-bold"}>Enjoy:</span> Enjoy the omelette recipe.</li>
                </ul>
            </div>
            <div>
                <h1 className={"font-yserif text-2xl text-[#7F493C]"}>Nutrition</h1>
                <table className={"table-auto border-separate border-spacing-2 w-full"}>
                    <tbody>
                        <tr className={"border-[#692645] border-b"}>
                            <td className={"text-[#692645] font-bold"}>Calories</td>
                            <td className={"text-[#7F493C] font-bold"} >200</td>
                        </tr>
                        <tr>
                            <td className={"text-[#692645] font-bold"}>Protein</td>
                            <td className={"text-[#7F493C] font-bold"} >15g</td>
                        </tr>
                        <tr>
                            <td className={"text-[#692645] font-bold"}>Fat</td>
                            <td className={"text-[#7F493C] font-bold"} >10g</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default App;
