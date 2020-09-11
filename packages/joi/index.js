const Joi = require("joi");

const schema = Joi.object({
  a: Joi.ref("b.c"),
  b: {
    c: Joi.number(),
  },
  c: Joi.ref("$x"),
  d: Joi.string(),
});

const { value, error } = schema.validate(
  { a: 5, b: { c: "asas" } },
  { context: { x: 5 } }
);

// console.log(value, error);

const validateAsync = (schema, value) => {
  return schema.validateAsync(value);
};

const validate = async () => {
  try {
    const { value, error } = await validateAsync(
      schema,
      { a: 3, b: { c: 3 },d:4 },
      { context: { x: 5 } }
    );
    // value -> { "a" : 123 }
  } catch (err) {
    // console.log('err:', err);
  }

  console.log(value, error);
  console.log(Object.keys(error))
};

validate();
