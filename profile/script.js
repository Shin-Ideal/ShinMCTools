
let displayJavaAPI = document.getElementById("outputJavaAPI");
let displayGeyserAPI = document.getElementById("outputGeyserAPI");

let generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", () => {
    let mcidInput = document.getElementById("mcidInput");
    let mcid = mcidInput.value;

    displayJavaAPI.value = "https://api.mojang.com/users/profiles/minecraft/" + mcid;

    displayGeyserAPI.value = "https://api.geysermc.org/v2/xbox/xuid/" + mcid
});

let copyButtonAPI = document.getElementById("copyButtonJavaAPI");
copyButtonAPI.addEventListener("click", () => {
    displayJavaAPI.select();
    document.execCommand("copy");
});

let jumpButton = document.getElementById("jumpButtonJavaAPI");
jumpButton.addEventListener("click", () => {
    window.open(displayJavaAPI.value);
});

let copyButtonGeyserAPI = document.getElementById("copyButtonGeyserAPI");
copyButtonGeyserAPI.addEventListener("click", () => {
    displayGeyserAPI.select();
    document.execCommand("copy");
});

let jumpButtonGeyserAPI = document.getElementById("jumpButtonGeyserAPI");
jumpButtonGeyserAPI.addEventListener("click", () => {
    window.open(displayGeyserAPI.value);
});
