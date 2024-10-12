import Container from "./Container";

const Newsletter = () => {
  return (
    <Container>
      <div className="bg-navColor/70 py-20 text-white mt-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let’s work together to brgrow your business
          </h2>
          <p className="text-lg text-white mb-6">
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
          <div className="flex justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-full border-gray-300  focus:outline-none focus:border-blue-500"
            />
            <button className="bg-yellow-300 rounded-full text-black px-4 py-2  hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
