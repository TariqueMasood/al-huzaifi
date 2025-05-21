import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required."),
  lastName: Yup.string().required("Last Name is required."),
  age: Yup.number()
    .required("Age is required.")
    .min(1, "Age must be at least 1.")
    .max(120, "Age must be less than or equal to 120."),
  gender: Yup.string().required("Gender is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric.")
    .required("Phone number is required."),
  religion: Yup.string().required("Religion is required."),
  nativeLanguage: Yup.string().required("Native Language is required."),
  knownLanguage: Yup.array()
    .of(Yup.string())
    .min(1, "At least one known language must be selected.")
    .required("Known Language is required."),
  guardianName: Yup.string().required("Guardian Name is required."),
  relationship: Yup.string().required("Relationship is required."),
  faculty: Yup.string().required("Faculty is required."),
  course: Yup.string().required("Course is required."),
  country: Yup.string().required("Country is required."), // Added validation for country
  availability: Yup.string().required("Availability is required."),
  timing: Yup.string().required("Timing is required."),
  applyForScholarship: Yup.boolean(),
  scholarshipOptions: Yup.object().shape({
    scholarshipType: Yup.string().when("applyForScholarship", {
      is: true,
      then: (schema) => schema.required("Please select a scholarship type."),
      otherwise: (schema) => schema.notRequired(),
    }),
    scholarshipReason: Yup.string().when("applyForScholarship", {
      is: true,
      then: (schema) => schema.required("Scholarship reason is required when applying for a scholarship.").trim(),
      otherwise: (schema) => schema.notRequired(),
    }),
  }),
});
