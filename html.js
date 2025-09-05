import { Webview } from "@webview/webview";
import { helpCommand } from "./utils.ts";

if (Deno.args.includes("--help") || Deno.args.includes("-h")) {
  helpCommand();
}

const command = new Deno.Command("curl", {
  args: ["-L", "https://www.ilyameerovich.com/closed-systems-of-thinking/"],
});
const { success, stdout } = await command.output();

if (!success) {
  console.error("Failed to run command");
  Deno.exit(1);
}

const rendered = new TextDecoder().decode(stdout);
const webview = new Webview();
const endcoded = encodeURIComponent(rendered);
const webviewUrl = `data:text/html,${endcoded}`;

webview.navigate(webviewUrl);
webview.run();
