// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#180b35");
  tg.setBackgroundColor("#100821");

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  // 1. On lance l'animation de la barre après un tout petit délai
  setTimeout(() => {
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, 100);

  const contactLinks = [
 {
      name: "TELEGRAM 🌐",
      url: "https://t.me/+37S_cu57XqNmMDBk",
      id: "telegram",
      className: "telegram",
      text: "TELEGRAM 🌐",
    },
    {
      name: "POTATO 💬",
      url: "https://tato.im/joinchat/67U5gseSpCkdGCTkCT7zTQ",
      id: "potato",
      className: "potato",
      text: "POTATO 💬",
    },

  ]; // Renseigner les comptes officiels SpaceCandy uniquement.

  const appData = [
  {
    "id": "GATEAUX",
    "name": "🍰 GÂTEAUX",
    "type": "Gâteaux",
    "quality": "Gâteaux",
    "image": "CategGateaux.png",
    "products": [
      {
        "id": "cookies",
        "name": "Cookies 🍪",
        "farm": "SpaceCandy 💗",
        "type": "Gâteaux",
        "selectionType": "Cookies",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 30 mg par gâteau. ",
        "tarifs": [
          {
            "weight": "1 pièce",
            "price": 15
          },
          {
            "weight": "Plateau de 3",
            "price": 40
          },
          {
            "weight": "10 pièces",
            "price": 120
          }
        ]
      },
      {
        "id": "cake",
        "name": "Cake 🍰",
        "farm": "SpaceCandy 💗",
        "type": "Gâteaux",
        "selectionType": "Cake & Red Velvet",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 30 mg par gâteau. ",
        "tarifs": [
          {
            "weight": "1 part",
            "price": 20
          },
          {
            "weight": "3 parts",
            "price": 50
          },
          {
            "weight": "10 parts",
            "price": 140
          }
        ]
      },
      {
        "id": "red-velvet",
        "name": "Red Velvet ❤️",
        "farm": "SpaceCandy 💗",
        "type": "Gâteaux",
        "selectionType": "Cake & Red Velvet",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 30 mg par gâteau. ",
        "tarifs": [
          {
            "weight": "1 part",
            "price": 20
          },
          {
            "weight": "3 parts",
            "price": 50
          },
          {
            "weight": "10 parts",
            "price": 140
          }
        ]
      },
      {
        "id": "muffin",
        "name": "Muffin 🧁",
        "farm": "SpaceCandy 💗",
        "type": "Gâteaux",
        "selectionType": "Muffins",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 30 mg par gâteau. ",
        "tarifs": [
          {
            "weight": "1 pièce",
            "price": 15
          },
          {
            "weight": "3 pièces",
            "price": 40
          },
          {
            "weight": "10 pièces",
            "price": 120
          }
        ]
      },
      {
        "id": "brownies",
        "name": "Brownies 🍫",
        "farm": "SpaceCandy 💗",
        "type": "Gâteaux",
        "selectionType": "Brownies",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 30 mg par gâteau. ",
        "tarifs": [
          {
            "weight": "1 pièce",
            "price": 15
          },
          {
            "weight": "3 pièces",
            "price": 40
          },
          {
            "weight": "10 pièces",
            "price": 120
          }
        ]
      }
    ]
  },
  {
    "id": "BONBONS",
    "name": "🍬 BONBONS",
    "type": "Bonbons",
    "quality": "Bonbons",
    "image": "CategBonbons.png",
    "products": [
      {
        "id": "bonbon",
        "name": "Bonbons assortis 🍬",
        "farm": "SpaceCandy 💗",
        "type": "Bonbons",
        "selectionType": "Bonbons",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 50 mg par sachet de 3 pièces. ",
        "tarifs": [
          {
            "weight": "5 pièces",
            "price": 30
          },
          {
            "weight": "10 pièces",
            "price": 50
          }
        ]
      },
      {
        "id": "sucette",
        "name": "Sucettes 🍭",
        "farm": "SpaceCandy 💗",
        "type": "Bonbons",
        "selectionType": "Sucettes",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "",
        "tarifs": [
          {
            "weight": "1 pièce",
            "price": 5
          },
          {
            "weight": "5 pièces",
            "price": 20
          }
        ]
      },
      {
        "id": "pomme",
        "name": "Bonbons pomme 🍏",
        "farm": "SpaceCandy 💗",
        "type": "Bonbons",
        "selectionType": "Bonbons",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 50 mg par sachet de 3 pièces. ",
        "tarifs": [
          {
            "weight": "5 pièces",
            "price": 30
          },
          {
            "weight": "10 pièces",
            "price": 50
          }
        ]
      },
      {
        "id": "coca",
        "name": "Bonbons cola 🥤",
        "farm": "SpaceCandy 💗",
        "type": "Bonbons",
        "selectionType": "Bonbons",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 50 mg par sachet de 3 pièces. ",
        "tarifs": [
          {
            "weight": "5 pièces",
            "price": 30
          },
          {
            "weight": "10 pièces",
            "price": 50
          }
        ]
      },
      {
        "id": "fraise",
        "name": "Bonbons fraise 🍓",
        "farm": "SpaceCandy 💗",
        "type": "Bonbons",
        "selectionType": "Bonbons",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "Dosage : 50 mg par sachet de 3 pièces. ",
        "tarifs": [
          {
            "weight": "5 pièces",
            "price": 30
          },
          {
            "weight": "10 pièces",
            "price": 50
          }
        ]
      }
    ]
  },
  {
    "id": "CHOCOLAT",
    "name": "🍫 CHOCOLAT",
    "type": "Chocolat",
    "quality": "Chocolat",
    "image": "CategChocolat.png",
    "products": [
      {
        "id": "mini-chocolat",
        "name": "Tablette mini 🍫",
        "farm": "SpaceCandy 💗",
        "type": "Chocolat",
        "selectionType": "Chocolat",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "",
        "tarifs": [
          {
            "weight": "1 tablette mini",
            "price": 10
          }
        ]
      },
      {
        "id": "grande-chocolat",
        "name": "Grande tablette 🍫",
        "farm": "SpaceCandy 💗",
        "type": "Chocolat",
        "selectionType": "Chocolat",
        "featured": true,
        "promoEligible": false,
        "image": "",
        "video": "",
        "description": "",
        "tarifs": [
          {
            "weight": "1 grande tablette",
            "price": 20
          }
        ]
      }
    ]
  }
];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut
  let notificationTimeout = null; // Timer pour la notification panier
  let selectedFreeGift = ""; // Poche offerte choisie par le client
  let rouletteSpun = false; // Est-ce que la roulette a déjà été jouée
let rouletteWon = false; // Résultat de la roulette
const roulettePrizeLabel = "🎁 Cadeau"; // Lot affiché si le client gagne

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {};

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
     document.querySelectorAll('video').forEach(video => {
            video.pause();
        });

    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis"); // <-- AJOUT ICI
    const cartNav = document.getElementById("nav-cart");

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active"); // <-- AJOUT ICI
    if (cartNav) cartNav.classList.remove("active");

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else if (pageId === "page-cart" || pageId === "page-confirmation") {
      if (cartNav) cartNav.classList.add("active");
    } else if (pageId === "page-avis") {
      if (avisNav) avisNav.classList.add("active");
    } else {
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher les filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons retour si jamais ils existent
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();

    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    // Sur l'accueil : recherche + sélection du chef
    searchFilterWrapper.style.display = "flex";
    qualityFilterWrapper.style.display = "flex";

    // On cache le filtre farm sur l'accueil
    farmFilterWrapper.style.display = "none";

    // La grande grille contient des sections
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "25px";

    // Affiche tous les produits directement avec séparation
    renderCategoryList();
  }

  // --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
  function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "Toutes les gammes" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

function renderCategoryList() {
    productListContainer.innerHTML = "";

    const searchTerm = currentFilters.searchTerm.toLowerCase().trim();
    let hasResults = false;

    function createProductCard(product) {
        const card = document.createElement("div");
        card.className = "product-card product-item-card";
        card.dataset.productId = product.id;

        if (product.type === "Pack" || product.id === "PackNoel2025") {
            card.classList.add("full-width");
        }

        if (product.clickable === false) {
            card.classList.add("unclickable");
        }

        const flagHTML = product.flag
            ? `<span class="product-flag">${product.flag}</span>`
            : "";

        const mediaHTML = product.image
            ? `<div class="product-media"><img src="${product.image}" alt="${product.name}"></div>`
            : `<div class="product-media product-media-empty"></div>`;

        const firstTarif = product.tarifs && product.tarifs.length > 0
            ? product.tarifs[0]
            : null;

        const priceHTML = firstTarif && typeof firstTarif.price === "number"
            ? firstTarif.price.toFixed(2) + "€"
            : "";

            const favoriteBadgeHTML = product.customerFavorite === true
    ? `<div class="customer-favorite-badge">❤️ PRÉFÉRÉ DES CLIENTS</div>`
    : "";

        card.innerHTML = `
    ${mediaHTML}
    ${favoriteBadgeHTML}

    <div class="info">
        <div class="name">${product.name} ${flagHTML}</div>
        <div class="farm">${product.farm}</div>
        <div class="price">${priceHTML}</div>
    </div>
`;

        return card;
    }

    appData.forEach((category) => {
        let productsInCategory = [];

        if (category.products) {
            productsInCategory = category.products.map((product) => ({
                product,
                category,
            }));
        }

        if (category.farms) {
            category.farms.forEach((farm) => {
                farm.products.forEach((product) => {
                    productsInCategory.push({
                        product,
                        category,
                        farm,
                    });
                });
            });
        }

        const filteredProducts = productsInCategory.filter(({ product, category }) => {
            const productName = product.name ? product.name.toLowerCase() : "";
            const productFarm = product.farm ? product.farm.toLowerCase() : "";
            const categoryName = category.name ? category.name.toLowerCase() : "";
            const selectionType = product.selectionType ? product.selectionType.toLowerCase() : "";

            const searchMatch =
                searchTerm === "" ||
                productName.includes(searchTerm) ||
                productFarm.includes(searchTerm) ||
                categoryName.includes(searchTerm) ||
                selectionType.includes(searchTerm);

            let selectMatch = true;

            if (currentFilters.quality === "chef") {
                selectMatch = product.featured === true;
            } else if (currentFilters.quality !== "all") {
                selectMatch = product.selectionType === currentFilters.quality;
            }

            return searchMatch && selectMatch;
        });

        if (filteredProducts.length === 0) return;

        hasResults = true;

        const section = document.createElement("section");
        section.className = `home-category-section category-${category.id}`;

        // ✅ BLANCHE / CC uniquement : affichage normal sans séparation
          if (category.id !== "HASH" && category.id !== "BEUH") {
            section.innerHTML = `
                <h2 class="home-category-title">${category.name}</h2>
                <div class="home-products-grid"></div>
            `;

            const grid = section.querySelector(".home-products-grid");

            filteredProducts.forEach(({ product }) => {
                grid.appendChild(createProductCard(product));
            });

            productListContainer.appendChild(section);
            return;
        }

        // ✅ HASH et BEUH : affichage séparé par selectionType
        section.innerHTML = `
            <h2 class="home-category-title">${category.name}</h2>
            <div class="home-selection-groups"></div>
        `;

        const groupsContainer = section.querySelector(".home-selection-groups");
        const groupedProducts = {};

        filteredProducts.forEach(({ product }) => {
            const groupName = product.selectionType || product.type || "Autres";

            if (!groupedProducts[groupName]) {
                groupedProducts[groupName] = [];
            }

            groupedProducts[groupName].push(product);
        });

        Object.keys(groupedProducts).forEach((groupName) => {
    const groupBlock = document.createElement("div");
    groupBlock.className = "selection-group-block";

    // Transforme le nom de la séparation en classe CSS propre
    const groupClass = groupName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    groupBlock.classList.add(`group-${groupClass}`);

    groupBlock.innerHTML = `
        <h3 class="selection-group-title">${groupName}</h3>
        <div class="home-products-grid"></div>
    `;

            const grid = groupBlock.querySelector(".home-products-grid");

            groupedProducts[groupName].forEach((product) => {
                grid.appendChild(createProductCard(product));
            });

            groupsContainer.appendChild(groupBlock);
        });

        productListContainer.appendChild(section);
    });

    if (!hasResults) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
    }
}
  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  // --- FONCTION MODIFIÉE : Affichage liste bouton ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

      // Structure : Icone | Nom + Badge | Flèche
      btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
      productListContainer.appendChild(btn);
    });
  }

  // Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
  function renderProductListSimple(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
        imgHTML = `<img src="${product.image}" alt="${product.name}">`;
      }

      card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
      productListContainer.appendChild(card);
    });
  }
  // Affiche la liste des PRODUITS pour une farm
  function renderProductList(categoryId, farmId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // Affiche la page de détail d'un produit
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map(
        (tarif) => `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `,
      )
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe pour voir la video➡️</div>` : ""} 

            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

    // Réattache les événements (pour les variantes de couleurs)
    if (product.jars && product.jars.length > 0) {
      const variantBtns = document.querySelectorAll(".variant-btn");
      const cartBtns = document.querySelectorAll(".add-to-cart-btn");
      const updateCartButtonsColor = (colorClass) => {
        cartBtns.forEach((btn) => {
          btn.classList.remove(
            "style-purple",
            "style-red",
            "style-green",
            "style-yellow",
            "style-orange",
            "style-brown",
            "style-passion",
            "style-melon",
            // 👇 J'ai ajouté tes nouvelles ici :
            "style-gmo",
            "style-lampo",
            "style-tangier",
            "style-grappe",
          );
          if (colorClass) btn.classList.add(colorClass);
        });
      };
      updateCartButtonsColor(product.jars[0].colorClass);
      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            const color = b.dataset.colorClass;
            b.classList.remove(color);
          });
          this.classList.add("active");
          this.classList.add(this.dataset.colorClass);
          updateCartButtonsColor(this.dataset.colorClass);
          if (window.Telegram.WebApp.HapticFeedback)
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
    <div class="cart-item">
        ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
        
        <div class="item-details">
            <div class="name">${item.name}</div>
            <div class="gram">${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
            <div class="price">${item.totalPrice.toFixed(2)}€</div>
        </div>

        <div class="quantity-selector">
            <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
    </div>
`,
      )
      .join("");

    cartContainer.insertAdjacentHTML("beforeend", getFreeGiftHTML());
    cartContainer.insertAdjacentHTML("beforeend", getRouletteHTML());

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

      if (canChooseFreeGift() && selectedFreeGift) {
    itemsList.insertAdjacentHTML('beforeend', `
        <div class="cart-item">
            <div class="item-details" style="background: linear-gradient(180deg, #ffcc00, #ff6900); color: #000;">
                <div><strong>🎁 Cadeau</strong></div>
                <div>Choix : ${selectedFreeGift}</div>
                <div>Prix : 0.00€</div>
            </div>
        </div>
    `);

    if (rouletteWon) {
    itemsList.insertAdjacentHTML("beforeend", `
        <div class="cart-item">
            <div class="item-details" style="background: linear-gradient(180deg, #111, #ffcc00); color: #000;">
                <div><strong>🎰 Roulette pour les commandes a plus de 100€</strong></div>
                <div>Résultat : ${roulettePrizeLabel}</div>
                <div>Prix : 0.00€</div>
            </div>
        </div>
    `);
}
}

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
      summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Ancien compteur panier, si tu l'as encore ailleurs dans le site
    document.querySelectorAll(".cart-count").forEach((count) => {
      count.textContent = totalItems;
      count.style.display = totalItems > 0 ? "flex" : "none";
    });

    // Nouveau bouton panier dans la navbar
    const navCartSvg = document.getElementById("nav-cart-svg");
    const navCartNumber = document.getElementById("nav-cart-number");

    if (navCartSvg && navCartNumber) {
      if (totalItems > 0) {
        navCartSvg.style.display = "none";
        navCartNumber.style.display = "flex";
        navCartNumber.textContent = totalItems > 99 ? "99+" : totalItems;
      } else {
        navCartSvg.style.display = "block";
        navCartNumber.style.display = "none";
        navCartNumber.textContent = "0";
      }
    }
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    const selectionTypes = [
  ...new Set(
    allNestedProducts
      .map((product) => product.selectionType)
      .filter((type) => type && type.trim() !== "")
  ),
];

