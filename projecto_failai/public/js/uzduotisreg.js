let text = "Aš turiu 3 obuolius ir 2 slyvas.";

let replaceText = text.replace(/\b\d+\b/g, function(match) {
    return Math.pow(parseInt(match), 2);
});

console.log(replaceText);