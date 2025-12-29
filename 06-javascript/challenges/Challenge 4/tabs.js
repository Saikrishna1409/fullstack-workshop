const tabsData = [
  {
    title: 'Overview',
    content: 'New overview text here, customized for your product.'
  },
  {
    title: 'Features',
    content: 'Updated features: fast APIs, responsive UI, and detailed analytics.'
  },
  {
    title: 'Pricing',
    content: 'New pricing: Starter, Growth, and Enterprise plans with flexible billing.'
  }
];



const tabsContainer = document.getElementById("tabs");
const contentBox = document.getElementById("content");

let activeIndex = 0;
tabsData.forEach((tab, index) => {
    const tabBtn = document.createElement("div");
    tabBtn.textContent = tab.title;
    tabBtn.className = "tab";
    tabBtn.tabIndex = 0; 

    tabBtn.onclick = () => activateTab(index);

    tabBtn.onkeydown = (e) => {
        if (e.key === "ArrowRight") {
            activateTab((index + 1) % tabsData.length);
        }
        if (e.key === "ArrowLeft") {
            activateTab((index - 1 + tabsData.length) % tabsData.length);
        }
    };
    tabsContainer.appendChild(tabBtn);
});
function activateTab(index) {
    const allTabs = document.querySelectorAll(".tab");

    allTabs.forEach(tab => tab.classList.remove("active"));

    allTabs[index].classList.add("active");
    contentBox.textContent = tabsData[index].content;

    activeIndex = index;
}
activateTab(0);