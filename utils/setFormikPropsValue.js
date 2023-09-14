import { generateValidations } from "./validation";
import * as Yup from "yup";

const setFormikPropsValue = (field) => {
  const validationArrValue = {};
  const initialValues = {};
  const arrValue = {};
  const validationsFields = {};

  if (field) {
    for (const arField of field) {
      arrValue[arField.name] = arField.default;
      initialValues[arField.name] = arField.default;
      const schema = generateValidations(arField);

      validationArrValue[arField.name] = schema;
    }
  }

  // for (const singleField of field) {
  //   initialValues[singleField.name] = singleField.default;

  //   validationsFields[singleField.name] = Yup.array().of(
  //     Yup.object().shape(validationArrValue)
  //   );
  // }

  //     initialValues[newName] = [arrValue];

  //   validationsFields[newName] = Yup.array().of(

  //     Yup.object().shape(validationArrValue)

  //   );

  // }
  // console.log(validationArrValue);
  if (field?.validations) {
    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
  }
  // console.log(initialValues);
  return {
    validationSchema: Yup.object({ ...validationArrValue }),

    initialValues,

    // inputs: data[formType],
  };
};

export default setFormikPropsValue;
