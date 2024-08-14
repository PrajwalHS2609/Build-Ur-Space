import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={400}
      viewBox="0 0 1000 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Example of a single card */}
      <rect x="20" y="20" rx="10" ry="10" width="240" height="240" />
      <rect x="280" y="20" rx="10" ry="10" width="240" height="240" />
      <rect x="540" y="20" rx="10" ry="10" width="240" height="240" />
      <rect x="800" y="20" rx="10" ry="10" width="240" height="240" />

      <rect x="20" y="280" rx="5" ry="5" width="200" height="20" />
      <rect x="280" y="280" rx="5" ry="5" width="200" height="20" />
      <rect x="540" y="280" rx="5" ry="5" width="200" height="20" />
      <rect x="800" y="280" rx="5" ry="5" width="200" height="20" />
    </ContentLoader>
  );
};

export default ContentLoader;
