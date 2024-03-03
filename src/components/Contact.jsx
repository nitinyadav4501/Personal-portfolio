import React from "react";

function Contact() {
  return (
      <div className="min-h-[37rem] flex justify-around items-center">
        <div className="space-y-8">
          <div>
            <p className="text-orange-600 text-2xl font-bold">Don't be shy</p>
            <p className="text-blue-950 text-4xl font-bold">Drop Me a Line</p>
          </div>
          <form className="flex flex-col space-y-3 w-80 md:w-96">
            <input
              className="p-3 px-2 outline-none border-2 border-orange-400 rounded-lg "
              type="text"
              placeholder="Enter name"
            />
            <input
              className="p-3 px-2 outline-none border-2 border-orange-400 rounded-lg"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="p-3 px-2 outline-none border-2 border-orange-400 rounded-lg"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-400 w-fit p-2 px-5 rounded-full font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  );
}

export default Contact;
