"use strict";
const button = {
    name: "ボタン",
};
const dangerousButton = Object.create(button);
dangerousButton.name = "押すな";
console.log(button.name);
console.log(dangerousButton.name);
