const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  let data = await Category.findAll({
    include: [Product]
  });

  data = data.map((e) => e.toJSON());

  res.json(data);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  let data = await Category.findByID(req.params.id, {
    include: [Product]
  });

  data = data.toJSON();

  res.json(data);
});

router.post('/', (req, res) => {
  // create a new category

  Category.createNew({
    category_new: req.body.category_new
  })

  res.json({message: "New category has been added"})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update({
    category_id: req.body.category_id
  },
  {
    where: {
      id: req.params.id
    }

  });

  res.json({message: "Your category has been updated"})

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  Category.delete({
    where: {
      id: req.params.id
    }
  })

  res.join({message: "Your category has been deleted"})
});

module.exports = router;
