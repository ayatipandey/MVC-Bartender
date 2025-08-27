class Cocktail {
  constructor(id, name, ingredients, price) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
}

const cocktails = [
  new Cocktail(1, 'Margarita', 'Tequila, Lime, Triple Sec', 10),
  new Cocktail(2, 'Mojito', 'Rum, Mint, Sugar, Lime, Soda', 8),
  new Cocktail(3, 'Old Fashioned', 'Whiskey, Bitters, Sugar', 12),
  new Cocktail(4, 'Manhattan ', 'Whiskey,  Angostura Bitters, Vermouth', 12),
  new Cocktail(5, 'Negroni  ', 'Gin,  Campari, Sweet Vermouth', 12),
  new Cocktail(6, 'Painkiller  ', 'Rum,  Cream of Coconut, Pineapple', 11),
  new Cocktail(7, 'Gin and Tonic  ', 'Gin,  Tonic water, Lemon', 10),
  new Cocktail(8, 'Daiquiri  ', 'Rum,  Lemon, Demerara sugar syrup', 12),
  new Cocktail(9, 'Moscow Mule  ', 'Vodka,  Ginger Beer, Lemon', 12),
  new Cocktail(10, 'Cosmopolitan  ', 'Vodka,  Triple Sec, Cranberry Juice', 12),


];

module.exports = cocktails;