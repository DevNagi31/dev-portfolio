export const registryConfig = {
  namespace: process.env.REGISTRY_NAMESPACE || "@devnagi",
  namespaceUrl:
    process.env.REGISTRY_NAMESPACE_URL || "https://devnagi.com/r/{name}.json",
}
