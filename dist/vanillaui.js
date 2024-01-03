// Librería VanillaUI
const VanillaUI = function (container) {
    const createButton = (options) => {
      let button = container;
      let isPressed = false;

      //#region pressed
      button.addEventListener("mousedown", () => {
        isPressed = true;
        updateButtonState();
      });
  
      button.addEventListener("mouseup", () => {
        isPressed = false;
        updateButtonState();
      });

      button.addEventListener("touchstart", (e) => {
        isPressed = true;
        updateButtonState();
        e.preventDefault();
      });
      
      button.addEventListener("touchend", (e) => {
        isPressed = false;
        updateButtonState();
        e.preventDefault();
      });
      
      function updateButtonState() {
        if (isPressed) {
         button.setAttribute("pressed", "true");
        } else {
         button.removeAttribute("pressed");
        }
      }
      //#endregion


      //Default style
      button.classList.add("vui-btn");

      //Onclick
      if (typeof options.onclick === "function") {
        button.addEventListener("click", options.onclick);
      }

      //isDisabled
      if (options.isDisabled == true) {
        button.setAttribute("IsDisabled", true);
        button.setAttribute("disabled", true);
      } else{
        button.setAttribute("IsDisabled", false);
        button.removeAttribute("disabled");
      }

      //Sizes
      if (options.sizes === "Small") {
        button.classList.add("vui-btn-Small");
      }else if (options.sizes === "Large") {
        button.classList.add("vui-btn-Large");
      }else if (options.sizes === "Medium") {
        button.classList.add("vui-btn-Medium");
      }else{
        //default size
        button.classList.add("vui-btn-Medium");
      }

      //Radius
      switch (options.radius) {
        case "full":
            button.classList.add("vui-rounded-full");
            break;
        case "large":
            button.classList.add("vui-rounded-large");
            break;
        case "medium":
            button.classList.add("vui-rounded-medium");
            break;
        case "small":
            button.classList.add("vui-rounded-small");
            break;
        case "none":
            button.classList.add("vui-rounded-none");
            break;
        default:
            button.classList.add("vui-rounded-medium");
            break;
      }

      //color
      switch (options.color) {
        case "Primary":
            button.classList.add("vui-bg-Primary");
            break;
        case "Secondary":
            button.classList.add("vui-bg-Secondary");
            break;
        case "Success":
            button.classList.add("vui-bg-Success");
            break;
        case "Warning":
            button.classList.add("vui-bg-Warning");
            break;
        case "Error":
            button.classList.add("vui-bg-Error");
            break;
        default:
            button.classList.add("vui-bg-Default");
            break;
      }

      //Variants
      switch (options.Variants) {
        case "Solid":
            button.classList.add("vui-btn-variants-Solid");
            break;
        case "Faded":
            button.classList.add("vui-btn-variants-Faded");
            break;
        case "Bordered":
            button.classList.add("vui-btn-variants-Bordered");
            break;
        case "Light":
            button.classList.add("vui-btn-variants-Light");
            break;
        case "Flat":
            button.classList.add("vui-btn-variants-Flat");
            break;
        case "Ghost":
            button.classList.add("vui-btn-variants-Ghost");
            break;
        case "Shadow":
            button.classList.add("vui-btn-variants-Shadow");
            break;        
        default:
            button.classList.add("vui-btn-variants-Solid");
            break;
      }

      //isLoading
      if (options.isLoading == true) {
        
        button.setAttribute("IsLoading", true);
 
        button.setAttribute("IsLoading", true);

        let content = button.innerText;

        button.innerHTML = `
          <div class="vui-containerLoading">
            <span class="vui-loader"></span>
            <div>${content}</div>
          </div>`;

      } else{
        button.setAttribute("IsLoading", false);
      }

      //className
      if(typeof options.className != undefined && typeof options.className == "string"){
        button.classList.add(options.className);
      }



      return button;
    };
  
    return {
      createButton,
    };
};