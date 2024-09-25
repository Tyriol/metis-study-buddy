import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  // store form state to create user profile
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutMe: "",
    subjects: [],
  });

  // store validation errors
  const [errors, setErrors] = useState({});

  // handle form input changes
  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === "subjects") {
      const selectedSubjects = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: selectedSubjects,
      }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  // validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.aboutMe) newErrors.aboutMe = "About Me is required";
    if (formData.subjects.length === 0)
      newErrors.subjects = "At least one subject must be selected";
    return newErrors;
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(
        `Form submitted with data: 
          ${JSON.stringify(formData.name)}
          ${JSON.stringify(formData.email)}
          ${JSON.stringify(formData.aboutMe)}
          ${JSON.stringify(formData.subjects)}`,
      );
      // Clear form data and errors after successful submission
      setFormData({
        name: "",
        email: "",
        aboutMe: "",
        subjects: [],
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>
        <label className={styles.formLabel}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <label className={styles.formLabel}>
          About Me:
          <textarea
            name="aboutMe"
            placeholder="Tell us about yourself"
            value={formData.aboutMe}
            onChange={handleChange}
          />
          {errors.aboutMe && (
            <span className={styles.error}>{errors.aboutMe}</span>
          )}
        </label>
        <label className={styles.formLabel}>
          Subjects:
          <select
            name="subjects"
            multiple
            value={formData.subjects}
            onChange={handleChange}
          >
            <option value="front-end">Front-End</option>
            <option value="back-end">Back-End</option>
            <option value="database-engineering">Database Engineering</option>
          </select>
          {errors.subjects && (
            <span className={styles.error}>{errors.subjects}</span>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
