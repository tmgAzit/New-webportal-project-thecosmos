const validator = require('fastest-validator');
const models = require('../models');


// Create a new guardian profile
function save(req, res){
  const post = {
      firstName: req.body.fname,
      lastName: req.body.lname,
      imageUrl: req.body.image_url,
      address: req.body.address,
      relationship: req.body.relationship,
      email:req.body.email,
      userId: req.userData.user
  }
router.post('/guardians', (req, res) => {
  const {  } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const guardian = {
    name,
    image,
    address,
    email,
    relationship,
    age,
  };

  guardians.push(guardian);

  res.status(201).json({ message: 'Guardian profile created', guardian });
});

// Get all guardian profiles
router.get('/guardians', (req, res) => {
  res.status(200).json(guardians);
});

// Get a specific guardian profile by ID
router.get('/guardians/:id', (req, res) => {
  const { id } = req.params;
  const guardian = guardians[id];

  if (!guardian) {
    return res.status(404).json({ error: 'Guardian not found' });
  }

  res.status(200).json(guardian);
});

// Update a guardian profile by ID
router.put('/guardians/:id', (req, res) => {
  const { id } = req.params;
  const { name, image, address, email, relationship, age } = req.body;

  if (!guardians[id]) {
    return res.status(404).json({ error: 'Guardian not found' });
  }

  guardians[id] = {
    name,
    image,
    address,
    email,
    relationship,
    age,
  };

  res.status(200).json({ message: 'Guardian profile updated', guardian: guardians[id] });
});

// Delete a guardian profile by ID
router.delete('/guardians/:id', (req, res) => {
  const { id } = req.params;

  if (!guardians[id]) {
    return res.status(404).json({ error: 'Guardian not found' });
  }

  guardians.splice(id, 1);

  res.status(200).json({ message: 'Guardian profile deleted' });
});

module.exports = router;
