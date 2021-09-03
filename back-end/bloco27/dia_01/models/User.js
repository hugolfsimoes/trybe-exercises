const connection = require('./connection');

const { ObjectId } = require('mongodb');

const isValid = (firstName, lastname, email, password) => {
  if (
    !firstName ||
    !lastname ||
    !email ||
    !password ||
    password.length < 6 ||
    typeof password !== 'string'
  )
    return false;

  return true;
};
const addUser = async (firstName, lastName, email, password) => {
  return connection().then((db) =>
    db
      .collection('users')
      .insertOne({ firstName, lastName, email, password })
      .then((result) => ({ id: result.insertedId, firstName, lastName, email }))
  );
};

const getAllUsers = async () => {
  return connection().then((db) => db.collection('users').find({}).toArray());
};

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const user = await connection().then((db) =>
    db.collection('users').findOne(new ObjectId(id))
  );
  if (!user) return null;
  return user;
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  if (!ObjectId.isValid(id)) return null;

  const updateUser = await connection().then((db) => {
    const userId = new ObjectId(id);
    const newData = { firstName, lastName, email, password };
    return db
      .collection('users')
      .findOneAndUpdate(
        { _id: userId },
        { $set: newData },
        { returnOriginal: false }
      )
      .then((result) => result.value);
  });
  if (!updateUser) return null;

  return updateUser;
};

module.exports = { addUser, isValid, getAllUsers, getUserById, updateUser };
