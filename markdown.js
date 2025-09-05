import { Webview } from "@webview/webview";
import { marked } from 'marked';
import prompt from './prompt.md' with { type: 'text' };

const rendered = marked.parse(prompt);

const webview = new Webview();
const endcoded = encodeURIComponent(rendered);
const webviewUrl = `data:text/html,${endcoded}`;

webview.navigate(webviewUrl);
webview.run();
