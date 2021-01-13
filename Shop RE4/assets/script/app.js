const productsList = {
  products: [
    {
      title: "Silver Ghost",
      imageUrl: "assets/styles/img/silverghost.jpg",
      price: 8000,
      description: "A standard 9mm handgun.",
    },
    {
      title: "Punisher",
      imageUrl: "assets/styles/img/punisher.jpg",
      price: 20000,
      description: "This 9mm handgun will blast a hole through two enemies!",
    },
    {
      title: "Red 9",
      imageUrl: "assets/styles/img/red9.jpg",
      price: 14000,
      description: "A powerful 9mm handgun.",
    },
    {
      title: "Backtail",
      imageUrl: "assets/styles/img/blacktail.jpg",
      price: 24000,
      description: "A 9mm handgun with superior handling.",
    },
    {
      title: "Shotgun",
      imageUrl: "assets/styles/img/shotgun.jpg",
      price: 20000,
      description:
        "A 12-gauge pump-action shotgun. Don't leave home without it.",
    },
    {
      title: "AntiRiot Gun",
      imageUrl: "assets/styles/img/antiriotgun.jpg",
      price: 32000,
      description:
        "A light-weight pump-action shotgun. Its superior handling enables quicker aiming.",
    },
    {
      title: "Striker",
      imageUrl: "assets/styles/img/striker.jpg",
      price: 43000,
      description:
        "Equipped with the advantages of wide-shot, it enables faster firing than the standard shotgun.",
    },
    {
      title: "TMP",
      imageUrl: "assets/styles/img/tmp.jpg",
      price: 15000,
      description: "A fully-automatic machine pistol. Fires custom 9mm's.",
    },
    {
      title: "Rifle",
      imageUrl: "assets/styles/img/rifle.jpg",
      price: 12000,
      description: "A .223 caliber bolt action rifle.",
    },
    {
      title: "Semiauto Rifle",
      imageUrl: "assets/styles/img/riflesemiauto.jpg",
      price: 32000,
      description:
        "A .223 caliber rifle capable of firing faster than the standard rifle.",
    },
    {
      title: "Broken Butterfly",
      imageUrl: "assets/styles/img/brokenbutterfly.jpg",
      price: 38000,
      description:
        "A very powerful .45 magnum revolver. This will make anyone's day.",
    },
    {
      title: "Killer 7",
      imageUrl: "assets/styles/img/killer7.jpg",
      price: 77700,
      description: "A very stable yet powerful .45 magnum.",
    },
    {
      title: "Minethrower",
      imageUrl: "assets/styles/img/minethrower.jpg",
      price: 9800,
      description:
        "This weapon fires custom 'mines' that attach to objects and detonate after a period of time.",
    },
    {
      title: "Rocker Launcher",
      imageUrl: "assets/styles/img/rocketlauncher.jpg",
      price: 30000,
      description: "Do major damage to any target. (Single fire)",
    },
    {
      title: "Matilda",
      imageUrl: "assets/styles/img/matilda.jpg",
      price: 70000,
      description: "A 9mm handgun with Burst-Fire capability.",
    },
    {
      title: "Infinite Rocket Launcher",
      imageUrl: "assets/styles/img/rocketlauncherinfinite.jpg",
      price: 1000000,
      description: "The ultimate rocket launcher! Fire away!",
    },
    {
      title: "Chicago Typewritter",
      imageUrl: "assets/styles/img/chicagotypewritter.jpg",
      price: 1000000,
      description:
        "A powerful .45 caliber machinegun that fires infinite bullets! Fire away Chicago-style",
    },
    {
      title: "Handcannon",
      imageUrl: "assets/styles/img/handcannon.jpg",
      price: 0,
      description: "This is a .50 magnum. Need we say more?",
    },
    {
      title: "P.R.L 412",
      imageUrl: "assets/styles/img/prl412.jpg",
      price: 0,
      description:
        "Use the charge attack to decimate all surrounding enemies with this supremely powerful laser weapon!",
    },
  ],
  render() {
    for (const product of this.products) {
      const renderHook = document.getElementById("item-container");
      const productElement = document.createElement("div");
      productElement.className = "product-item";
      productElement.innerHTML = `
            <div class= "product-item-box">
            <img src='${product.imageUrl}' alt='${product.title}'>
            <div class='product-item__content'>
            <h2>${product.title}</h2>
            <h3>${product.price} Pesetas</h3>
            <p>${product.description}</p>
            <label>
            <div class = "button">
            <button>Add to Cart</button>
            </div>
            </label>
            </div>
            </div>
            `;

      renderHook.append(productElement);
    }
  },
};
productsList.render();
