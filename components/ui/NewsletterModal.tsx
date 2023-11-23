import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FormEventHandler, useState } from "react";
import axios from "axios";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function isValidEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export default ({
  isActive,
  closeModal,
}: {
  isActive: boolean;
  closeModal: (val: boolean) => void;
}) => {
  const [personalEMail, setPersonalEMail] = useState("");
  const [personalEMailError, setPersonalEMailError] = useState("");
  const [isLoad, setLoad] = useState(false);
  const [isSubscribingDone, setSubscribingDone] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setPersonalEMailError("");
    if (!isSubscribingDone) {
      if (isValidEmail(personalEMail)) {
        setLoad(true);
        axios.post("api/subscribe", { email: personalEMail }).then((res) => {
          setLoad(false);
          setSubscribingDone(true);
        });
      } else setPersonalEMailError("Please enter valid email");
    } else {
      closeModal(false);
    }
  };

  return (
    <Modal
      variant="custom"
      className="p-6 overflow-hidden"
      isActive={isActive}
      onCancel={() => closeModal(false)}
    >
      <div className="flex justify-end">
        <button
          onClick={() => closeModal(false)}
          className="relative z-10 p-1 rounded-md text-gray-400 hover:bg-zinc-700 duration-150"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center">
        <div className="absolute w-full -top-16"></div>
        <form onSubmit={handleSubmit} className="relative">
          <div className="w-12 h-12 mx-auto flex items-center rounded-xl bg-[linear-gradient(180deg,_#38383D_0%,_rgba(101,_101,_114,_0.00)_225%)]">
            <EnvelopeIcon className="w-8 h-8 mx-auto text-zinc-500" />
          </div>
          <h3 className="text-zinc-50 font-semibold mt-6">
            Editor with AI access
          </h3>
          <p className="text-zinc-300 mt-2">
            Get notified to get access once we launch this feature.
          </p>
          {!isSubscribingDone ? (
            <Input
              required
              autoFocus
              placeholder="Enter your email"
              onChange={(e) =>
                setPersonalEMail((e.target as HTMLInputElement).value)
              }
              className="w-full mt-6 border-zinc-700"
            />
          ) : (
            ""
          )}
          <span className="block my-3 text-red-500 text-sm text-left">
            {personalEMailError}
          </span>
          <Button
            isLoad={isLoad}
            className="w-full active:scale-[0.99] rounded-lg"
          >
            {isSubscribingDone ? (
              <CheckIcon className="w-6 h-6 mx-auto" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      </div>
    </Modal>
  );
};
