function orderProduct(productName) {
    const instagramUsername = "_get.dough";
    const message = encodeURIComponent(`Bonjour Maison Get Dough, je souhaite précommander l'article suivant : ${productName}`);
    
    window.location.href = `https://ig.me/m/${instagramUsername}?text=${message}`;
}
