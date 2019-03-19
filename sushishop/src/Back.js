//const fs = require ('fs');
const sqlite3 =require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbFile = "blog.db";
const db = new sqlite3.Database(dbFile);

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


db.serialize(() =>{
    db.run('CREATE TABLE IF NOT EXISTS products (product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, product_img TEXT, product_price INTEGER, product_description TEXT )');
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Poke Bowl Saumon", "poke-bowl-saumon-detox.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Poke Bowl Daurade", "poke-bowl-daurade.png", 15, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Maki Yellow Ponzu", "maki-yellowtail-ponzu.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Maki thon spicy", "maki-thon-spicy.png", 15, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Lunch Box 3", "lunch-box-3.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Lunch Box 6", "lunch-box-6.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Gourmet Mix", "gourmet-mix.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "California saumon wasabi", "california-saumon-a-wasabi-de-.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "ceviche de Daurade", "ceviche-de-daurade-a-leche-de-.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Sashimi Yellow", "sashimi-yellowtail.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Sushi Yellow", "sushi-yellowtail.png", 12, "Saumon, Haricot");
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description) VALUES (?,?,?,?)', "Sushi Yellow tail Safran", "sushi-yelowtail-safran-a-fleu.png", 12, "Saumon, Haricot");

    
    
    
    
    db.run('CREATE TABLLE IF NOT EXISTS category (category_id INTEGER PRIMARY KEY AUTOINCREMENT, cartegory_name TEXT, product_id INTEGER, FOREIGN KEY(product_id) REFERENCES products(id) )')
    
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Lunch Boxes", 5);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Lunch Boxes", 6);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "YellowTail", 11);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "YellowTail", 12);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Sushi", 8);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Sushi", 9);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Maki", 3)
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Maki", 4);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Bowl", 1);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Bowl", 2);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Boissons", 7);
    db.run('INSERT INTO category (category_name, product_id) VALUES (?,?)', "Boissons", 10);

})

app.get('/categoryAll', function(req, res){
    db.all('SELECT * FROM products',
    function (error, data){
        if (!error) res.send(data)
        else console.log(error);   
    })

});


app.listen(8080, function(error){
    if(!error) console.log("everything works");
});