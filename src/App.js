import React, { useState } from "react";
import logo from "./assets/logo.png";

const App = () => {
  const [initialized, setInitialized] = useState(true);
  const [email, setEmail] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [shareLink, setShareLink] = useState("");

  const handleEmailChanged = ({ target: { value } }) => {
    setEmail(value);
    setShareLink("");
  };

  const handleCcChanged = ({ target: { value } }) => {
    setCc(value);
    setShareLink("");
  };

  const handleBccChanged = ({ target: { value } }) => {
    setBcc(value);
    setShareLink("");
  };

  const handleSubjectChanged = ({ target: { value } }) => {
    setSubject(value);
    setShareLink("");
  };

  const handleBodyChanged = ({ target: { value } }) => {
    setBody(value);
    setShareLink("");
  };

  const generateURI = () => {
    if (email.length && subject.length && body.length) {
      setShareLink(
        encodeURI(
          `mailto:${email}?${cc.length ? `&cc=${cc}` : ""}${
            bcc.length ? `&bcc=${bcc}` : ""
          }&subject=${subject}&body=${body}`
        )
      );
      setInitialized(true);
      return;
    }

    setInitialized(false);
  };

  const copyText = () => {
    navigator.clipboard.writeText(shareLink);
  };

  const renderButton = () => (
    <div className="flex items-center">
      <button
        className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={generateURI}
      >
        Generate Link
      </button>
    </div>
  );

  const renderLink = () => (
    <div
      className="w-full p-2 bg-purple-900 items-center text-white leading-none rounded-full flex inline-flex"
      role="alert"
    >
      <svg
        className="flex-none fill-current opacity-75 h-6 w-6"
        viewBox="0 0 96 96"
      >
        <g>
          <g>
            <path
              d="M48.484,24.382l-6.93,6.926c-0.595,0.6-1.143,1.229-1.622,1.896c-0.105,0.143-0.202,0.292-0.3,0.438
c3.346-0.903,6.896-0.854,10.216,0.161l0.57-0.566l3.815-3.815c3.358-3.354,8.792-3.354,12.139,0
c3.343,3.347,3.343,8.781,0,12.135l-4.359,4.352l-0.892,0.899l-0.873,0.869l0,0l-1.45,1.458c-1.515,1.51-3.459,2.334-5.435,2.481
v0.007l0,0c-0.416,0.038-0.772,0.038-1.072,0.027c-0.678-0.033-1.064-0.135-1.064-0.135l0,0l0,0
c-1.676-0.3-3.275-1.091-4.564-2.38c-1.26-1.26-2.046-2.807-2.362-4.43c-0.008-0.049-0.015-0.09-0.023-0.142
c-1.469,0.123-2.896,0.738-4.025,1.862l-2.309,2.305c0.787,2.005,1.994,3.886,3.609,5.506c1.623,1.611,3.497,2.822,5.499,3.613
c0.374,0.142,0.75,0.27,1.124,0.397c0.314,0.093,0.63,0.187,0.951,0.259c0.023,0.007,0.038,0.015,0.061,0.022
c0.055,0.011,0.12,0.019,0.18,0.033c3.312,0.764,6.828,0.477,10.006-0.873c0.394-0.169,0.772-0.348,1.147-0.543
c0.022-0.011,0.049-0.023,0.067-0.03c0.06-0.042,0.12-0.072,0.187-0.113c0.157-0.083,0.319-0.165,0.477-0.262c0,0,0,0,0-0.004
c1.154-0.678,2.237-1.518,3.227-2.499l6.925-6.934c6.334-6.326,6.334-16.591,0-22.921C65.071,18.053,54.818,18.048,48.484,24.382z
"
            />
            <path
              d="M49.024,69.692l6.925-6.925c0.6-0.596,1.139-1.23,1.627-1.897c0.105-0.142,0.202-0.292,0.296-0.442
c-3.34,0.911-6.893,0.855-10.213-0.157l-0.569,0.566l-3.823,3.819c-3.351,3.351-8.777,3.351-12.135,0
c-3.351-3.351-3.343-8.784,0-12.135l4.354-4.355l0.9-0.895l0.869-0.869l0.007-0.008l1.447-1.45
c1.514-1.511,3.448-2.335,5.434-2.481v-0.008l0,0c0.413-0.038,0.772-0.038,1.076-0.027c0.671,0.034,1.053,0.132,1.053,0.132v0.003
h0.008c1.671,0.296,3.271,1.091,4.561,2.38c1.262,1.259,2.053,2.803,2.364,4.429c0.004,0.045,0.015,0.091,0.023,0.139
c1.469-0.12,2.901-0.739,4.013-1.859l2.32-2.309c-0.794-2.005-1.993-3.879-3.613-5.498c-1.619-1.618-3.504-2.825-5.501-3.613
c-0.371-0.149-0.742-0.277-1.116-0.393c-0.315-0.102-0.637-0.191-0.952-0.27c-0.023-0.008-0.045-0.015-0.068-0.019
c-0.053-0.015-0.113-0.027-0.172-0.038c-3.324-0.764-6.828-0.472-9.998,0.877c-0.39,0.165-0.781,0.344-1.162,0.539
c-0.027,0.015-0.038,0.023-0.06,0.034c-0.061,0.041-0.12,0.075-0.187,0.108c-0.158,0.083-0.323,0.169-0.48,0.262
c0,0,0,0.004-0.008,0.008c-1.147,0.682-2.233,1.514-3.216,2.503l-6.937,6.926c-6.322,6.326-6.322,16.591,0,22.921
C32.426,76.026,42.69,76.026,49.024,69.692z"
            />
          </g>
        </g>
      </svg>
      <a className="font-semibold mr-2 text-left truncate" href={shareLink}>
        {subject}
      </a>
      <div className="flex-1" />
      <button
        className="rounded-full bg-purple-500 hover:bg-purple-700 uppercase px-2 py-1 text-xs font-bold mr-3 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={copyText}
      >
        Copy
      </button>
      <a
        href={shareLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-purple-500 hover:bg-purple-700 uppercase px-2 py-1 text-xs font-bold mr-3 focus:outline-none focus:shadow-outline"
      >
        Test
      </a>
    </div>
  );

  return (
    <div className="min-h-screen min-w-screen p-8 md:p-24 bg-purple-600">
      <div className="max-w-lg mx-auto px-4 pb-8">
        <img src={logo} />
        {/* <p className="font-mono text-4xl text-purple-200">amplifii.us</p> */}
        <p className="text-sm text-justify text-purple-200">
          Boost the signal of your political message by sharing direct links
          that prefill emails with the provided addressees, subject, and body
          text.
        </p>
      </div>
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
              className={`shadow appearance-none border ${
                !email.length && !initialized ? "border-red-600" : ""
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="representative@organization.gov"
              value={email}
              onChange={handleEmailChanged}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cc"
            >
              Cc
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cc"
              type="email"
              placeholder=""
              value={cc}
              onChange={handleCcChanged}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bcc"
            >
              Bcc
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="bcc"
              type="email"
              placeholder=""
              value={bcc}
              onChange={handleBccChanged}
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
              className={`shadow appearance-none border ${
                !subject && !initialized ? "border-red-600" : ""
              } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="subject"
              type="text"
              placeholder="Call for Immediate Action"
              value={subject}
              onChange={handleSubjectChanged}
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
              className={`shadow appearance-none border ${
                !body && !initialized ? "border-red-600" : ""
              } rounded resize-y h-64 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="body"
              type="text"
              placeholder={`Hello,

My name is [YOUR_NAME]. I am a resident of [STATE_OR_CITY] and I am emailing today to demand accountability and immediate action on the issue of [ISSUE].

I demand that [MEASURES_TO_BE_TAKEN].

In addition, I demand that we provide more support for community efforts and organizations that work to bolster this effort.

Sincerely,
[YOUR_NAME]`}
              value={body}
              onChange={handleBodyChanged}
            />
          </div>

          {!!shareLink.length ? renderLink() : renderButton()}
        </form>
      </div>
    </div>
  );
};

export default App;
