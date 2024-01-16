import mongoose from "mongoose";

const connection = async (username, password) => {
    const URL = `mongodb://localhost:27017/test`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
};

export default connection;
