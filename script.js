function openCustomizer() {
    window.location.href = "customize.html";
}

function updateCustomization() {
    const model = document.getElementById("model");
    const color = document.getElementById("color");
    const engine = document.getElementById("engine");
    const brakes = document.getElementById("brakes");
    const tires = document.getElementById("tires");
    const saddleBag = document.getElementById("saddle");
    const exhaust = document.getElementById("exhaust");

    // Start by getting the base price of the selected model
    let totalPrice = parseInt(model.options[model.selectedIndex].dataset.price) 
                   + parseInt(color.options[color.selectedIndex].dataset.price)
                   + parseInt(engine.options[engine.selectedIndex].dataset.price)
                   + parseInt(brakes.options[brakes.selectedIndex].dataset.price)
                   + parseInt(tires.options[tires.selectedIndex].dataset.price);

    // Add prices for accessories if selected
    if (saddleBag.checked) totalPrice += parseInt(saddleBag.value);
    if (exhaust.checked) totalPrice += parseInt(exhaust.value);

    // Update the price display
    document.getElementById("totalPrice").innerText = totalPrice;

    // Change the bike image based on the selected model
    const bikeImage = document.getElementById("bikeImage");
    const selectedModelImage = model.options[model.selectedIndex].dataset.img;
    bikeImage.src = selectedModelImage;
}

function showSummary() {
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const engine = document.getElementById("engine").value;
    const brakes = document.getElementById("brakes").value;
    const tires = document.getElementById("tires").value;
    const saddleBag = document.getElementById("saddle").checked ? "Saddle Bags (+$100)" : "";
    const exhaust = document.getElementById("exhaust").checked ? "Custom Exhaust (+$200)" : "";
    const totalPrice = document.getElementById("totalPrice").innerText;

    document.getElementById("summaryModel").innerText = model.charAt(0).toUpperCase() + model.slice(1);
    document.getElementById("summaryColor").innerText = color.charAt(0).toUpperCase() + color.slice(1);
    document.getElementById("summaryEngine").innerText = engine.charAt(0).toUpperCase() + engine.slice(1);
    document.getElementById("summaryBrakes").innerText = brakes.charAt(0).toUpperCase() + brakes.slice(1);
    document.getElementById("summaryTires").innerText = tires.charAt(0).toUpperCase() + tires.slice(1);
    document.getElementById("summaryAccessories").innerText = [saddleBag, exhaust].filter(Boolean).join(", ") || "None";
    document.getElementById("summaryPrice").innerText = totalPrice;

    document.getElementById("summary").style.display = "block";
}
