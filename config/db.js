const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(`Error: database connection failed`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
