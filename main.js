// Uso del componente
function ClickMe(){
    console.log("ClickMe");
}

VanillaUI(document.getElementById("btn-repo")).createButton({ 
    color:"Primary"
});


//Creation BTN VanillaUI
const container = document.getElementById('btn');
const vanillaUI = VanillaUI(container);
const myButton = vanillaUI.createButton({ 
    color:"Primary", 
    onclick: ClickMe,
});

//IsDisabled
VanillaUI(document.getElementById("btn-Disabled")).createButton({ 
    color:"Primary", 
    isDisabled: true
});

//Sizes Small
VanillaUI(document.getElementById("btn-Sizes-s")).createButton({ 
    color:"Primary", 
    sizes: "Small"
});
//Sizes Medium
VanillaUI(document.getElementById("btn-Sizes-m")).createButton({ 
    color:"Primary", 
    sizes: "Medium",
});
//Sizes Large
VanillaUI(document.getElementById("btn-Sizes-l")).createButton({ 
    color:"Primary", 
    sizes: "Large",
});

//Radius Full
VanillaUI(document.getElementById("btn-Radius-f")).createButton({ 
    color:"Primary", 
    radius: "full",
});
//Radius large
VanillaUI(document.getElementById("btn-Radius-l")).createButton({ 
    color:"Primary", 
    radius: "large",
});
//Radius medium
VanillaUI(document.getElementById("btn-Radius-m")).createButton({ 
    color:"Primary", 
    radius: "medium",
});
//Radius small
VanillaUI(document.getElementById("btn-Radius-s")).createButton({ 
    color:"Primary", 
    radius: "small",
});
//Radius none
VanillaUI(document.getElementById("btn-Radius-n")).createButton({ 
    color:"Primary", 
    radius: "none",
});

//Colors Default
VanillaUI(document.getElementById("btn-Colors-d")).createButton({ 
    color:"Default"
});
//Colors Primary
VanillaUI(document.getElementById("btn-Colors-p")).createButton({ 
    color:"Primary"
});
//Colors Secondary
VanillaUI(document.getElementById("btn-Colors-s")).createButton({ 
    color:"Secondary"
});
//Colors Success
VanillaUI(document.getElementById("btn-Colors-ss")).createButton({ 
    color:"Success"
});
//Colors Warning
VanillaUI(document.getElementById("btn-Colors-w")).createButton({ 
    color:"Warning"
});
//Colors Error
VanillaUI(document.getElementById("btn-Colors-e")).createButton({ 
    color:"Error"
});


//Variants Solid
VanillaUI(document.getElementById("btn-Variants-s")).createButton({ 
    color:"Primary",
    Variants:"Solid"
});
//Variants Faded
VanillaUI(document.getElementById("btn-Variants-f")).createButton({ 
    color:"Primary",
    Variants:"Faded"
});
//Variants Bordered
VanillaUI(document.getElementById("btn-Variants-b")).createButton({ 
    color:"Primary",
    Variants:"Bordered"
});
//Variants Light
VanillaUI(document.getElementById("btn-Variants-l")).createButton({ 
    color:"Primary",
    Variants:"Light"
});
//Variants Flat
VanillaUI(document.getElementById("btn-Variants-fl")).createButton({ 
    color:"Primary",
    Variants:"Flat"
});
//Variants Ghost
VanillaUI(document.getElementById("btn-Variants-g")).createButton({ 
    color:"Primary",
    Variants:"Ghost"
});
//Variants Shadow
VanillaUI(document.getElementById("btn-Variants-sh")).createButton({ 
    color:"Primary",
    Variants:"Shadow"
});


//Custom Styles
VanillaUI(document.getElementById("btn-Custom")).createButton({ 
    className:"MyGradientButton"
});


//Isloading
VanillaUI(document.getElementById("btn-Loading")).createButton({ 
    isLoading: true
});

//code demo
function Selected() {
    let previewTabs = document.querySelectorAll(".previewTab");

    previewTabs.forEach(previewTab => {
        previewTab.addEventListener("click", () => {

            previewTab.setAttribute("selected", "true");
            
            // Obtener el elemento section que contiene el botón "Preview"
            let section = previewTab.closest("section");

            section.querySelector(".codeTab").removeAttribute("selected");

            let preview = section.querySelector(".preview");
            preview.style.display = "flex";
            preview.style.visibility = "visible";

            let code = section.querySelector("pre");
            code.style.display = "none";
            code.style.visibility = "hidden";

        });
    });

    let codeTabs = document.querySelectorAll(".codeTab");

    codeTabs.forEach(codeTab =>{
        codeTab.addEventListener("click", () => {
            codeTab.setAttribute("selected", "true");

            // Obtener el elemento section que contiene el botón "Preview"
            let section = codeTab.closest("section");

            section.querySelector(".previewTab").removeAttribute("selected");
 
            let preview = section.querySelector(".preview");
            preview.style.display = "none";
            preview.style.visibility = "hidden";
 
            let code = section.querySelector("pre");
            code.style.display = "flex";
            code.style.visibility = "visible";
        });
    });
}
// Llama a la función Selected para agregar el evento click a todos los botones 
Selected();
