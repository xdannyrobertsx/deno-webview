export const helpCommand = () => {
  console.log("File Watcher - Monitor git changes in real-time");
  console.log("Usage: deno run --allow-read --allow-run main.ts [directory]");
  console.log("  directory: Directory to watch (default: current directory)");
  Deno.exit(0);
};
