function slugify(title) {
    const titleLower = title.toLowerCase();
    const titleNew = titleLower.split(" ");

    return titleNew.join("-")

}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));