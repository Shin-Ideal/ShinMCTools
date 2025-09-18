let displayName1 = document.getElementById("outputCommand1");
let displayName2 = document.getElementById("outputCommand2");
let displayName3 = document.getElementById("outputCommand3");

let generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", () => {
    let mcidInput = document.getElementById("mcidInput");
    let mcid = mcidInput.value;

    displayName1.value = "/give @p minecraft:skull 1 3 {SkullOwner:" + mcid + "}";

    displayName2.value = "/give @p minecraft:player_head{SkullOwner:\"" + mcid + "\"}";

    displayName3.value = "/give @p minecraft:player_head[minecraft:profile=\"" + mcid + "\"]";
});

let copyButton1 = document.getElementById("copyButton1");
copyButton1.addEventListener("click", () => {
    displayName1.select();
    document.execCommand("copy");
});

let copyButton2 = document.getElementById("copyButton2");
copyButton2.addEventListener("click", () => {
    displayName2.select();
    document.execCommand("copy");
});

let copyButton3 = document.getElementById("copyButton3");
copyButton3.addEventListener("click", () => {
    displayName3.select();
    document.execCommand("copy");
});
