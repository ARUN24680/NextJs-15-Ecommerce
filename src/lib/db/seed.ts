import { connectToDatabase } from ".";
import products from "../data";
import Product from "./models/product.model";
import { cwd } from "process";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const productsData = [...products];
    await connectToDatabase(process.env.DATABASE_URL);
    await Product.deleteMany();
    const createdProduct = await Product.insertMany(productsData);
    console.log({ createdProduct, message: "products are inserted to db" });
    process.exit(0);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to inserted Product");
  }
};

main();
