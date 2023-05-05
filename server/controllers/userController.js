const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const saltRounds = 10;

async function registerUser(username, password) {
  const existingUser = await prisma.User.findUnique({ where: { username } });

  if (existingUser) {
    throw new Error('Username is already taken');
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await prisma.User.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  return user;
}

async function loginUser(username, password) {
  const user = await prisma.User.findUnique({ where: { username } });

  if (!user) {
    throw new Error('Username not found');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error('Incorrect password');
  }

  return user;
}

module.exports = {
  registerUser,
  loginUser,
};

