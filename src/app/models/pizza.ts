export class Pizza {
    id?: number;
    nom?: string;
    base?: string;
    image?: string;
    ingredient1?: string;
    ingredient2?: string;
    ingredient3?: string;
    ingredient4?: string;
    prixPT?: number;
    prixMY?: number;
    prixGD?: number;

    constructor(id?: number, nom?: string, base?: string, image?: string, ingredient1?: string, 
        ingredient2?: string, ingredient3?: string, ingredient4?: string, prixPT?: number, prixMY?: number, prixGD?: number) {
        this.id = id;
        this.nom = nom;
        this.base = base;
        this.image = image;
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.ingredient3 = ingredient3;
        this.ingredient4 = ingredient4;
        this.prixPT = prixPT;
        this.prixMY = prixMY;
        this.prixGD = prixGD;
    }
}
