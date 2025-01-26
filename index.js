let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
};


const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen"}
];

tabBtn.addEventListener("click", function() {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
});

function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++){
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
                </a>
            </li>
        `;
    };
    
    ulEl.innerHTML = listItems;
};

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    inputEl.value = "";
});



