/**
 * Native Module Configuration
 *
 * This module provides configuration for native PTY binaries.
 * Binaries are downloaded from GitHub Release at runtime, not embedded in the plugin.
 *
 * @module embedded-modules
 */

/**
 * Supported ABI configurations for different Obsidian versions
 */
export const SUPPORTED_ABIS = {
	140: { electronVersion: "39.2.6", obsidianVersion: "1.11.x" },
	136: { electronVersion: "37.10.2", obsidianVersion: "1.10.x" },
} as const;

export type SupportedABI = keyof typeof SUPPORTED_ABIS;

/**
 * Module metadata and configuration
 * Note: nodeABI is now dynamically determined at runtime
 */
export const MODULE_INFO = {
	supportedPlatforms: [
		"win32_x64",
		"darwin_x64",
		"darwin_arm64",
		"linux_x64",
	],
	supportedABIs: [140, 136] as const,
} as const;

/**
 * Get the current Node ABI version from the runtime
 */
export function getCurrentNodeABI(): number {
	return parseInt(process.versions.modules, 10);
}

/**
 * Check if the current ABI is supported
 */
export function isABISupported(abi: number = getCurrentNodeABI()): boolean {
	return abi in SUPPORTED_ABIS;
}

/**
 * Get the closest supported ABI for the current environment
 * Returns the exact match if available, otherwise undefined
 */
export function getSupportedABI(
	abi: number = getCurrentNodeABI(),
): SupportedABI | undefined {
	if (abi in SUPPORTED_ABIS) {
		return abi as SupportedABI;
	}
	return undefined;
}

/**
 * Get the native module zip filename suffix for the current ABI
 * e.g., "win32_x64-abi140" or "darwin_arm64-abi136"
 */
export function getNativeModulesSuffix(
	platform: string = process.platform,
	arch: string = process.arch,
	abi: number = getCurrentNodeABI(),
): string {
	return `${platform}_${arch}-abi${abi}`;
}

/**
 * Required binary files per platform
 * Note: conpty_console_list.node is optional on Windows (only needed for specific ConPTY features)
 * Note: spawn-helper is required on macOS for node-pty@1.0.0+ to create PTY processes
 */
export const PLATFORM_BINARIES: Record<string, string[]> = {
	win32_x64: ["pty.node", "conpty.node"],
	darwin_x64: ["pty.node", "spawn-helper"],
	darwin_arm64: ["pty.node", "spawn-helper"],
	linux_x64: ["pty.node"],
};

/**
 * Get required files for a platform
 */
export function getRequiredFilesForPlatform(
	platform: string = process.platform,
	arch: string = process.arch,
): string[] {
	const key = `${platform}_${arch}`;
	return PLATFORM_BINARIES[key] || [];
}

/**
 * Check if a platform is supported
 */
export function isPlatformSupported(
	platform: string = process.platform,
	arch: string = process.arch,
): boolean {
	const key = `${platform}_${arch}`;
	return (MODULE_INFO.supportedPlatforms as readonly string[]).includes(key);
}
