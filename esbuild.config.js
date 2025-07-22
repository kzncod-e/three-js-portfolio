require("esbuild")
  .build({
    // ...existing code...
    external: ["prop-types"],
    // ...existing code...
  })
  .catch(() => process.exit(1));
