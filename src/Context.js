import React, { createContext } from 'react'

export const DContext = createContext()

export default function Context(props) {
    const fruitItems = [
        {
            id: 1,
            name: "Apple",
            category: "Fruit",
            price: 1.2,
            description: "A fresh, crisp apple grown in temperate orchards. It is rich in dietary fiber, vitamin C, and antioxidants. Apples are commonly eaten raw, used in desserts like pies, or added to salads and smoothies for natural sweetness."
        },
        {
            id: 2,
            name: "Banana",
            category: "Fruit",
            price: 0.6,
            description: "A naturally sweet tropical fruit with a soft texture and high potassium content. Bananas are a great source of quick energy, support heart health, and are widely used in breakfast meals, baking, and smoothies."
        },
        {
            id: 3,
            name: "Carrot",
            category: "Vegetable",
            price: 0.8,
            description: "A crunchy root vegetable known for its bright orange color and high beta-carotene content. Carrots promote good vision, support immune health, and can be eaten raw, steamed, roasted, or added to soups and stews."
        },
        {
            id: 4,
            name: "Tomato",
            category: "Vegetable",
            price: 1.1,
            description: "A juicy and versatile vegetable often used as a base ingredient in many cuisines. Tomatoes are rich in lycopene, an antioxidant linked to heart health, and are commonly used in sauces, salads, and cooked dishes."
        },
        {
            id: 5,
            name: "Milk",
            category: "Dairy",
            price: 2.5,
            description: "A nutrient-rich dairy product that provides calcium, protein, and vitamin D. Milk supports bone health and is consumed on its own or used in cooking, baking, and preparation of beverages such as coffee and tea."
        },
        {
            id: 6,
            name: "Cheese",
            category: "Dairy",
            price: 4.0,
            description: "A dairy product made from fermented milk, available in many varieties and flavors. Cheese is high in protein and calcium and is commonly used in sandwiches, pizzas, salads, and gourmet dishes."
        },
        {
            id: 7,
            name: "Bread",
            category: "Bakery",
            price: 2.0,
            description: "A staple baked food made from flour, water, and yeast. Bread is consumed worldwide in many forms, including loaves, rolls, and flatbreads, and serves as a base for sandwiches and toast."
        },
        {
            id: 8,
            name: "Eggs",
            category: "Poultry",
            price: 3.2,
            description: "A highly nutritious food containing high-quality protein, essential vitamins, and minerals. Eggs are versatile in cooking and can be boiled, fried, scrambled, or used as a key ingredient in baking."
        },
        {
            id: 9,
            name: "Chicken",
            category: "Meat",
            price: 6.5,
            description: "A popular lean protein source used in a wide range of dishes. Chicken is rich in essential amino acids and can be grilled, roasted, fried, or cooked in curries and soups."
        }
    ];

    const data = {fruitItems}
  return (
      <DContext.Provider value={data}>
          {props.children}
    </DContext.Provider>
  )
}
