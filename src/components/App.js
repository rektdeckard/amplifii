import React, { useState } from "react";
import TinyURL from "tinyurl";
import logo from "../assets/logo.png";
import ShareWidget from "./ShareWidget";

const PLACEHOLDER_EMAIL = "representative@organization.gov";
const PLACEHOLDER_SUBJECT = "Call for Immediate Action";
const PLACEHOLDER_BODY = `Hello,

My name is [YOUR_NAME]. I am a resident of [STATE_OR_CITY] and I am emailing today to demand accountability and immediate action on the issue of [ISSUE].

I demand that [MEASURES_TO_BE_TAKEN].

In addition, I demand that we provide more support for community efforts and organizations that work to bolster this effort.

Sincerely,
[YOUR_NAME]`;

const App = () => {
  const [initialized, setInitialized] = useState(true);
  const [email, setEmail] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [shareLink, setShareLink] = useState("");

  const handleEmailChanged = ({ target: { value } }) => {
    // TODO: add email validation
    setEmail(value);
    setShareLink("");
  };

  const handleCcChanged = ({ target: { value } }) => {
    // TODO: add email validation
    setCc(value);
    setShareLink("");
  };

  const handleBccChanged = ({ target: { value } }) => {
    // TODO: add email validation
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

  const generateURI = async () => {
    if (email.length && subject.length && body.length) {
      const url = encodeURI(
        `mailto:${email}?subject=${subject}&body=${body}${
          cc.length ? `&cc=${cc}` : ""
        }${bcc.length ? `&bcc=${bcc}` : ""}`
      );
      try {
        const response = await TinyURL.shorten(url);
        setShareLink(response);
        setInitialized(true);
      } catch (e) {
        // If URL minification fails, fallback to full encoded URL
        console.error(e);
        setShareLink(url);
      }

      return;
    }

    setInitialized(false);
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

  return (
    <div className="min-h-screen min-w-screen p-8 md:p-24 bg-purple-600">
      <div className="max-w-lg mx-auto px-4 pb-8">
        <img src={logo} alt="amplifii.us logo" />
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
              placeholder={PLACEHOLDER_EMAIL}
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
              placeholder={PLACEHOLDER_SUBJECT}
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
              placeholder={PLACEHOLDER_BODY}
              value={body}
              onChange={handleBodyChanged}
            />
          </div>

          {shareLink.length ? (
            <ShareWidget link={shareLink} />
          ) : (
            renderButton()
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
