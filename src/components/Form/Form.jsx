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

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted with data: 
        ${JSON.stringify(formData.name)}
        ${JSON.stringify(formData.email)}
        ${JSON.stringify(formData.aboutMe)}
        ${JSON.stringify(formData.subjects)}`
    );
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
        </label>
        <label className={styles.formLabel}>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          About Me:
          <input
            type="textarea"
            name="aboutMe"
            placeholder="About Me"
            value={formData.aboutMe}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          Subjects:
          <select
            name="subjects"
            multiple
            value={formData.subjects}
            onChange={handleChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
