import { useForm } from "react-hook-form";

/**
 * The ContactForm function creates a form with input fields for name, email, and message, and a submit
 * button that logs the form data when clicked.
 * @returns A React functional component that renders a form with input fields for name, email, and
 * message, and a submit button. The form uses the `useForm` hook from the `react-hook-form` library to
 * handle form submission and data validation. When the form is submitted, the `onSubmit` function is
 * called, which logs the form data to the console.
 */
function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input type="text" {...register("name")} />

      <label>Email:</label>
      <input type="email" {...register("email")} />

      <label>Message:</label>
      <textarea {...register("message")} />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;