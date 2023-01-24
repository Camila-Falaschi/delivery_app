const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../middlewares/validateToken');

const create = async (data) => {
  const { name, email, password, role = 'customer' } = data;

  const user = await User.findOne({ where: { email } });

  if (user) throw new Error('User already exist');

  const token = createToken(name, email, role);

  const cryptPassword = md5(password);
  await User.create({
    name,
    email,
    password: cryptPassword,
    role,
  });

  return { token, role };
};

module.exports = {
  create,
};
