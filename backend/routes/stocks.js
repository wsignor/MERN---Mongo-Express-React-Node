const axios = require("axios");
const BASE_URL = `https://api.hgbrasil.com/finance/stock_price?key=b258bdc9&symbol=b3sa3`

let User = require('../models/stocks.model');

module.exports = {
    getStocks: () => axios({
        method:"GET",
        url : BASE_URL,// + `/zodiac_compatibility/result`,
        /*headers: {
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"astrology-horoscope.p.rapidapi.com",
            "x-rapidapi-key": "yourapikey"
        },
        params: {
            mystic_dob: yourBirthday,
            mystic_dob2: theirBirthday,
            mystic_name: yourName,
            mystic_name2: theirName
        }*/
    })
}

/*router.route('/add').post((req, res) => {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;

  const newUser = new User({
    username,
    firstname,
    lastname,
    address,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
      .then(user => {
          user.username = req.body.username;
          user.firstname = req.body.firstname;
          user.lastname = req.body.lastname;
          user.address = req.body.address;

          user.save()
              .then(() => res.json('User updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;
