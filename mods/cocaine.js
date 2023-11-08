elements.cocaine =  {
    density: 610
    tempHigh: 98
    color: "#e0e0e0",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    reactions: {
        "ammonia": { elem1: null, elem2: "crack" },
        "baking_soda": { elem1: null, elem2: "crack" },
    },
}

elements.crack = {
    density: 620
    tempHigh: 223, //decomps?
    color: "#e0e7e0",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    reactions: {
       "heat": { elem1: steam, elem2: "smoke" },
    },
}
