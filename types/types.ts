export type ComponentCards = {
  id: string;
  cover_url: string;
  section_name: string;
  slug: string;
  description: string;
  count: number;
  isNew: boolean;
};

export type ComponentDetails = {
  id?: string;
  title?: string;
  slug?: string;
  category?: string;
  paid?: boolean | null;
  isActive?: boolean;
};

export type CodeBlock = {
  label?: string;
  code?: string;
};

export type Component = {
  ltr: {
    preview: string;
    react: {
      jsxTail: CodeBlock[];
      jsxCss: CodeBlock[];
    };
  };
  rtl: {
    preview: string;
    react: {
      jsxTail: CodeBlock[];
      jsxCss: CodeBlock[];
    };
  };
};

export type Templates = {
  id: string;
  banner_url: string;
  product_id: number;
  template_name: string;
  price: number;
  slug: string;
  templateFile: string;
  details: string;
  preview_url: string;
  description: string;
  created_at: string;
};

export type BlogPost = {
  slug: string;
  createdAt: string;
  headline: string;
  metaDescription: string;
};

export type Dir = "ltr" | "rtl";
export type TechStack = "jsxTail" | "jsxCss";
