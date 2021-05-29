const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    res.json(await Category.findAll({ include: [Product] }));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const queryResults = await Category.findByPk(req.params.id, { include: [Product] });
    queryResults ? res.json(queryResults) : res.status(404).json({ message: "Could not find a category with that ID" });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// create a new category - take object in { addtribute: data }
router.post('/', async (req, res) => {
  try {
    if (req.body.category_name) {
      Category.create(req.body);
      console.log(req.body);
      res.status(200).json({ message: `Added Catgeory ${req.body.category_name}` })
    } else {
      res.status(400).json({message: 'POST request for new category requires an attribute object {category_name: \'catName\'}' })
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
