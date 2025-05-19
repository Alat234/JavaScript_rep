


    async function LoadFromJSON(fileName) {
        try {
            const response = await fetch(fileName);
            if (!response.ok) {
                throw new Error('Can`t load file: ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('Помилка:', error);
            throw error; // Прокидаємо помилку для обробки
        }
    }

    let isCategoriesVisible = false;

    async function ShowCatalog() {
        const catalog = document.getElementById("Catalog");
        const button = document.getElementById("ShowCatalogBut");

        button.disabled = true;

        try {
            if (isCategoriesVisible) {
                while (catalog.children.length > 1) {
                    catalog.removeChild(catalog.lastChild);
                }
                isCategoriesVisible = false;
            } else {
                let categoryList = await LoadFromJSON("categories.json");
                categoryList.forEach(element => {
                    let content = document.createElement("div");
                    content.innerHTML = element.name;
                    content.setAttribute("class", "category");
                    content.setAttribute("data-id", element.id);
                    content.addEventListener("click", () => {
                        LoadContent(element.shortname);
                    });
                    catalog.appendChild(content);

                });
                let specials = document.createElement("div");
                specials.innerHTML = "Specials";
                specials.setAttribute("class", "category");
                specials.setAttribute("data-id", "specials");
                specials.addEventListener("click", async () => {
                    try {
                        const randomIndex = Math.floor(Math.random() *  categoryList.length);
                        const randomCategory = categoryList[randomIndex];
                        LoadContent(randomCategory.shortname);
                    } catch (error) {
                        document.getElementById("ContentContainer").innerHTML = "Помилка завантаження Specials";
                    }
                });
                catalog.appendChild(specials);

                isCategoriesVisible = true;
            }
        } catch (error) {
            document.getElementById("content").innerHTML = "Помилка завантаження категорій";
        } finally {
            button.disabled = false;
        }
    }
    async function LoadContent(_categoryName){
        let Data=await LoadFromJSON(_categoryName+".json");
        const{categoryName,items}=Data;
        let Catalog=document.getElementById("Catalog");
        Catalog.innerHTML=" ";
        let header=document.createElement("div");
        header.setAttribute("id","categoryHeader");
        header.innerHTML=categoryName;
        Catalog.appendChild(header);

        let contentContainer = document.getElementById("ContentContainer");
        items.forEach(element => {
                let content = document.createElement("div");
                content.setAttribute("class", "content_item");
                content.setAttribute("id", element.id);
                content.innerHTML = `
                    <img src="https://place-hold.it/200x200" alt="${element.name}">
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                    <p>Ціна: ${element.price} грн</p>   `;
                contentContainer.appendChild(content);
            });


    }
    function Home(){
        document.getElementById("Catalog").innerHTML="" +
            "<button id=\"ShowCatalogBut\" onclick=\"ShowCatalog()\">Show Catalog</button> ";
        document.getElementById("ContentContainer").innerHTML=" ";
    }











