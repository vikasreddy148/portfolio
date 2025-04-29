import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("message sent");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-primary mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-primary transition-colors duration-300">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-mono text-primary" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              className="block mb-2 font-mono text-primary"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              className="block mb-2 font-mono text-primary"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block w-full px-8 py-4 border border-primary text-primary font-mono
              hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300 ease-in-out
              hover:shadow-lg hover:shadow-primary/10"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
