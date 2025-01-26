// The Adewunmi Lineage Data
const data = {
    name: "The Adewunmi Lineage",
    children: [
        {
            name: "Usman Adewunmi",
            children: [
                {
                    name: "Umuliari Adewunmi Ratibi",
                    children: [
                        { name: "Kareem Ratibi (Only Child)" }
                    ]
                },
                {
                    name: "Kareemu Adewunmi",
                    children: [
                        { name: "Mistura Alukimba" },
                        { name: "Abibat Oganij" }
                    ]
                },
                {
                    name: "Ali Adewunmi (Had Four Wives)",
                    children: [
                        {
                            name: "1st Wife: Wolemotu Adedoyin (Iya Idumota)",
                            children: [
                                { name: "Tamuriat Adewunmi Ajayi" },
                                { name: "Ashimiyu Bolaji Adewunmi" },
                                { name: "Sulikufuli Adewunmi" }
                            ]
                        },
                        {
                            name: "2nd Wife: Ayisat Adewunmi (Iya Agege)",
                            children: [
                                { name: "Taofeek Adewunmi" },
                                { name: "Wahab Damilare Adewunmi" },
                                { name: "Ganiu Idowu Adewunmi" }
                            ]
                        },
                        {
                            name: "3rd Wife: Adedoja Adewunmi (Iya Mewa)",
                            children: [
                                { name: "Yahya Adewunmi (Baba Porta)" },
                                { name: "Nurudeen Adewunmi (Baba Ilupeju)" },
                                { name: "Afusat Adewunmi" },
                                { name: "Muinat Adewunmi" }
                            ]
                        },
                        {
                            name: "4th Wife: Munirat Adewunmi (Iya Ifo)",
                            children: [
                                { name: "Idayat Adewunmi" },
                                { name: "Wosilat Adewunmi (Iya Owode)" },
                                { name: "Taliat Adewunmi" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// Function to create the tree
function createTree(container, data, generation = 0) {
    const node = document.createElement("div");
    node.className = `node generation-${generation}`;
    node.textContent = data.name;

    const childrenContainer = document.createElement("div");
    childrenContainer.className = `children generation-${generation + 1}`;

    if (data.children) {
        data.children.forEach(child => {
            createTree(childrenContainer, child, generation + 1);
        });

        // Toggle children on click
        node.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = childrenContainer.style.display === "none" || !childrenContainer.style.display;
            childrenContainer.style.display = isHidden ? "flex" : "none"; // Show/hide horizontally
        });
    }

    container.appendChild(node);
    container.appendChild(childrenContainer);
}

// Create the tree on the page
const treeContainer = document.getElementById("tree");
createTree(treeContainer, data);
