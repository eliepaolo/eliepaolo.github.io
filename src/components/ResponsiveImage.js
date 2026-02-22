import React from "react";

export default function ResponsiveImage({
  name,
  folder = "content",
  alt = "",
  sizes,
  priority = false,
  className = "",
}) {
  const basePath = `/images/${folder}/${name}`;

  // Define size sets per folder
  const folderConfigs = {
    hero: {
      fallback: 1600,
      srcSet: [800, 1600, 2400],
      defaultSizes: "100vw",
    },
    content: {
      fallback: 1400,
      srcSet: [1400],
      defaultSizes: "(max-width: 768px) 90vw, 1200px",
    },
    gallery: {
      fallback: 1200,
      srcSet: [1200],
      defaultSizes: "(max-width: 768px) 90vw, 1000px",
    },
    graphics: {
      fallback: 1000,
      srcSet: [1000],
      defaultSizes: "(max-width: 768px) 90vw, 1000px",
    },
  };

  const config = folderConfigs[folder] || folderConfigs.content;

  const srcSetString = config.srcSet
    .map((size) => `${basePath}-${size}.webp ${size}w`)
    .join(",\n        ");

  return (
    <img
      className={className}
      src={`${basePath}-${config.fallback}.webp`}
      srcSet={srcSetString}
      sizes={sizes || config.defaultSizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}