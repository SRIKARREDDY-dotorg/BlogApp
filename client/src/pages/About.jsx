import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Srikar's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Srikar's Blog is a platform where you can share your thoughts,
              experiences, and ideas with the world. Whether you're a seasoned
              writer or just starting out, Srikar's Blog is the perfect place
              for you to express yourself and connect with others.
            </p>
            <p>
              Our mission is to provide a welcoming and inclusive space for
              everyone to share their stories and learn from each other. We
              believe that everyone has a unique perspective and that everyone
              should have the opportunity to share their thoughts and ideas.
            </p>
            <p>
              We're constantly working to improve our platform and make it even
              better for you. We value feedback and suggestions from our users,
              so please don't hesitate to reach out to us if you have any
              questions or comments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
