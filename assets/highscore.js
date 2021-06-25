var i=0;
var storageLength = localStorage.length;



console.log(localStorage.key(0));


for (i=0; i < storageLength; i ++) {

    var displayedScoreEl = document.createElement("h4");
    initials = localStorage.key(i);
    score = localStorage.getItem(initials);
    displayedScoreEl.textContent = initials+": "+score;
    displayedScoreEl.style.margin = ".5em";
    document.body.appendChild(displayedScoreEl);
}