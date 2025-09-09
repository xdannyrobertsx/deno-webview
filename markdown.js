import { Webview } from "@webview/webview";
import { marked } from 'marked';
import { helpCommand } from "./utils.ts";
import markdown from './README.md' with { type: 'text' };

if (Deno.args.includes("--help") || Deno.args.includes("-h")) {
  helpCommand();
}

const rendered = marked.parse(markdown);

const webview = new Webview();
const endcoded = encodeURIComponent(rendered);
const webviewUrl = `data:text/html,${endcoded}`;

webview.navigate(webviewUrl);
webview.run();
