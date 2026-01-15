const {check} = require('express-validator');

export const validators = {
    requireName: check("name")
        .notEmpty()
        .not()
        .isNumeric()
        .trim()
        .withMessage("Must pass a valid product name"),

    requirePrice:check("price")
        .isNumeric()
        .custom((price: number) => {
          if (price <= 0) {
            throw new Error("Must pass a valid price");
          }
          return true;
        }),
    requireCategoryId: check("categoryId")
        .notEmpty()
        .withMessage("Must pass a valid category"),

    requireTypeId: check("typeId")
        .notEmpty()
        .withMessage("Must pass a valid type"),
}