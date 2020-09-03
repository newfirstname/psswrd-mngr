const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      autoIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