const typeOptions = selectionTypes
  .map((type) => {
    return `<option value="${type}">${type}</option>`;
  })
  .join("");

qualityFilter.innerHTML = `
    <option value="all">⭐ TOUT VOIR</option>
    <option value="chef">💖 SÉLECTION SPACE CANDY</option>
    ${typeOptions}
`;

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "Toutes les gammes" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);

    notification.classList.remove("show");
    notification.innerHTML = "";
    void notification.offsetWidth;

    notification.textContent = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
      notification.innerHTML = "";
    }, 3000);
  }

  function showStartPromoPopup() {
    const popup = document.getElementById("start-promo-popup");
    const closeBtn = document.getElementById("start-promo-close");

    if (!popup) return;

    popup.classList.add("show");

    if (closeBtn) {
      closeBtn.onclick = function () {
        popup.classList.remove("show");
      };
    }

    popup.onclick = function (e) {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    };
  }

  function getTotalPochettesCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function canChooseFreeGift() {
    return false;
  }

  function getFreeGiftHTML() { return ""; }

  function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

function canShowRoulette() {
    return false;
}

function getRouletteHTML() {
    return `
        <div class="roulette-box roulette-disabled">
            <h4>🎰 Roulette cadeau</h4>

            <div class="roulette-wheel roulette-wheel-disabled">
                🔒
            </div>

            <div class="roulette-result">
                Roulette indisponible pour le moment
            </div>

            <p class="roulette-disabled-text">
                Elle sera bientôt de retour 🎁
            </p>

            <button class="roulette-btn" type="button" disabled>
                Indisponible
            </button>
        </div>
    `;
}


