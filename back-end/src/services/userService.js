const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');
const { createToken } = require('../utils/createToken');

const create = async (data) => {
  const { name, email, password, role = 'customer' } = data;

  const user = await User.findOne({ where: { 
    [Op.or]: [
      { email },
      { name },
    ],
  } });

  if (user) throw new Error('User already exist');

  const token = createToken(name, email, role);

  const cryptPassword = md5(password);
  await User.create({
    name,
    email,
    password: cryptPassword,
    role,
  });

  return { name, email, role, token };
};

const getSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });
  const sellersInfo = sellers.reduce((acc, seller) => {
    const { name, id } = seller.dataValues;

    return [...acc, { id, name }];
  }, []);

  return sellersInfo;
};

const getUsers = async () => User.findAll({ 
  where: { 
    role: { [Op.not]: 'administrator' },
  },
  attributes: { exclude: ['password'] },
});

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  create,
  getSellers,
  getUsers,
  deleteUser,
};
