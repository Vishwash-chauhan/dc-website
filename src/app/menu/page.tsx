"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Sparkles, Info, X } from "lucide-react";

// The full menu dataset provided by the user
const menuItems = [
  // SOUPS
  { Name: "Velvety Cream of Tomato", Description: "A smooth tomato purée, delicately finished with cream and herbs.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Soups", VegNonVeg: "Veg" },
  { Name: "Hariyali Shorba", Description: "A soothing green vegetable broth made of spinach & peas delicately seasoned with herbs and mild spices.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Soups", VegNonVeg: "Veg" },
  { Name: "Cream Of Veg", Description: "Garden vegetables slow-cooked and blended into creamy, smooth and comforting soup preparation.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Soups", VegNonVeg: "Veg" },
  { Name: "Silken Cream of Mushroom", Description: "A velvety mushroom soup, rich and earthy in flavour.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Soups", VegNonVeg: "Veg" },

  // CHATORI CHAAT & NOSTALGIC BITES
  { Name: "Palak Patta Chaat", Description: "Crispy spinach leaves topped with sweet curd, tangy chutneys & crunchy sev for a perfect chatpata bite.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 249, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Dilli ke Dahi Bhalle", Description: "Soft lentil dumplings dunked in creamy curd with sweet and tangy chutneys.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 249, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Swadisht Aloo Tikki", Description: "Classic shallow-fried potato snack, simple yet beloved at every gathering.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 249, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Mumbaiya Batata Vada", Description: "Mini potato vadas coated in gram flour, spiced and fried crisp.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 249, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Podi Idli Bites", Description: "Soft idlis tossed in South Indian podi masala, spicy and comforting.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 249, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Chatori Chaat Canapés", Description: "Crisp canapés topped with zesty, tangy chaat flavours.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 249, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Samosa-e-Khaas", Description: "Cocktail samosas with spiced potato filling, flaky and golden.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 299, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Paneer Pakode Nostalgia", Description: "Paneer fritters in homestyle_besan batter, warm and hearty.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Pakoda-e-Mausam", Description: "Seasonal vegetables dipped in spiced batter, fried to perfection.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Mini Vada Pav", Description: "Soft pav filled with a spiced potato fritter, served with chutneys for the perfect street-style flavour in a mini size.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 299, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Channa Kulcha", Description: "Spiced Punjabi-style channa served with soft kulchas, packed with comforting North Indian flavours.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 319, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Punjabi Channa Bhatura", Description: "Fluffy bhaturas served with spicy Punjabi-style channa, packed with rich North Indian flavours.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 319, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Bombay Pav Bhaji", Description: "A buttery mix of mashed vegetables cooked with spices, served hot with soft pav for that authentic Mumbai taste.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 319, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Dilliwale Aloo Poori", Description: "Fluffy pooris served with flavourful homestyle potato curry, inspired by classic North Indian breakfasts & festive gatherings.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 319, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Cheese Balls", Description: "Golden-fried cheese balls, gooey and indulgent inside.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 319, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Veg Sandwiches", Description: "Classic vegetable sandwich, simple and comforting.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 189, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Mini Pizzas", Description: "Cheesy cocktail pizzas baked to bite-sized perfection.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 119, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },
  { Name: "Falafel-e-Dilli", Description: "Chickpea fritters served with a homestyle dip twist.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 319, Category: "Chatori Chaat & Nostalgic Bites", VegNonVeg: "Veg" },

  // TRADITIONAL STARTERS
  { Name: "Noor-e-Paneer Tikka", Description: "Creamy paneer cubes marinated in malai and spices, char-grilled for a melt-in-mouth bite", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 429, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Achari Paneer Lazeez", Description: "Paneer infused with tangy pickle spices, smoky and full of flavour.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 429, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Shahi Dahi Kebabs", Description: "Delicate hung curd kebabs, crisp outside and luxuriously soft within.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Subz Seekh-e-Khaas", Description: "Juicy veg mince seekh, roasted in the tandoor with aromatic masalas.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 429, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Nawabi Shammi Kebabs", Description: "Rustic lentil patties spiced with heritage flavours, pan-fried to perfection.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Hara Dilbahar Kebabs", Description: "Spinach and peas patties, wholesome, green and aromatic.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Soya Tandoori Chaap", Description: "Delhi’s beloved chaap, smoky, spiced and cooked to perfection in the tandoor.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Broccoli Malai Noorani", Description: "Broccoli florets enriched with cream and grilled golden.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 449, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Gobhi-e-Tandoor", Description: "Cauliflower roasted with robust masalas, rustic and homely.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Sholey-e-Dahi", Description: "Crisp golden rolls stuffed with spiced curd filling, creamy inside.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Zesty Chilli Paneer", Description: "Paneer cubes tossed in spicy Indo-Chinese sauce, tangy and bold.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 459, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Honey Chilli Aloo", Description: "Crispy potato strips glazed in sweet and spicy sauce.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 349, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Veg Spring Rolls", Description: "Golden-fried rolls stuffed with spiced vegetables.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Golden Baby Corn Delight", Description: "Crisp-fried baby corn seasoned to perfection.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Crispy Pepper Corn", Description: "Corn kernels tossed with salt, pepper and tangy spices.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 399, Category: "Traditional Starters", VegNonVeg: "Veg" },
  { Name: "Dim-Sum Bites", Description: "Steamed dumplings with delicate vegetable filling.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 349, Category: "Traditional Starters", VegNonVeg: "Veg" },

  // MAIN COURSE
  { Name: "Nawabi Malai Kofta", Description: "Golden dumplings of paneer and dry fruits simmered in a velvety Mughlai-style gravy, indulgent and royal.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 449, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Navratan Korma", Description: "A fragrant medley of vegetables, nuts and raisins, cooked in a mildly spiced creamy curry.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Subz-e-Mausam", Description: "Seasonal vegetables gently tossed with homestyle spices, celebrating freshness in every bite.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Mattar Mushroom", Description: "Tender mushrooms and green peas in a rustic onion-tomato masala.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Corn Palak Saag", Description: "Spinach and sweet corn blended into a wholesome, nourishing curry.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Sarson ka Saag (Seasonal)", Description: "Mustard greens slow-cooked with garlic and spices, a true Punjabi winter classic.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 429, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Gatte ki Subzi", Description: "Rajasthani gram flour dumplings simmered in a spiced yogurt gravy.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 329, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Kadhi Pakoda", Description: "Comforting curd-based curry with crisp besan fritters, a Punjabi staple.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Dum Aloo Kashmiri", Description: "Baby potatoes cooked in a rich Kashmiri yogurt gravy with traditional spices.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Palak Kofta", Description: "Soft spinach koftas served in a rich, mildly spiced gravy with comforting homestyle flavours.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Hing Dhaniya ke Chatpate Aloo", Description: "Potatoes tossed with hing and coriander, tangy and chatpata.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Achari Aloo", Description: "Baby potatoes flavoured with tangy pickle spices, rustic and bold.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Jeera Aloo", Description: "Simple and comforting potatoes tempered with cumin seeds.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Aloo Gobhi Masala", Description: "Potato and cauliflower cooked together with robust masalas.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Aloo Methi", Description: "A winter favourite – potatoes tossed with fresh fenugreek leaves.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 299, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Kurkuri Bhindi", Description: "Crisp, golden-fried okra sprinkled with tangy masala.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Bhindi Do Pyaza", Description: "Okra stir-fried with plenty of onions and spices, homestyle classic.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Chana Masala", Description: "Chickpeas simmered in tangy onion-tomato gravy, a hearty favourite.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 349, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Shahi Paneer Nawabi", Description: "Paneer cubes in a creamy, royal Mughlai gravy, rich with cashews and mild spices.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Paneer Pasanda Shahi", Description: "Stuffed paneer triangles in a luxurious cashew and cream gravy, fit for royalty.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 529, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Paneer Lababdar", Description: "Paneer cooked in a luscious tomato-onion gravy, balanced with aromatic spices.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Kadhai Paneer Lazeez", Description: "Paneer cooked with onions and capsicum in robust kadai masala.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Paneer Kali Mirch Zaika", Description: "Paneer in a peppery, creamy gravy, bold and indulgent.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Methi Paneer", Description: "Paneer simmered with fresh fenugreek leaves, earthy and aromatic.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Mattar Paneer Rasila", Description: "Paneer and green peas in a comforting tomato-based curry.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Palak Paneer", Description: "Cottage cheese simmered in a smooth spinach puree, healthy and soulful.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Paneer Bhurji", Description: "Scrambled paneer cooked with onions, tomatoes and spices, homely and rustic.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Dal Makhani Lazeez", Description: "Black lentils simmered on slow flame, enriched with butter and cream for a velvety taste.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 479, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Rajma Dil Pasand", Description: "Kidney beans cooked in a creamy onion-tomato gravy, a true Punjabi comfort dish.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 349, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Dal Tadka Zaika", Description: "Yellow dal tempered with ghee, cumin, garlic and red chillies, homestyle comfort.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 339, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Panchmel Dal Rajasthani", Description: "A five-lentil mix, rustic and nourishing, flavoured with Rajasthani spices.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 339, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Chana Dal Masala", Description: "Bengal gram dal cooked with onions, tomatoes and homestyle masalas.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 339, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Lahsooni Palak Dal", Description: "Spinach and lentils tempered with ghee and garlic, aromatic and healthy.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 339, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Arhar Dal-e-Zaika", Description: "Toor dal simmered with homely spices and finished with a ghee tadka.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 339, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Sookhi Urad Dal", Description: "Dry-style urad dal stir-fried with spices, rustic and satisfying.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 339, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Green/Red Thai Curry", Description: "Fresh vegetables simmered in a fragrant Thai curry with coconut milk & subtle Asian herbs.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "White/Red/Pink Sauce Pasta", Description: "Delicious pasta tossed in flavourful sauces with fresh vegetables, herbs & comforting flavours loved by all age groups.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Veggies in Butter Garlic Sauce", Description: "Seasonal vegetables sautéed in aromatic butter garlic sauce with mild herbs & seasoning.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 469, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Veggies in Hot Garlic Sauce", Description: "Crispy vegetables tossed in a bold hot garlic sauce with Asian-style flavours.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 469, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Veg Manchurian (Gravy)", Description: "Soft vegetable dumplings served in a savoury Indo-Chinese gravy with garlic & spring onions.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg" },
  { Name: "Chilli Paneer (Gravy)", Description: "Cottage cheese cubes tossed in a spicy Indo-Chinese gravy with peppers & onions.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg" },

  // SALADS
  { Name: "Heritage Green Salad", Description: "A crisp medley of seasonal greens, dressed lightly for freshness.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 159, Category: "Salads", VegNonVeg: "Veg" },
  { Name: "Imperial Russian Salad", Description: "Classic creamy salad with garden vegetables, apples, and pineapple.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 159, Category: "Salads", VegNonVeg: "Veg" },
  { Name: "Kachumber-e-Zaika", Description: "Finely diced cucumber, onion, and tomato with lemon and mild spices.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 159, Category: "Salads", VegNonVeg: "Veg" },
  { Name: "Royal Three-Bean Salad", Description: "Protein-rich beans tossed with herbs and a delicate vinaigrette.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 159, Category: "Salads", VegNonVeg: "Veg" },
  { Name: "Channa Chaat-e-Khaas", Description: "Tangy chickpeas blended with onions, tomatoes, coriander, and spices.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 159, Category: "Salads", VegNonVeg: "Veg" },
  { Name: "Nawabi Aloo Chaat", Description: "Golden potatoes tossed with chutneys and royal spice accents.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 159, Category: "Salads", VegNonVeg: "Veg" },
  { Name: "Broccoli & Corn Mélange", Description: "Tender broccoli and sweet corn in a light, creamy dressing.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 199, Category: "Salads", VegNonVeg: "Veg" },

  // YOGHURTS & RAITAS (Categorized as "Yoghurts" in data)
  { Name: "Dahi Bhalla-e-Khaas", Description: "Soft lentil dumplings in chilled yoghurt, topped with saunth and chutneys.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 189, Category: "Yoghurts", VegNonVeg: "Veg" },
  { Name: "Cucumber Pudina Raita", Description: "Refreshing yoghurt with grated cucumber and a hint of mint.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Yoghurts", VegNonVeg: "Veg" },
  { Name: "Ananas Raita", Description: "Creamy yoghurt with fresh pineapple chunks for a sweet-savoury balance.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Yoghurts", VegNonVeg: "Veg" },
  { Name: "Subz Raita", Description: "Assorted seasonal vegetables in lightly spiced yoghurt.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Yoghurts", VegNonVeg: "Veg" },
  { Name: "Boondi Raita", Description: "Golden fried boondi pearls immersed in chilled yoghurt.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Yoghurts", VegNonVeg: "Veg" },
  { Name: "Aloo Raita", Description: "Diced potatoes blended into smooth, seasoned yoghurt.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 159, Category: "Yoghurts", VegNonVeg: "Veg" },
  { Name: "Plain Dahi", Description: "Fresh, homestyle curd served chilled.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 129, Category: "Yoghurts", VegNonVeg: "Veg" },

  // BREADS
  { Name: "Tandoori Roti", Description: "Classic wholewheat roti baked in the tandoor.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Punjabi Missi Roti", Description: "Traditional spiced roti made with gram flour and wheat.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Garlic Butter Naan", Description: "Soft refined-flour naan brushed with garlic butter.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Butter Naan", Description: "Fluffy naan enriched with butter, served hot from the tandoor.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Plain Naan", Description: "Soft tandoor-baked naan, a timeless accompaniment.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Lachha Parantha", Description: "Layered flaky parantha cooked crisp on the tawa.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Tawa Roti", Description: "Wholewheat roti cooked home-style on the tawa.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },
  { Name: "Malabari Parantha", Description: "South Indian flaky parantha, rich and buttery.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 59, Category: "Breads", VegNonVeg: "Veg" },

  // RICE & BIRYANI (Categorized as "Rice" in data)
  { Name: "Zafrani Jeera Pulao", Description: "Basmati rice tempered with roasted cumin.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 349, Category: "Rice", VegNonVeg: "Veg" },
  { Name: "Navrattan Pulao", Description: "A royal medley of rice, vegetables, and dry fruits.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Rice", VegNonVeg: "Veg" },
  { Name: "Hari Matar Pulao", Description: "Fragrant rice tossed with green peas.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 349, Category: "Rice", VegNonVeg: "Veg" },
  { Name: "Kashmiri Pulao", Description: "Basmati rice with saffron, fruits, and dry nuts.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 379, Category: "Rice", VegNonVeg: "Veg" },
  { Name: "Steamed Basmati Rice", Description: "Fluffy, fragrant long-grain rice, simply steamed.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 329, Category: "Rice", VegNonVeg: "Veg" },
  { Name: "Wok Tossed Vegetable Fried Rice", Description: "Indo-Chinese style wok-tossed rice with vegetables.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 329, Category: "Rice", VegNonVeg: "Veg" },
  { Name: "Dum Vegetable Biryani", Description: "Fragrant basmati rice layered with garden-fresh vegetables, aromatic spices & slow-cooked on dum for rich flavours.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 399, Category: "Rice", VegNonVeg: "Veg" },

  // NOODLES
  { Name: "Hakka Noodles", Description: "Wok-tossed noodles with fresh vegetables, Asian sauces & comforting street-style flavours.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 329, Category: "Noodles", VegNonVeg: "Veg" },

  // BEVERAGES
  { Name: "Lassi (Sweet/Salted)", Description: "Refreshing traditional yogurt-based drink served sweet or lightly salted.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 79, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Lemonade", Description: "A cooling citrus refresher with balanced sweet & tangy flavours.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 49, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Ice Tea", Description: "Chilled tea infused with refreshing flavours for a light cooling sip.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 59, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Mint Mojito", Description: "A refreshing blend of mint, lime & fizzy flavours served chilled.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 99, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Blue Curacao", Description: "A vibrant blue refresher with citrusy flavours and a cooling finish.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 99, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Cold Coffee", Description: "chilled coffee blended to perfection for a smooth indulgence.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 99, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Hot Tea", Description: "Freshly brewed tea served warm with comforting flavours.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 49, Category: "Beverages", VegNonVeg: "Veg" },
  { Name: "Hot Coffee", Description: "Rich and aromatic hot coffee brewed for a comforting experience.", PcsDisplay: "", Unit: "ml", Calculate: "0", Rate: 79, Category: "Beverages", VegNonVeg: "Veg" },

  // DESSERTS
  { Name: "Badam Kheer-e-Khaas", Description: "Traditional slow-cooked rice pudding with rich milky flavours and a comforting festive touch.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 189, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Moong Dal Halwa", Description: "A classic North Indian sweet, slow-roasted moong dal cooked in ghee.", PcsDisplay: "250 ml", Unit: "ml", Calculate: "0", Rate: 229, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Gulab Jamun", Description: "Soft khoya dumplings fried and soaked in rose-scented sugar syrup.", PcsDisplay: "1 pc", Unit: "pc", Calculate: "0", Rate: 69, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Gajar ka Halwa (Seasonal)", Description: "Seasonal carrots slow-cooked with milk, ghee, and dry fruits.", PcsDisplay: "250 ml", Unit: "ml", Calculate: "0", Rate: 329, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Jalebi with Rabri", Description: "Crisp jalebis paired with thick, creamy rabri.", PcsDisplay: "250 ml", Unit: "ml", Calculate: "0", Rate: 299, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Royal Rasmallai", Description: "Soft saffron-infused cottage cheese discs served in chilled creamy milk with delicate festive flavours.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 159, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Phirni", Description: "Creamy slow-cooked rice pudding delicately flavoured with traditional Indian sweetness.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 149, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Vanilla Ice Cream with Hot Chocolate Sauce", Description: "Classic vanilla ice cream drizzled with warm chocolate sauce.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 79, Category: "Desserts", VegNonVeg: "Veg" },
  { Name: "Chocolate Mousse", Description: "A rich, velvety chocolate dessert with a light, airy texture.", PcsDisplay: "", Unit: "NA", Calculate: "0", Rate: 129, Category: "Desserts", VegNonVeg: "Veg" },

  // ADD-ONS
  { Name: "Gol Gappe", Description: "Crispy hollow puris served with spicy tangy water and potato filling.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Pav Bhaji", Description: "Buttery mashed vegetable curry served with soft toasted pav.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Aloo Tikki", Description: "Crispy spiced potato patties served with chutneys.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Fresh Fruits", Description: "A selection of seasonal hand-picked fresh fruits.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "PASTA", Description: "Choice of pasta cooked in flavourful sauces with herbs.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Idli Sambhar", Description: "Soft steamed rice cakes served with aromatic lentil stew.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Bhalla Papri", Description: "Soft bhallas and crunchy papris topped with yogurt and tangy chutneys.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Moong Dal Chilla", Description: "Savory pancakes made from ground moong dal, served crisp.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Mattra Kulcha", Description: "Spiced white peas served with soft, fluffy kulchas.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Shakarkhani ki chaat", Description: "Roasted sweet potato chunks tossed with tangy spices and lemon.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Aloo Chaat", Description: "Fried potato cubes tossed in spicy and tangy chaat masala.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Bhel Puri", Description: "Puffed rice tossed with onions, tomatoes, and zingy chutneys.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Sev Puri", Description: "Crispy papris topped with potatoes, onions, and plenty of sev.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" },
  { Name: "Sambhar Vada", Description: "Crispy fried lentil donuts soaked in hot aromatic sambhar.", PcsDisplay: "", Unit: "PC", Calculate: "0", Rate: 0, Category: "Add-Ons", VegNonVeg: "Veg" }
];

// Human-readable labels for categories as keyed in dataset
const categories = [
  { id: "Soups", name: "Soups" },
  { id: "Chatori Chaat & Nostalgic Bites", name: "Chaat & Bites" },
  { id: "Traditional Starters", name: "Starters" },
  { id: "Main Course", name: "Main Course" },
  { id: "Salads", name: "Salads" },
  { id: "Yoghurts", name: "Yoghurts & Raitas" },
  { id: "Breads", name: "Assorted Breads" },
  { id: "Rice", name: "Rice & Biryani" },
  { id: "Noodles", name: "Noodles" },
  { id: "Beverages", name: "Beverages" },
  { id: "Desserts", name: "Desserts" },
  { id: "Add-Ons", name: "Add-Ons & Stations" }
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Soups");
  
  // Track scroll position to update active category in sidebar
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Only register IntersectionObserver if not searching
    if (searchQuery.trim() !== "") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is around top-middle
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [searchQuery]);

  // Handle smooth scroll to section
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const target = categoryRefs.current[categoryId];
    if (target) {
      const offset = 120; // Accounts for sticky navbar/header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Group items by category, matching search query if active
  const filteredItems = menuItems.filter(item => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.Name.toLowerCase().includes(query) ||
      item.Description.toLowerCase().includes(query) ||
      item.Category.toLowerCase().includes(query)
    );
  });

  // Calculate counts for categories based on search
  const getCategoryCount = (catId: string) => {
    return menuItems.filter(item => item.Category === catId).length;
  };

  // Check if a category has any visible items under the search query
  const hasVisibleItems = (catId: string) => {
    return filteredItems.some(item => item.Category === catId);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between">
      {/* Background decoration elements */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] left-0 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-8 text-center space-y-4">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
          OUR CULINARY REPERTOIRE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#74290F] font-semibold tracking-wide max-w-4xl mx-auto leading-tight">
          A Symphony of Home-Style Flavors
        </h1>
        <div className="flex items-center gap-3 mt-4 w-full justify-center">
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />
          <span className="text-[#c5a880] text-sm">✿</span>
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />
        </div>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#292927]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Generous portions, pure cold-pressed oils, and zero commercial shortcuts. Explore our menu selections crafted with satvik purity and culinary heritage.
        </p>

        {/* Live Search Bar */}
        <div className="max-w-md mx-auto pt-6 relative">
          <div className="relative flex items-center bg-white border border-[#c5a880]/40 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="pl-4 text-[#74290F]/50">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search dishes (e.g. Paneer, Shorba, Chaat)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-3.5 text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none bg-transparent font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="pr-4 text-[#74290F]/50 hover:text-[#74290F] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-xs text-[#74290F]/70 mt-2.5 font-sans">
              Found {filteredItems.length} items matching your search
            </div>
          )}
        </div>
      </section>

      {/* 2. Menu Navigation and Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sticky Sidebar Navigation (Hidden when searching) */}
          {searchQuery.trim() === "" && (
            <div className="lg:col-span-3 sticky top-28 hidden lg:block bg-white/90 backdrop-blur-md border border-[#c5a880]/30 rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-lg">
              <span className="block text-[11px] font-bold text-[#c5a880] tracking-widest uppercase mb-4 px-3">
                Categories
              </span>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-sans font-medium transition-all duration-300 flex items-center justify-between group ${
                      activeCategory === category.id
                        ? "bg-[#74290F] text-[#FAF6F0] shadow-sm"
                        : "text-[#74290F]/80 hover:bg-[#74290F]/5 hover:text-[#74290F]"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      activeCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-[#74290F]/5 text-[#74290F]/70 group-hover:bg-[#74290F]/10"
                    }`}>
                      {getCategoryCount(category.id)}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* Right Column: Dynamic Lists */}
          <div className={`${searchQuery.trim() === "" ? "lg:col-span-9" : "lg:col-span-12"} w-full space-y-12`}>
            
            {/* Mobile Category Navigation (Horizontal Swipe, Sticky top, Hidden when searching) (Commented out for now) */}
            {/* {searchQuery.trim() === "" && (
              <div className="lg:hidden sticky top-20 z-30 bg-[#FAF6F0]/95 backdrop-blur-sm -mx-4 px-4 py-3 border-b border-[#c5a880]/20 overflow-x-auto no-scrollbar flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-[#74290F] text-[#FAF6F0]"
                        : "bg-white/80 border border-[#c5a880]/30 text-[#74290F]"
                    }`}
                  >
                    {category.name} ({getCategoryCount(category.id)})
                  </button>
                ))}
              </div>
            )} */}

            {/* Displaying Categories */}
            {categories.map((category) => {
              // Skip category if search is active and it has no matches
              if (!hasVisibleItems(category.id)) return null;

              // Filtered items belonging to this category
              const items = filteredItems.filter(item => item.Category === category.id);

              return (
                <div
                  key={category.id}
                  id={category.id}
                  ref={(el) => { categoryRefs.current[category.id] = el; }}
                  className="space-y-6 pt-4 scroll-mt-28"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[#c5a880]/30 pb-3">
                    <div className="space-y-1">
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#74290F] tracking-wide">
                        {category.name}
                      </h2>
                      {category.id === "Add-Ons" && (
                        <p className="font-sans text-xs text-[#c5a880] flex items-center gap-1">
                          <Info className="w-3.5 h-3.5" /> Station live-counters and customizable side bites.
                        </p>
                      )}
                    </div>
                    <span className="font-sans text-xs font-semibold tracking-wider text-[#c5a880] uppercase">
                      {items.length} {items.length === 1 ? "Dish" : "Dishes"}
                    </span>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, idx) => {
                      const isAddon = item.Category === "Add-Ons" || item.Rate === 0;

                      return (
                        <div
                          key={idx}
                          className="bg-white border border-[#c5a880]/20 rounded-2xl p-5 hover:border-[#c5a880]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
                        >
                          <div className="space-y-2">
                            {/* Veg Icon and Name */}
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#74290F] tracking-wide group-hover:text-[#61220C] transition-colors leading-tight">
                                {item.Name}
                              </h3>
                              {/* Veg Sign */}
                              <div className="w-4.5 h-4.5 border border-green-600 flex items-center justify-center p-0.5 rounded-sm flex-shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-green-600" />
                              </div>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-xs sm:text-sm text-[#292927]/80 font-light leading-relaxed">
                              {item.Description}
                            </p>
                          </div>

                          {/* Price and Details */}
                          <div className="flex items-center justify-between border-t border-[#c5a880]/10 pt-4 mt-4">
                            <div className="flex flex-col">
                              {isAddon ? (
                                <span className="font-sans text-xs font-semibold text-[#c5a880] uppercase tracking-wider">
                                  Custom Add-On
                                </span>
                              ) : (
                                <div className="flex items-baseline gap-1">
                                  <span className="font-sans text-lg font-bold text-[#74290F]">
                                    ₹{item.Rate}
                                  </span>
                                  {item.Unit && (
                                    <span className="font-sans text-[11px] text-[#74290F]/60">
                                      / {item.Unit.toLowerCase()}
                                    </span>
                                  )}
                                </div>
                              )}
                              {item.PcsDisplay && (
                                <span className="font-sans text-[10px] text-[#c5a880] mt-0.5">
                                  Pack: {item.PcsDisplay}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Empty Search State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16 bg-white/40 border border-[#c5a880]/20 rounded-2xl space-y-4">
                <Sparkles className="w-10 h-10 text-[#c5a880]/60 mx-auto" />
                <h3 className="font-serif text-xl font-semibold text-[#74290F]">No Dishes Found</h3>
                <p className="font-sans text-sm text-[#292927]/70 max-w-sm mx-auto">
                  We couldn&apos;t find any items matching &quot;{searchQuery}&quot;. Try checking for spelling errors or searching a different category.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-5 py-2.5 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-xs font-semibold tracking-wider rounded-md transition-colors"
                >
                  Clear Search Filter
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 3. Pure Philosophy & CTA Banner */}
      <section className="w-full bg-[#74290F] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            CUSTOM PACKAGE DESIGN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Ready to Design Your Auspicious Feast?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Our menu is fully customizable. Share your occasion details and our chefs will curate a perfect combination matching your flavor preferences and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/qet_a_quote"
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#74290F] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get a Custom Quote
            </Link>
            <a
              href="https://wa.me/918130964374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF6F0] border border-[#FAF6F0]/40 hover:border-[#FAF6F0] font-sans text-sm font-semibold tracking-wider rounded-md transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer Branding Bar */}
      <footer className="w-full bg-[#74290F] text-[#FAF6F0] py-6 border-t border-[#c5a880]/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="font-serif text-lg font-medium tracking-wide">Dahi Cheeni</span>
            <span className="font-sans text-[9px] tracking-[0.12em] text-[#c5a880] uppercase font-semibold">Exquisite Indian Catering</span>
          </div>
          <p className="font-sans text-xs text-[#FAF6F0]/60">
            &copy; {new Date().getFullYear()} Dahi Cheeni. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