function spinRewardRoulette() {
    showNotification("🔒 Roulette indisponible pour le moment.");
}

/* function spinRewardRoulette() {
    if (!canShowRoulette() || rouletteSpun) return;

    const wheel = document.getElementById("roulette-wheel");
    if (wheel) {
        wheel.classList.add("spin");
    }

    setTimeout(() => {
        rouletteWon = true;
        rouletteSpun = true;

        renderCart();

        if (rouletteWon) {
            showNotification("🎁 Bravo, tu as gagné un packet de cigarette  !");
            tg.HapticFeedback.notificationOccurred("success");
        } else {
            showNotification("🎰 Dommage, pas gagné cette fois.");
            tg.HapticFeedback.notificationOccurred("warning");
        }
    }, 1000);
} */

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: displayName, // On utilise le nom avec la variante
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---

    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
      // On nettoie le nom (enlève les sauts de ligne techniques si variante)
      // On met en majuscules pour faire comme sur ta capture
      let cleanName = item.name.replace(/\n/g, " ").toUpperCase();

      // Ligne 1 : Numéro + Nom du produit (en Gras *)
      message += `*${index + 1}. ${cleanName}*\n`;

      // Ligne 2 : Quantité
      message += `• Quantité: ${item.quantity}x ${item.weight}\n`;

      // Ligne 3 : Prix unitaire
      message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;

      // Ligne 4 : Total de la ligne
      message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    if (canChooseFreeGift() && selectedFreeGift) {
    message += `*🎁 CADEAU*\n`;
    message += `• Choix: ${selectedFreeGift}\n`;
    message += `• Prix: 0.00€\n\n`;
    }

    if (rouletteWon) {
    message += `*🎰 ROULETTE \n`;
    message += `• Résultat: ${roulettePrizeLabel}\n`;
    message += `• Prix: 0.00€\n\n`;
}

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
      message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
      message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
      message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
      message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    // Pied de page
    const addressInput = document.getElementById("customer-address");
    const customerAddress = addressInput ? addressInput.value.trim() : "";

    message += `\n📍 Adresse : ${customerAddress}\n`;
    message += `💳 Paiement : ${paymentMethod}`;

    return message;
  }
  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
      }
      document.body.removeChild(textArea);
    }
  }

  // --- WHATSAPP CONTACT SAFE ---
  const WHATSAPP_NUMBER = ""; // Remplace par ton numéro, sans + ni espace

  function openWhatsAppContact() {
    if (!WHATSAPP_NUMBER) { showNotification("Contact SpaceCandy à configurer."); return; }
    const message = formatOrderMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (window.Telegram && window.Telegram.WebApp) {
      tg.openLink(whatsappUrl);
    } else {
      window.open(whatsappUrl, "_blank");
    }
  }

  // --- GESTION PAGE AVIS ---

  // 1. Bouton vers le canal Potato
  const btnChannel = document.getElementById("btn-open-channel");
  if (btnChannel) {
    btnChannel.addEventListener("click", function () {
      // Remplace par ton vrai lien de canal
      const channelLink = "";

      // Ouvre le lien via Telegram
      if (channelLink) tg.openLink(channelLink); else showNotification("Lien officiel à configurer.");
    });
  }

  // 2. (Optionnel) Zoom sur l'image quand on clique dessus
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };


  function validateCustomerAddress() {
    const addressInput = document.getElementById('customer-address');
    const addressError = document.getElementById('address-error');

    if (!addressInput) return true;

    const address = addressInput.value.trim();

    if (address.length < 5) {
        if (addressError) {
            addressError.style.display = 'block';
        }

        addressInput.style.border = '2px solid #ff5252';
        addressInput.focus();

        showNotification('📍 Merci de remplir ton adresse avant de commander.');

        if (window.Telegram && window.Telegram.WebApp && tg.HapticFeedback) {
            tg.HapticFeedback.notificationOccurred('error');
        }

        return false;
    }

    if (addressError) {
        addressError.style.display = 'none';
    }

    addressInput.style.border = '1px solid #ff6900';

    return true;
}
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      if (pageId === "page-cart") {
        renderCart();
      }

      showPage(pageId);
    });
  });

  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "free-gift-select") {
      selectedFreeGift = e.target.value;

      if (selectedFreeGift) {
        showNotification(`🎁 Cadeau choisie : ${selectedFreeGift}`);
      }
    }
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    const rouletteBtn = target.closest("#roulette-spin-btn");
if (rouletteBtn) {
    spinRewardRoulette();
    return;
}

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      let selectedVariant = null;

      // CAS 1 : Nouveau système (Boutons JARs)
      const activeVariantBtn = document.querySelector(".variant-btn.active");
      if (activeVariantBtn) {
        selectedVariant = activeVariantBtn.dataset.name;
      }
      // CAS 2 : Ancien système (Select) - Fallback
      else {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      if (canChooseFreeGift() && !selectedFreeGift) {
        showNotification("🎁 Choisis ta article offerte avant de valider.");
        return;
      }

      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }
    // Clic sur WhatsApp
    if (target.closest('#confirm-whatsapp')) {
    if (!validateCustomerAddress()) {
        showPage('page-cart');
        return;
    }

    openWhatsAppContact();
    return;
}

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage();
      updateCartCount();

      // Cache le loader et affiche la home
      showPage("page-home");

      // Affiche la popup promo juste après le chargement
      setTimeout(() => {
        showStartPromoPopup();
      }, 400);
    }, 3000);
  }

  init();
});
