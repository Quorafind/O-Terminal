/**
 * Terminal Theme Definitions
 *
 * Preset themes for xterm.js and ghostty-web terminal renderers.
 * Themes are categorized by dark/light mode for automatic switching.
 *
 * @module core/themes
 */

/**
 * Terminal theme interface compatible with xterm.js ITheme
 */
export interface TerminalTheme {
	/** Display name for the theme */
	name: string;
	/** Theme type for dark/light mode matching */
	type: "dark" | "light";

	// Core colors
	background: string;
	foreground: string;
	cursor: string;
	cursorAccent?: string;
	selectionBackground: string;

	// Standard ANSI colors (0-7)
	black: string;
	red: string;
	green: string;
	yellow: string;
	blue: string;
	magenta: string;
	cyan: string;
	white: string;

	// Bright ANSI colors (8-15)
	brightBlack: string;
	brightRed: string;
	brightGreen: string;
	brightYellow: string;
	brightBlue: string;
	brightMagenta: string;
	brightCyan: string;
	brightWhite: string;
}

/**
 * Preset terminal themes
 *
 * Each theme includes all colors required by xterm.js theme interface.
 * Themes are organized by popularity and categorized as dark or light.
 */
export const PRESET_THEMES: Record<string, TerminalTheme> = {
	// ============ Dark Themes ============

	dracula: {
		name: "Dracula",
		type: "dark",
		background: "#282a36",
		foreground: "#f8f8f2",
		cursor: "#f8f8f2",
		cursorAccent: "#282a36",
		selectionBackground: "rgba(68, 71, 90, 0.5)",
		black: "#21222c",
		red: "#ff5555",
		green: "#50fa7b",
		yellow: "#f1fa8c",
		blue: "#bd93f9",
		magenta: "#ff79c6",
		cyan: "#8be9fd",
		white: "#f8f8f2",
		brightBlack: "#6272a4",
		brightRed: "#ff6e6e",
		brightGreen: "#69ff94",
		brightYellow: "#ffffa5",
		brightBlue: "#d6acff",
		brightMagenta: "#ff92df",
		brightCyan: "#a4ffff",
		brightWhite: "#ffffff",
	},

	"one-dark": {
		name: "One Dark",
		type: "dark",
		background: "#282c34",
		foreground: "#abb2bf",
		cursor: "#528bff",
		cursorAccent: "#282c34",
		selectionBackground: "rgba(62, 68, 81, 0.5)",
		black: "#282c34",
		red: "#e06c75",
		green: "#98c379",
		yellow: "#e5c07b",
		blue: "#61afef",
		magenta: "#c678dd",
		cyan: "#56b6c2",
		white: "#dcdfe4",
		brightBlack: "#5c6370",
		brightRed: "#e06c75",
		brightGreen: "#98c379",
		brightYellow: "#e5c07b",
		brightBlue: "#61afef",
		brightMagenta: "#c678dd",
		brightCyan: "#56b6c2",
		brightWhite: "#ffffff",
	},

	"solarized-dark": {
		name: "Solarized Dark",
		type: "dark",
		background: "#002b36",
		foreground: "#839496",
		cursor: "#93a1a1",
		cursorAccent: "#002b36",
		selectionBackground: "rgba(7, 54, 66, 0.5)",
		black: "#073642",
		red: "#dc322f",
		green: "#859900",
		yellow: "#b58900",
		blue: "#268bd2",
		magenta: "#d33682",
		cyan: "#2aa198",
		white: "#eee8d5",
		brightBlack: "#002b36",
		brightRed: "#cb4b16",
		brightGreen: "#586e75",
		brightYellow: "#657b83",
		brightBlue: "#839496",
		brightMagenta: "#6c71c4",
		brightCyan: "#93a1a1",
		brightWhite: "#fdf6e3",
	},

	"github-dark": {
		name: "GitHub Dark",
		type: "dark",
		background: "#0d1117",
		foreground: "#c9d1d9",
		cursor: "#58a6ff",
		cursorAccent: "#0d1117",
		selectionBackground: "rgba(63, 185, 80, 0.2)",
		black: "#484f58",
		red: "#ff7b72",
		green: "#3fb950",
		yellow: "#d29922",
		blue: "#58a6ff",
		magenta: "#bc8cff",
		cyan: "#39c5cf",
		white: "#b1bac4",
		brightBlack: "#6e7681",
		brightRed: "#ffa198",
		brightGreen: "#56d364",
		brightYellow: "#e3b341",
		brightBlue: "#79c0ff",
		brightMagenta: "#d2a8ff",
		brightCyan: "#56d4dd",
		brightWhite: "#f0f6fc",
	},

	nord: {
		name: "Nord",
		type: "dark",
		background: "#2e3440",
		foreground: "#d8dee9",
		cursor: "#d8dee9",
		cursorAccent: "#2e3440",
		selectionBackground: "rgba(67, 76, 94, 0.5)",
		black: "#3b4252",
		red: "#bf616a",
		green: "#a3be8c",
		yellow: "#ebcb8b",
		blue: "#81a1c1",
		magenta: "#b48ead",
		cyan: "#88c0d0",
		white: "#e5e9f0",
		brightBlack: "#4c566a",
		brightRed: "#bf616a",
		brightGreen: "#a3be8c",
		brightYellow: "#ebcb8b",
		brightBlue: "#81a1c1",
		brightMagenta: "#b48ead",
		brightCyan: "#8fbcbb",
		brightWhite: "#eceff4",
	},

	monokai: {
		name: "Monokai",
		type: "dark",
		background: "#272822",
		foreground: "#f8f8f2",
		cursor: "#f8f8f2",
		cursorAccent: "#272822",
		selectionBackground: "rgba(73, 72, 62, 0.5)",
		black: "#272822",
		red: "#f92672",
		green: "#a6e22e",
		yellow: "#f4bf75",
		blue: "#66d9ef",
		magenta: "#ae81ff",
		cyan: "#a1efe4",
		white: "#f8f8f2",
		brightBlack: "#75715e",
		brightRed: "#f92672",
		brightGreen: "#a6e22e",
		brightYellow: "#f4bf75",
		brightBlue: "#66d9ef",
		brightMagenta: "#ae81ff",
		brightCyan: "#a1efe4",
		brightWhite: "#f9f8f5",
	},

	"tokyo-night": {
		name: "Tokyo Night",
		type: "dark",
		background: "#1a1b26",
		foreground: "#a9b1d6",
		cursor: "#c0caf5",
		cursorAccent: "#1a1b26",
		selectionBackground: "rgba(40, 52, 100, 0.5)",
		black: "#15161e",
		red: "#f7768e",
		green: "#9ece6a",
		yellow: "#e0af68",
		blue: "#7aa2f7",
		magenta: "#bb9af7",
		cyan: "#7dcfff",
		white: "#a9b1d6",
		brightBlack: "#414868",
		brightRed: "#f7768e",
		brightGreen: "#9ece6a",
		brightYellow: "#e0af68",
		brightBlue: "#7aa2f7",
		brightMagenta: "#bb9af7",
		brightCyan: "#7dcfff",
		brightWhite: "#c0caf5",
	},

	"catppuccin-mocha": {
		name: "Catppuccin Mocha",
		type: "dark",
		background: "#1e1e2e",
		foreground: "#cdd6f4",
		cursor: "#f5e0dc",
		cursorAccent: "#1e1e2e",
		selectionBackground: "rgba(88, 91, 112, 0.5)",
		black: "#45475a",
		red: "#f38ba8",
		green: "#a6e3a1",
		yellow: "#f9e2af",
		blue: "#89b4fa",
		magenta: "#f5c2e7",
		cyan: "#94e2d5",
		white: "#bac2de",
		brightBlack: "#585b70",
		brightRed: "#f38ba8",
		brightGreen: "#a6e3a1",
		brightYellow: "#f9e2af",
		brightBlue: "#89b4fa",
		brightMagenta: "#f5c2e7",
		brightCyan: "#94e2d5",
		brightWhite: "#a6adc8",
	},

	// ============ Light Themes ============

	"solarized-light": {
		name: "Solarized Light",
		type: "light",
		background: "#fdf6e3",
		foreground: "#657b83",
		cursor: "#586e75",
		cursorAccent: "#fdf6e3",
		selectionBackground: "rgba(238, 232, 213, 0.5)",
		black: "#073642",
		red: "#dc322f",
		green: "#859900",
		yellow: "#b58900",
		blue: "#268bd2",
		magenta: "#d33682",
		cyan: "#2aa198",
		white: "#eee8d5",
		brightBlack: "#002b36",
		brightRed: "#cb4b16",
		brightGreen: "#586e75",
		brightYellow: "#657b83",
		brightBlue: "#839496",
		brightMagenta: "#6c71c4",
		brightCyan: "#93a1a1",
		brightWhite: "#fdf6e3",
	},

	"github-light": {
		name: "GitHub Light",
		type: "light",
		background: "#ffffff",
		foreground: "#24292f",
		cursor: "#0969da",
		cursorAccent: "#ffffff",
		selectionBackground: "rgba(173, 214, 255, 0.4)",
		black: "#24292f",
		red: "#cf222e",
		green: "#1a7f37",
		yellow: "#9a6700",
		blue: "#0969da",
		magenta: "#8250df",
		cyan: "#1b7c83",
		white: "#6e7781",
		brightBlack: "#57606a",
		brightRed: "#a40e26",
		brightGreen: "#116329",
		brightYellow: "#825301",
		brightBlue: "#218bff",
		brightMagenta: "#a475f9",
		brightCyan: "#3192aa",
		brightWhite: "#8c959f",
	},

	"one-light": {
		name: "One Light",
		type: "light",
		background: "#fafafa",
		foreground: "#383a42",
		cursor: "#526eff",
		cursorAccent: "#fafafa",
		selectionBackground: "rgba(56, 58, 66, 0.15)",
		black: "#383a42",
		red: "#e45649",
		green: "#50a14f",
		yellow: "#c18401",
		blue: "#4078f2",
		magenta: "#a626a4",
		cyan: "#0184bc",
		white: "#a0a1a7",
		brightBlack: "#4f525e",
		brightRed: "#e45649",
		brightGreen: "#50a14f",
		brightYellow: "#c18401",
		brightBlue: "#4078f2",
		brightMagenta: "#a626a4",
		brightCyan: "#0184bc",
		brightWhite: "#fafafa",
	},

	"catppuccin-latte": {
		name: "Catppuccin Latte",
		type: "light",
		background: "#eff1f5",
		foreground: "#4c4f69",
		cursor: "#dc8a78",
		cursorAccent: "#eff1f5",
		selectionBackground: "rgba(172, 176, 190, 0.4)",
		black: "#5c5f77",
		red: "#d20f39",
		green: "#40a02b",
		yellow: "#df8e1d",
		blue: "#1e66f5",
		magenta: "#ea76cb",
		cyan: "#179299",
		white: "#acb0be",
		brightBlack: "#6c6f85",
		brightRed: "#d20f39",
		brightGreen: "#40a02b",
		brightYellow: "#df8e1d",
		brightBlue: "#1e66f5",
		brightMagenta: "#ea76cb",
		brightCyan: "#179299",
		brightWhite: "#bcc0cc",
	},
};

/**
 * Get all dark themes
 */
export function getDarkThemes(): Array<{ id: string; theme: TerminalTheme }> {
	return Object.entries(PRESET_THEMES)
		.filter(([, theme]) => theme.type === "dark")
		.map(([id, theme]) => ({ id, theme }));
}

/**
 * Get all light themes
 */
export function getLightThemes(): Array<{ id: string; theme: TerminalTheme }> {
	return Object.entries(PRESET_THEMES)
		.filter(([, theme]) => theme.type === "light")
		.map(([id, theme]) => ({ id, theme }));
}

/**
 * Get theme by ID
 */
export function getThemeById(id: string): TerminalTheme | undefined {
	return PRESET_THEMES[id];
}
