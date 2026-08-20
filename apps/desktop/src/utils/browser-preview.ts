type PreviewTauriInternals = {
	metadata: {
		currentWindow: { label: string };
		currentWebview: { label: string };
	};
	invoke: (command: string, args?: Record<string, unknown>) => Promise<unknown>;
	transformCallback: (callback: unknown, once?: boolean) => number;
	convertFileSrc: (path: string) => string;
};

const previewStore = new Map<string, unknown>();

export const isBrowserPreview = () => !window.isTauri;

function previewResult(command: string, args: Record<string, unknown>) {
	if (command === "plugin:store|load") return 1;
	if (command === "plugin:store|get") {
		const key = args.key;
		if (typeof key !== "string") return [null, false];
		return [previewStore.get(key) ?? null, previewStore.has(key)];
	}
	if (command === "plugin:store|set") {
		const key = args.key;
		if (typeof key === "string") previewStore.set(key, args.value);
		return null;
	}
	if (command === "plugin:store|delete") {
		const key = args.key;
		if (typeof key === "string") previewStore.delete(key);
		return null;
	}
	if (command === "plugin:store|has") return false;
	if (command === "plugin:store|keys") return [];
	if (command === "plugin:store|values") return [];
	if (command === "plugin:store|entries") return [];
	if (command === "plugin:store|length") return 0;
	if (command === "plugin:event|listen") return 1;
	if (command === "plugin:window|is_resizable") return true;
	if (command === "plugin:window|is_maximized") return false;
	if (command === "plugin:window|is_maximizable") return true;
	if (command === "plugin:window|is_visible") return true;
	if (
		command === "plugin:window|inner_size" ||
		command === "plugin:window|outer_size"
	) {
		return { width: 900, height: 650 };
	}
	if (
		command === "plugin:window|inner_position" ||
		command === "plugin:window|outer_position"
	) {
		return { x: 0, y: 0 };
	}
	if (command === "plugin:window|scale_factor") return 1;
	if (command === "plugin:window|theme") return "dark";
	if (command === "plugin:window|get_all_windows") return ["main"];
	if (command === "plugin:webview|get_all_webviews") {
		return [{ label: "main", windowLabel: "main" }];
	}
	if (
		command === "get_devices_snapshot" ||
		command === "do_permissions_check"
	) {
		return {
			cameras: [],
			microphones: [],
			permissions: {
				accessibility: "notNeeded",
				camera: "notNeeded",
				microphone: "notNeeded",
				screenRecording: "notNeeded",
			},
		};
	}
	if (command.startsWith("list_")) return [];
	if (command.startsWith("get_")) return [];
	if (command.startsWith("is_")) return false;
	return null;
}

export function initializeBrowserPreview() {
	if (!isBrowserPreview()) return;

	const previewWindow = window as Window &
		typeof globalThis & {
			__TAURI_INTERNALS__?: PreviewTauriInternals;
			__TAURI_OS_PLUGIN_INTERNALS__?: Record<string, string>;
			__TAURI_EVENT_PLUGIN_INTERNALS__?: {
				unregisterListener: (event: string, id: number) => void;
			};
		};

	previewWindow.__TAURI_INTERNALS__ = {
		metadata: {
			currentWindow: { label: "main" },
			currentWebview: { label: "main" },
		},
		invoke: async (command, args = {}) => previewResult(command, args),
		transformCallback: () => 1,
		convertFileSrc: (path) => path,
	};
	previewWindow.__TAURI_OS_PLUGIN_INTERNALS__ = {
		arch: "aarch64",
		eol: "\n",
		exe_extension: "",
		family: "unix",
		os_type: "macos",
		platform: "macos",
		version: "preview",
	};
	previewWindow.__TAURI_EVENT_PLUGIN_INTERNALS__ = {
		unregisterListener: () => {},
	};
}
