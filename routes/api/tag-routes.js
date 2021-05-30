const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    res.json(await Tag.findAll({ include: [Product] }));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const queryResults = await Tag.findByPk(req.params.id, { include: [Product] });
    queryResults ? res.json(queryResults) : res.status(404).json({ message: "Could not find a Tag with that ID" });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// create a new tag take object in { addtribute: data }
router.post('/', async (req, res) => {
  try {
    if (req.body.tag_name) {
      await Tag.create(req.body);
      console.log(req.body);
      res.status(200).json({ message: `Added Tag ${req.body.tag_name}` })
    } else {
      res.status(400).json(
        { message: 'POST request for new tag requires an attribute object {tag_name: \'tag Name\'}' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    if (req.body.tag_name) {
      await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json({message: `Tag ID: ${req.params.id} updated. `})
    } else {
      res.status(400).json(
        { message: 'PUT request for new tag requires an attribute object {tag_name: \'catName\'}' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const queryResponse = await Tag.destroy({ where: { id: req.params.id } });
    if (queryResponse) {
      res.status(200).json({ message: `Deleted Tag ${req.params.id}` });
    } else {
      res.status(400).json({ message: `Tag ID:${req.params.id} could not be found.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
