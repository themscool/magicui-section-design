import React from "react";

const newsletter = () => {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="container">
        <div className="grid  md:grid-cols-12">
          <div className="col-span-4 sm:pb-6 pb-4">
            <h2 className="text-2xl font-semibold mb-2">Newsletter</h2>
            <p>
              No spam, notifications only about new products, updates and
              freebies.
            </p>
          </div>
          <div className="col-span-8">
            <div className="">
              <form
                action="#"
                method="post"
                className="flex flex-col space-y-4"
              >
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="flex flex-col">
                    <label className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-themePrimary text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-themePrimary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                No spam, notifications only about new products, updates and
                freebies. You can always unsubscribe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default newsletter;
