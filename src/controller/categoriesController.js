import categoriesDatabase from "../models/categoriesDatabase.js";

export const getCategories = async (req, res) => {
  const categories = await categoriesDatabase.find({});
  return res.status(200).json(categories);
};

export const pushCategory = async (req, res) => {
  const category = req.body;
  if (!category.name) {
    return res.status(400).json({
      error: ["Missing required Category Name"],
    });
  }

  if (await categoriesDatabase.findOne({ name: category.name })) {
    return res.status(400).json({
      error: ["Category allready exists"],
    });
  }

  category.dateCreated = new Date();
  await categoriesDatabase.insertMany(category);
  return res.status(200).json(category);
};

export const deleteCategory = async (req, res) => {
  const categoryID = req.params.id;
  if (!categoryID) {
    return res.status(400).json({
      error: "Missing Category ID",
    });
  }
  await categoriesDatabase.deleteOne({
    _id: categoryID,
  });
  return res.status(200).json(categoryID);
};

export const patchCategory = async (req, res) => {
  const category = req.body;
  if (!category.name) {
    return res.status(400).json({
      error: ["Missing required Category Name"],
    });
  }

  category.dateModified = new Date();

  await categoriesDatabase.findOneAndUpdate(
    {
      _id: category._id,
    },
    {
      ...category,
    }
  );
  return res.status(200).json(`Category: ${category.name} is successfully updated.`);
};
