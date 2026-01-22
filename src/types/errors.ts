/**
 * Terminal error types enumeration
 */
export enum TerminalErrorType {
	PTY_CREATION_FAILED = "PTY_CREATION_FAILED",
	SHELL_NOT_FOUND = "SHELL_NOT_FOUND",
	ELECTRON_NOT_AVAILABLE = "ELECTRON_NOT_AVAILABLE",
	NODE_PTY_NOT_AVAILABLE = "NODE_PTY_NOT_AVAILABLE",
	PROCESS_TERMINATED = "PROCESS_TERMINATED",
	VIEW_CREATION_FAILED = "VIEW_CREATION_FAILED",
}

/**
 * Terminal error interface
 */
export interface TerminalError {
	type: TerminalErrorType;
	message: string;
	originalError?: Error;
	context?: Record<string, any>;
}

/**
 * Error recovery interface
 */
export interface IErrorRecovery {
	handlePTYError(error: TerminalError): Promise<boolean>;
	handleShellTermination(terminalId: string): Promise<void>;
	handleModuleLoadError(moduleName: string): Promise<void>;
	showErrorNotification(error: TerminalError): void;
}

/**
 * Custom terminal error class
 */
export class TerminalPluginError extends Error {
	public readonly type: TerminalErrorType;
	public readonly context?: Record<string, any>;
	public readonly originalError?: Error;

	constructor(
		type: TerminalErrorType,
		message: string,
		originalError?: Error,
		context?: Record<string, any>
	) {
		super(message);
		this.name = "TerminalPluginError";
		this.type = type;
		this.originalError = originalError;
		this.context = context;
	}

	/**
	 * Create a formatted error message for user display
	 */
	public getUserMessage(): string {
		switch (this.type) {
			case TerminalErrorType.PTY_CREATION_FAILED:
				return "Failed to create terminal process. Please check system permissions and dependencies.";
			case TerminalErrorType.SHELL_NOT_FOUND:
				return "Shell program not found. Please check your system configuration.";
			case TerminalErrorType.ELECTRON_NOT_AVAILABLE:
				return "Electron environment not available. This plugin requires Obsidian desktop.";
			case TerminalErrorType.NODE_PTY_NOT_AVAILABLE:
				return "node-pty module not available. Please reinstall the plugin or contact the developer.";
			case TerminalErrorType.PROCESS_TERMINATED:
				return "Terminal process terminated unexpectedly. You can try restarting the terminal.";
			case TerminalErrorType.VIEW_CREATION_FAILED:
				return "Failed to create terminal view. Please try again or restart Obsidian.";
			default:
				return this.message;
		}
	}
}

/**
 * Abstract error recovery class
 */
export abstract class ErrorRecovery implements IErrorRecovery {
	abstract handlePTYError(error: TerminalError): Promise<boolean>;
	abstract handleShellTermination(terminalId: string): Promise<void>;
	abstract handleModuleLoadError(moduleName: string): Promise<void>;
	abstract showErrorNotification(error: TerminalError): void;
}
