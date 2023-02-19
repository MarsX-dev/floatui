export type Component = {
  title: string;
  ltr: {
    preview: string;
    react: {
      jsxTail: {
        code: string;
      }[];
    };
  }
  rtl: {
    preview: string;
    react: {
      jsxTail: {
        code: string;
      }[];
    };
  }
};