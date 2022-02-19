//  For Joi Validation
// const options = {
//     basic: {
//         abortEarly: false,
//         convert: true,
//         allowUnknown: true,
//         stripUnknown: true
//     },
//     array: {
//         abortEarly: false,
//         convert: true,
//         allowUnknown: true,
//         stripUnknown: {
//             objects: true
//         }
//     }
// };

// const validate = (schema) => {
//     return (req, res, next) => {
//         const { error, value } = schema.validate({ ...req.body, ...req.query, ...req.params, ...req.files }, options)
//         const valid = error == null;

//         if (valid) next();
//         else return response.requestValidateErroe(res, error);
//     }
// }

const Validator = require('validatorjs');

const validate = (rule) => {
    return (req, res, next) => {
        const validation = new Validator({ ...req.body, ...req.query, ...req.params, ...req.files }, rule)

        if (validation.fails()) return response.requestValidateErroe(res, validation.errors.all());
        else next();
    }
}

module.exports = validate;