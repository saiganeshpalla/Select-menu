function showSelectedPlatform() {
    var selectElement = document.getElementById("socialMediaSelect");
    var selectedPlatform = selectElement.options[selectElement.selectedIndex].text;

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "You selected: " + selectedPlatform;
}
