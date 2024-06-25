import { useState } from "react";
import { copy, tick } from "../index";

const BrowseUrlHistory = ({ setArticle, allArticles }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      {allArticles.map((article, i) => (
        <div
          className="link_card"
          onClick={() => setArticle(article)}
          key={`link-${i}`}
        >
          <div className="copy_btn" onClick={() => handleCopy(article.url)}>
            <img
              src={copied === article.url ? tick : copy}
              alt={`${copied === article.url ? "tick" : "copy"} icon`}
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
          <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
            {article.url}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BrowseUrlHistory;
