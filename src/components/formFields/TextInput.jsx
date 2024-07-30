import { useField, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group mb-3">
      <label htmlFor={field.name} className="label__style mb-0">
        {label}
      </label>
      <div>
        {props.type !== "textarea" ? (
          <input
            className={`form-control shadow-none ${
              meta.touched && meta.error ? "is-invalid" : ""
            }`}
            autoComplete="off"
            {...field}
            {...props}
          />
        ) : (
          <textarea
            className={`form-control shadow-none ${
              meta.touched && meta.error ? "is-invalid" : ""
            }`}
            autoComplete="off"
            {...field}
            {...props}
          />
        )}
      </div>
      <ErrorMessage
        component="p"
        name={field.name}
        className="errorMessage-request"
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
