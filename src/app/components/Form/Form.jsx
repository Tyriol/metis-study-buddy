import styles from "./Form.module.css";
import React, { useState, useEffect } from "react";
import supabase from "@/helpers/supabaseClient";

const Form = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  // store form state to create user profile
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.aboutMe) newErrors.aboutMe = "About Me is required";
    if (formData.subjects.length === 0)
      newErrors.subjects = "At least one subject must be selected";
    return newErrors;
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const { data, error } = await supabase
        .from("profiles")
        .update({
          id: supabase.auth.getUser().id, // Use the authenticated user's id
          first_name: formData.firstName,
          last_name: formData.lastName,
          about_me: formData.aboutMe,
          subjects: formData.subjects,
        })
        .eq("id", user.id)
        .select();

      if (error) {
        console.log("Error inserting data:", error.message);
      } else {
        console.log("Profile created:", data);
      }

      // Clear form data after submission
      setFormData({
        firstName: "",
        lastName: "",
        aboutMe: "",
        subjects: [],
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Update Profile</h1>
        <label className={styles.formLabel}>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName}</span>
          )}
        </label>

        <label className={styles.formLabel}>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName}</span>
          )}
        </label>

        <label className={styles.formLabel}>
          About Me:
          <textarea
            name="aboutMe"
            placeholder="Tell us about yourself"
            value={formData.aboutMe}
            onChange={handleChange}
            className={styles.textAreaField}
          />
          {errors.aboutMe && (
            <span className={styles.error}>{errors.aboutMe}</span>
          )}
        </label>

        <label className={styles.formLabel}>
          Subjects (Choose up to 3):
          <select
            name="subjects"
            multiple
            value={formData.subjects}
            onChange={handleChange}
            className={styles.selectField}
          >
            <option value="Front-end Engineering">Front-End</option>
            <option value="Back-end Engineering">Back-End</option>
            <option value="Database Engineering">Database Engineering</option>
            <option value="QA Engineering/Testing">
              QA Engineering/Testing
            </option>
            <option value="DevOps">DevOps</option>
            <option value="Data and AI">Data and AI</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Product Management">Product Management</option>
          </select>
          {errors.subjects && (
            <span className={styles.error}>{errors.subjects}</span>
          )}
        </label>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
