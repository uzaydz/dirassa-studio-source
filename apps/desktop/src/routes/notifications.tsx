import toast, { Toaster } from "solid-toast";
import { createTauriEventListener } from "~/utils/createEventListener";
import { events } from "~/utils/tauri";

export default function Page() {
	let _unlisten: (() => void) | undefined;

	const SuccessIcon = () => (
		<svg
			class="w-6 h-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 142 142"
		>
			<defs>
				<linearGradient
					id="ds-toast-mark"
					gradientUnits="userSpaceOnUse"
					x1="60"
					y1="0"
					x2="300"
					y2="657"
				>
					<stop stop-color="#FFA51C" />
					<stop offset="0.55" stop-color="#FC8213" />
					<stop offset="1" stop-color="#F45E07" />
				</linearGradient>
				<mask
					id="ds-toast-notch"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="588"
					height="657"
				>
					<rect width="588" height="657" fill="#fff" />
					<rect x="325" y="226" width="106" height="342" rx="53" fill="#000" />
					<rect x="413" y="305" width="106" height="197" rx="53" fill="#000" />
				</mask>
			</defs>
			<path
				fill="#fff"
				d="M113.6.888H28.4C13.205.888.887 13.205.887 28.4v85.2c0 15.195 12.318 27.513 27.513 27.513h85.2c15.195 0 27.512-12.318 27.512-27.513V28.4c0-15.195-12.317-27.512-27.512-27.512"
			></path>
			<g transform="translate(24.4 19) scale(0.15829)">
				<path
					mask="url(#ds-toast-notch)"
					fill="url(#ds-toast-mark)"
					d="M30 0H330A258 328.5 0 0 1 330 657H30A30 30 0 0 1 0 627V517H330A118 188.5 0 0 0 330 140H0V30A30 30 0 0 1 30 0Z"
				></path>
				<path
					fill="url(#ds-toast-mark)"
					d="M41.3 178.1L201.3 294.5Q248 328.5 201.3 362.5L41.3 478.9Q0 509 0 457.9L0 199.1Q0 148 41.3 178.1Z"
				></path>
				<rect
					x="264"
					y="331"
					width="54"
					height="144"
					rx="27"
					fill="url(#ds-toast-mark)"
				/>
				<rect
					x="350"
					y="251"
					width="56"
					height="292"
					rx="28"
					fill="url(#ds-toast-mark)"
				/>
				<rect
					x="438"
					y="330"
					width="56"
					height="147"
					rx="28"
					fill="url(#ds-toast-mark)"
				/>
			</g>
		</svg>
	);

	createTauriEventListener(events.newNotification, (payload) => {
		if (payload.is_error) {
			toast.error(payload.body, {
				style: {
					background: "#FEE2E2",
					color: "#991B1B",
					border: "1px solid #F87171",
				},
				iconTheme: {
					primary: "#991B1B",
					secondary: "#FEE2E2",
				},
			});
		} else {
			toast.success(payload.body, {
				icon: <SuccessIcon />,
				style: {
					background: "#FFFFFF",
					color: "#000000",
					border: "1px solid #FFFFFF",
				},
			});
		}
	});

	return (
		<>
			<style>
				{`
          body {
            background: transparent !important;
          }
        `}
			</style>
			<Toaster
				position="top-right"
				toastOptions={{
					duration: 3500,
					style: {
						padding: "8px 16px",
						"border-radius": "15px",
						"font-size": "1rem",
					},
				}}
			/>
		</>
	);
}
