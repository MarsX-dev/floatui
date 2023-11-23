import Button from "components/ui/Button";
import { TechStack, Component, Dir, CodeBlock } from "types/types";

type Props = {
  labels: CodeBlock[];
  setActivateBlock: (idx: number) => void;
  activatedBlock: number;
};

export default ({ labels, setActivateBlock, activatedBlock }: Props) => (
  <div className="bg-gray-700 rounded-t-lg border-b border-gray-600 text-gray-200 text-sm">
    <ul className="flex items-center overflow-x-auto">
      {labels?.map(
        (
          item: {
            label?: string;
          },
          idx
        ) => (
          <li
            key={idx}
            className={`flex items-center p-1 rounded-tl-lg ${
              idx == activatedBlock ? "bg-gray-800 text-teal-400" : ""
            }`}
          >
            <Button
              onClick={() => setActivateBlock(idx)}
              className="border-none focus:text-teal-400"
            >
              {item.label}
            </Button>
          </li>
        )
      )}
    </ul>
  </div>
);
