let funFactDisp = $("#fun-fact-display");


const sickQuotes = ["The difficult I'll do right now. The impossible will take a little while.", "The person who knows best how to win is the person who's failed the most. You could say that failure is the same as success."]

const funFacts = ["I like to collect CDs and own over 200 CDs from dozens of different bands, including Sum 41, GWAR, Soilwork, Between the Buried and Me, Ulfuls, SOIL&'PIMP'SESSIONS, GRANRODEO, and many, many more.", 
"I have three tattoos, all on my right arm. Two are from the comics Cry Havoc and The Spire by Si Spurrier, my favorite writer, and one is from the anime Clannad.", 
"I absolutely love comic books. Some of my favorite writers are Si Spurrier, Johnathan Hickman, Kate Leth, Marjorie Liu, and Cullen Bunn. Some of my favorite artists are Chris Bachalo, Rock-He Kim, Stuart Immonen, Declan Shalvey, Jim Cheung, Sana Takeda, and Kris Anka."];

var randFunFactsNum = Math.floor(Math.random() * funFacts.length)

console.log(funFacts.length);

funFactDisp.text(funFacts[randFunFactsNum]);