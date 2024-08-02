import { useField, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group mb-3">
      <label htmlFor={field.name} className="label__style mb-0">
        {label}
      </label>
      <div>
        <textarea
          className={`form-control shadow-none ${
            meta.touched && meta.error ? "is-invalid" : ""
          }`}
          autoComplete="off"
          {...field}
          {...props}
          value={field.value || ""}
        />
      </div>
      <ErrorMessage component="p" name={field.name} className="errorMessage" />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Textarea;
