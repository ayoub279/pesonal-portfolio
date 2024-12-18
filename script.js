/*passion*/
document.getElementById('quoteButton').addEventListener('click', function() {
    const quotes = [
        "N'arrête jamais d'apprendre, car la vie ne s'arrête jamais d'enseigner.",
        "Le succès ne vient pas à vous, vous devez aller à lui.",
        "Rien n'est impossible, l'impossible prend juste plus de temps.",
        "Chaque jour est une nouvelle occasion de devenir une meilleure version de vous-même."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = randomQuote;
});
