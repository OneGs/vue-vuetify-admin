const req = require.context("@/assets/svgs", false, /\.svg$/);

((requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext))(req);
