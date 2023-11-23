import { ChangeEventHandler } from "react";

export default ({
  setTechStack,
  framework,
}: {
  setTechStack: (type: any) => void;
  framework: string;
}) => {
  // Select menu items
  const techStack =
    framework == "react"
      ? [
          {
            label: "React and Tailwind",
            key: "jsxTail",
          },
          {
            label: "React and CSS",
            key: "jsxCss",
          },
        ]
      : [
          {
            label: "Vue and Tailwind",
            key: "vueTail",
          },
          {
            label: "Vue and CSS",
            key: "vueCss",
          },
        ];

  return (
    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-300 border dark:border-gray-700 p-2 rounded-md">
      <select
        className="outline-none bg-transparent appearance-none text-sm"
        onChange={(e) => setTechStack(e.target.value)}
      >
        {techStack.map((item, idx) => (
          <option key={idx} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
