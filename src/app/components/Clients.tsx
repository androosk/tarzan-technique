const testimonials = [
  {
    body: "Andrew has become a dear friend and a brother. He has helped me change my life to what I want on my terms and according to my own            values",
    author: {
      name: "Aidan Barr",
      handle: "aidanbarr",
      imageUrl: "/assets/images/karsten.jpg",
    },
  },
  {
    body: "Andrew helped me out in a dark time after my wife came to me one day and said, “I can’t take this anymore. We’re done.” He helped me get my relationship back.",
    author: {
      name: "Ryan Kain",
      handle: "ryankain",
      imageUrl: "/assets/images/fred.jpg",
    },
  },
  {
    body: "I struggled for years with what it meant to be a man. Andrew got me clear on what masculinity is and how a man lives and loves. He taught me the true meaning of confidence",
    author: {
      name: "David Warren",
      handle: "davidwarren",
      imageUrl: "/assets/images/harry.jpg",
    },
  },
  {
    body: "Andrew has become a dear friend and a brother. He has helped me change my life to what I want on my terms and according to my own            values",
    author: {
      name: "Aidan Barr",
      handle: "aidanbarr",
      imageUrl: "/assets/images/karsten.jpg",
    },
  },
  {
    body: "Andrew helped me out in a dark time after my wife came to me one day and said, “I can’t take this anymore. We’re done.” He helped me get my relationship back.",
    author: {
      name: "Ryan Kain",
      handle: "ryankain",
      imageUrl: "/assets/images/fred.jpg",
    },
  },
  {
    body: "I struggled for years with what it meant to be a man. Andrew got me clear on what masculinity is and how a man lives and loves. He taught me the true meaning of confidence",
    author: {
      name: "David Warren",
      handle: "davidwarren",
      imageUrl: "/assets/images/harry.jpg",
    },
  },
  // More testimonials...
];

export default function Clients() {
  return (
    <div className="bg-white sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div> */}
        <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
