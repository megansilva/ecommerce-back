const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  let data = await Tag.findAll({
    include: [Product]
  });

  data = data.map((e) => e.toJSON());

  res.json(data);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  let data = await Tag.findByID(req.params.id, {
    include: [Product]
  });

  data = data.toJSON();

  res.json(data);
});

router.post('/', (req, res) => {
  // create a new tag
  
  Tag.createNew({
    category_new: req.body.category_new
  })

  res.json({message: "New category has been added"})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Tag.update({
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
  // delete on tag by its `id` value

  Tag.delete({
    where: {
      id: req.params.id
    }
  })

  res.join({message: "Your category has been deleted"})
});

module.exports = router;
