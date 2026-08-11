import { useFormik } from "formik";
import * as Yup from "yup";

function LibraryValidation() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      alert("Form submitted successfully!");
      console.log(values);
    },
  });

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2>Formik + Yup Validation</h2>

        <form onSubmit={formik.handleSubmit}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter name"
            />

            {formik.touched.name &&
              formik.errors.name && (
                <small className="text-danger">
                  {formik.errors.name}
                </small>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter email"
            />

            {formik.touched.email &&
              formik.errors.email && (
                <small className="text-danger">
                  {formik.errors.email}
                </small>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter password"
            />

            {formik.touched.password &&
              formik.errors.password && (
                <small className="text-danger">
                  {formik.errors.password}
                </small>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default LibraryValidation;