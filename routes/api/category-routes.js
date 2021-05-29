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
      await Category.create(req.body);
      console.log(req.body);
      res.status(200).json({ message: `Added Catgeory ${req.body.category_name}` })
    } else {
      res.status(400).json(
        { message: 'POST request for new category requires an attribute object {category_name: \'catName\'}' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    if (req.body.category_name) {
      await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json({message: `Category ID: ${req.params.id} updated. `})
    } else {
      res.status(400).json(
        { message: 'PUT request for new category requires an attribute object {category_name: \'catName\'}' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const queryResponse = await Category.destroy({ where: { id: req.params.id } });
    if (queryResponse) {
      res.status(200).json({ message: `Deleted Category ${req.params.id}` });
    } else {
      res.status(400).json({ message: `Category ID:${req.params.id} could not be found.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
