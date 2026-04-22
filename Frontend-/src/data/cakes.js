import chocolate from "@/assets/cake-chocolate.jpg";
import strawberry from "@/assets/cake-strawberry.jpg";
import redvelvet from "@/assets/cake-redvelvet.jpg";
import blackforest from "@/assets/cake-blackforest.jpg";
import butterscotch from "@/assets/cake-butterscotch.jpg";
import pineapple from "@/assets/cake-pineapple.jpg";
import whiteCream from "@/assets/brand/cake-white-cream.png";
import chocolateGlaze from "@/assets/brand/cake-chocolate-glaze.png";
import kidsTheme from "@/assets/brand/cake-kids-theme.png";
import campfire from "@/assets/brand/cake-campfire.png";
import rainbowPastry from "@/assets/cakes-gallery/cake-gallery-01-rainbow-pastry.png";
import chocoPastry from "@/assets/cakes-gallery/cake-gallery-02-choco-pastry.png";
import redVelvetSlice from "@/assets/cakes-gallery/cake-gallery-03-red-velvet-slice.png";
import mirrorChoco from "@/assets/cakes-gallery/cake-gallery-04-mirror-choco.png";
import darkChocolate from "@/assets/cakes-gallery/cake-gallery-05-dark-chocolate.png";
import blackForestDesigner from "@/assets/cakes-gallery/cake-gallery-06-black-forest-designer.png";
import redMirror from "@/assets/cakes-gallery/cake-gallery-07-red-mirror.png";
import cornTheme from "@/assets/cakes-gallery/cake-gallery-08-corn-theme.png";
import momDadTheme from "@/assets/cakes-gallery/cake-gallery-09-mom-dad-theme.png";
import partyTheme from "@/assets/cakes-gallery/cake-gallery-10-party-theme.png";
import chocoTruffleRound from "@/assets/cakes-gallery/cake-gallery-11-choco-truffle-round.png";
import butterscotchCream from "@/assets/cakes-gallery/cake-gallery-12-butterscotch-cream.png";
import blackForestRound from "@/assets/cakes-gallery/cake-gallery-13-blackforest-round.png";
import pinkOreo from "@/assets/cakes-gallery/cake-gallery-14-pink-oreo.png";
import pinkChocoChip from "@/assets/cakes-gallery/cake-gallery-15-pink-choco-chip.png";
export const cakes = [
    { id: "chocolate-truffle", name: "Chocolate Truffle", price: "₹650 / kg", pricePerKg: 650, desc: "Dark Belgian ganache layered over moist cocoa sponge.", img: chocolate, category: "Chocolate", eggless: true },
    { id: "chocolate-glaze", name: "Dark Chocolate Glaze", price: "₹720 / kg", pricePerKg: 720, desc: "Mirror-glazed chocolate cake with delicate piped scrolls.", img: chocolateGlaze, category: "Chocolate" },
    { id: "black-forest", name: "Black Forest", price: "₹620 / kg", pricePerKg: 620, desc: "Cherries, dark cocoa sponge and soft whipped cream.", img: blackforest, category: "Classic" },
    { id: "red-velvet", name: "Red Velvet", price: "₹700 / kg", pricePerKg: 700, desc: "Classic red velvet with tangy cream-cheese frosting.", img: redvelvet, category: "Classic", eggless: true },
    { id: "white-forest", name: "White Forest Delight", price: "₹680 / kg", pricePerKg: 680, desc: "Cream, white chocolate shavings and glacé cherries.", img: whiteCream, category: "Cream" },
    { id: "strawberry-cream", name: "Strawberry Cream", price: "₹600 / kg", pricePerKg: 600, desc: "Fresh strawberries folded into vanilla whipped cream.", img: strawberry, category: "Cream", eggless: true },
    { id: "butterscotch", name: "Butterscotch Crunch", price: "₹580 / kg", pricePerKg: 580, desc: "Caramel praline crunch through a buttery sponge.", img: butterscotch, category: "Classic" },
    { id: "pineapple-cream", name: "Pineapple Cream", price: "₹550 / kg", pricePerKg: 550, desc: "Pineapple compote with airy whipped cream.", img: pineapple, category: "Cream", eggless: true },
    { id: "kids-theme", name: "Kids Theme Cake", price: "From ₹950 / kg", pricePerKg: 950, desc: "Custom characters, bright fondant figures, edible toppers.", img: kidsTheme, category: "Theme" },
    { id: "campfire-designer", name: "Campfire Designer", price: "From ₹1,200 / kg", pricePerKg: 1200, desc: "Showstopper bonfire cake — chocolate bark, edible flames.", img: campfire, category: "Designer" },
    { id: "rainbow-vanilla-pastry", name: "Rainbow Vanilla Pastry", price: "₹90 / piece", pricePerKg: 900, desc: "Soft rainbow sponge layered with vanilla cream and sprinkles.", img: rainbowPastry, category: "Cream", eggless: true },
    { id: "choco-ganache-pastry", name: "Choco Ganache Pastry", price: "₹95 / piece", pricePerKg: 950, desc: "Rich chocolate slice finished with glossy ganache and white garnish.", img: chocoPastry, category: "Chocolate" },
    { id: "red-velvet-pastry-slice", name: "Red Velvet Pastry Slice", price: "₹100 / piece", pricePerKg: 1000, desc: "Classic red velvet pastry with cream layers and whipped topping.", img: redVelvetSlice, category: "Classic" },
    { id: "premium-mirror-truffle", name: "Premium Mirror Truffle", price: "₹1,050 / kg", pricePerKg: 1050, desc: "Glossy mirror-finish truffle cake with crunchy chocolate pearls.", img: mirrorChoco, category: "Chocolate" },
    { id: "dark-ring-truffle", name: "Dark Ring Truffle", price: "₹980 / kg", pricePerKg: 980, desc: "Deep cocoa sponge with a thick dark chocolate ring swirl on top.", img: darkChocolate, category: "Chocolate", eggless: true },
    { id: "black-forest-royale", name: "Black Forest Royale", price: "₹920 / kg", pricePerKg: 920, desc: "Whipped cream, cherries, and dark flakes in a designer black forest style.", img: blackForestDesigner, category: "Designer" },
    { id: "ruby-mirror-cake", name: "Ruby Mirror Cake", price: "₹1,100 / kg", pricePerKg: 1100, desc: "Bright red mirror glaze with decorative white chocolate centerpiece.", img: redMirror, category: "Designer" },
    { id: "sweet-corn-theme-cake", name: "Sweet Corn Theme Cake", price: "From ₹1,250 / kg", pricePerKg: 1250, desc: "Fun custom theme cake with hand-crafted sweet-corn style toppers.", img: cornTheme, category: "Theme" },
    { id: "mom-dad-celebration", name: "Mom Dad Celebration", price: "From ₹1,300 / kg", pricePerKg: 1300, desc: "Custom message designer cake perfect for parent anniversary surprises.", img: momDadTheme, category: "Theme" },
    { id: "party-lights-theme", name: "Party Lights Theme Cake", price: "From ₹1,350 / kg", pricePerKg: 1350, desc: "Vibrant celebration cake with silhouette toppers and colorful finish.", img: partyTheme, category: "Theme" },
    { id: "choco-truffle-round", name: "Choco Truffle Round", price: "₹890 / kg", pricePerKg: 890, desc: "Smooth truffle top with chocolate curls and silver pearl accents.", img: chocoTruffleRound, category: "Chocolate" },
    { id: "butterscotch-crunch-delight", name: "Butterscotch Crunch Delight", price: "₹820 / kg", pricePerKg: 820, desc: "Butterscotch cream finish with caramel swirls and nutty side crumbs.", img: butterscotchCream, category: "Classic", eggless: true },
    { id: "black-forest-classic-round", name: "Black Forest Classic Round", price: "₹860 / kg", pricePerKg: 860, desc: "Round black forest topped with chocolate shards and glazed cherries.", img: blackForestRound, category: "Classic" },
    { id: "pink-oreo-cream-cake", name: "Pink Oreo Cream Cake", price: "₹840 / kg", pricePerKg: 840, desc: "Strawberry-toned cream cake crowned with Oreo crumbs and white chocolate.", img: pinkOreo, category: "Cream", eggless: true },
    { id: "pink-choco-chip-cake", name: "Pink Choco Chip Cake", price: "₹840 / kg", pricePerKg: 840, desc: "Soft pink cream cake finished with crunchy chocolate chips and curls.", img: pinkChocoChip, category: "Cream", eggless: true },
];
export const cakeCategories = ["All", "Chocolate", "Cream", "Classic", "Designer", "Theme"];
