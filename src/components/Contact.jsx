import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Contact = () => {
  const contactInfo = [
    {
      icon: HiOutlineMail,
      title: "Email",
      value: "anuj.dhungana143@gmail.com",
      link: "mailto:anuj.dhungana143@gmail.com",
    },
    {
      icon: HiOutlinePhone,
      title: "Phone",
      value: "+977(9844128810)",
      link: "tel:+9779844128810",
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Location",
      value: "Kathmandu, Nepal",
      link: "https://www.google.com/maps/place/Kathmandu,+Nepal",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#112240] to-primary text-textPrimary py-20"
    >
      <div className="max-w-7xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-16 text-center"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary px-6">
            Get In Touch
          </h2>
          <p className="py-6 text-textSecondary text-lg">
            I'm currently available for freelance work. Let's build something
            together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <info.icon className="text-secondary" size={24} />
                <div>
                  <h3 className="text-sm text-textSecondary">{info.title}</h3>
                  <p className="text-textPrimary">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="p-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary border border-white/10"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary border border-white/10"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full p-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary border border-white/10"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              className="w-full p-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary border border-white/10"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-secondary text-primary font-semibold hover:bg-secondary/90 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
