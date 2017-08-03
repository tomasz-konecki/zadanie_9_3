var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
    dinosaur = "triceratops".toUpperCase();
    text2 = text.replace('Velociraptor', dinosaur);
console.log(dinosaur);
console.log(text2);
console.log(text2.substr(0, text.length/2));