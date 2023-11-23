"use client";

import { CodeBracketIcon, TvIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

type Props = {
  preview: boolean;
  setPreview: (type: boolean) => void;
};

const SwitchBtn = ({ preview, setPreview }: Props) => (
  <Button
    onClick={() => setPreview(!preview)}
    className="flex gap-x-3 text-sm text-zinc-50 bg-zinc-800 hover:bg-zinc-700 rounded-lg w-50 py-2 shadow-sm"
  >
    Code
    {preview ? (
      <CodeBracketIcon className="w-5 h-5" />
    ) : (
      <TvIcon className="w-5 h-5" />
    )}
  </Button>
);

export default ({ preview, setPreview }: Props) => {
  return (
    <div className="text-sm">
      <SwitchBtn preview={preview} setPreview={setPreview} />
    </div>
  );
};
