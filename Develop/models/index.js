// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignkey: 'category_id',
});

// Categories have many Products
Category.haveMany(Product, {
  foreignkey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: ProductTag,
  foreignkey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignkey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
