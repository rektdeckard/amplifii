import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [shareLink, setShareLink] = useState("");

  const generate = () => {
    if (email && subject && body) {
      setShareLink(
        encodeURI(`mailto:${email}?subject=${subject}&body=${body}`)
      );
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <div className="min-h-screen p-32 bg-purple-600">
      <div className="max-w-lg mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <form className="bg-white w-full">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="example@domain.com"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Justice for the murder of Breonna Taylor"
              value={subject}
              onChange={({ target: { value } }) => setSubject(value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Body
            </label>
            <textarea
              className="shadow appearance-none border rounded resize-y h-32 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="body"
              type="text"
              placeholder={`Hello,

My name is [insert name]. I am a resident of [State/City] and I am emailing today to demand accountability for the racist murder of Breonna Taylor.

I demand that charges be pressed against all officers involved in this heinous killing, including Sgt. Jonathan Mattingly and officers Brett Hankison and Myles Cosgrove. They should all be fired, and should be charged and prosecuted to the fullest extent of the law for murder.

Breonna Taylor was an ER technician, working tirelessly to help others during this global pandemic. She should be alive today. She would be alive today if it were not for the gross abuse of power and white supremacy exhibited by the Louisville Police Department. All officers involved must face consequences for this murder in order to provide her family with justice and to deter law enforcement from committing racist and brutal acts of violence against communities of color.

In addition, I demand that we provide more support for community efforts and organizations that work to prevent police brutality and violence.

Sincerely,
[your name]`}
              value={body}
              onChange={({ target: { value } }) => setBody(value)}
            />
          </div>
          <div className="flex items-center">
            <button
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={generate}
            >
              Generate Link
            </button>
          </div>
        </form>
      </div>
      {!!shareLink.length && (
        <div className="max-w-lg mx-auto flex p-6">
          <div
            className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <button
              className="flex rounded-full bg-indigo-500 hover:bg-indigo-700 uppercase px-2 py-1 text-xs font-bold mr-3 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={copyText}
            >
              Copy
            </button>
            <span className="font-semibold mr-2 text-left flex-wrap">
              <a href={shareLink}>{subject}</a>
            </span>
            <svg
              className="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
