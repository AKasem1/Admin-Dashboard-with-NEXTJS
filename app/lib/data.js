import { Product, User } from "./models";
import { connectDB } from "./util";

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i"); // case insensitive regex
    const limit = 2
    try {
        connectDB();
        const count = await User.find({username: {$regex: regex}}).countDocuments();
        const users = await User.find({username: {$regex: regex}})
        .limit(limit)
        .skip((page - 1) * limit)
        // console.log("count: ", count);
        return {users, count};
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch users");
    }
}

export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i"); // case insensitive regex
    const limit = 2
    try {
        connectDB();
        const count = await Product.find({title: {$regex: regex}}).countDocuments();
        const products = await Product.find({title: {$regex: regex}})
        .limit(limit)
        .skip((page - 1) * limit)
        // console.log("count: ", count);
        return {products, count};
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch products");
    }
}