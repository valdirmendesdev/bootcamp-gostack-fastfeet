// import * as Yup from 'yup';
// import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    res.json({ message: 'Should get list of recipients' });
  }

  async store(req, res) {
    res.json({ message: 'Should create a recipient' });
  }

  async show(req, res) {
    res.json({ message: 'Should return a recipient' });
  }

  async update(req, res) {
    res.json({ message: 'Should update a recipient' });
  }

  async delete(req, res) {
    res.json({ message: 'Should delete a recipient' });
  }
}

export default new RecipientController();
