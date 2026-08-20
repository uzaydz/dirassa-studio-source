import { For } from "solid-js";

const timelineMarks = Array.from({ length: 11 }, (_, index) => index);

export default function BrowserPreview() {
	return (
		<div class="flex flex-col h-screen overflow-hidden bg-[#121316] text-white">
			<header class="flex items-center justify-between h-12 px-4 border-b border-white/10 bg-[#191a1e]">
				<div class="flex items-center gap-3 min-w-0">
					<button type="button" class="text-sm text-white/60 hover:text-white">
						← Back
					</button>
					<div class="h-5 w-px bg-white/10" />
					<p class="truncate text-sm font-medium">Sample recording</p>
				</div>
				<div class="flex items-center gap-2">
					<button
						type="button"
						class="rounded-md px-3 py-1.5 text-sm bg-white/8 text-white/80"
					>
						Share
					</button>
					<button
						type="button"
						class="rounded-md px-3 py-1.5 text-sm font-medium bg-blue-500"
					>
						Export
					</button>
				</div>
			</header>

			<main class="flex flex-1 min-h-0">
				<section class="flex flex-1 items-center justify-center min-w-0 p-8 bg-[#0b0c0e]">
					<div class="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-[#2c3e62] via-[#171d32] to-[#0c0f18] shadow-2xl">
						<div class="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_25%,#60a5fa,transparent_36%),radial-gradient(circle_at_72%_68%,#a855f7,transparent_30%)]" />
						<div class="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/65 to-transparent" />
						<button
							type="button"
							class="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black text-lg"
						>
							▶
						</button>
						<div class="absolute inset-x-5 bottom-4 flex items-center justify-between text-xs text-white/80">
							<span>00:00</span>
							<span>00:42</span>
						</div>
					</div>
				</section>

				<aside class="w-72 shrink-0 border-l border-white/10 bg-[#191a1e] p-4 overflow-y-auto">
					<h2 class="text-sm font-semibold">Properties</h2>
					<div class="mt-5 space-y-5 text-sm">
						<section>
							<p class="mb-2 text-white/50">Layout</p>
							<div class="grid grid-cols-3 gap-2">
								<For each={["Fit", "Fill", "Split"]}>
									{(label) => (
										<button
											type="button"
											class="rounded-md border border-white/10 bg-white/5 py-2 text-xs text-white/75"
										>
											{label}
										</button>
									)}
								</For>
							</div>
						</section>
						<section>
							<p class="mb-2 text-white/50">Background</p>
							<div class="flex gap-2">
								<div class="size-8 rounded-md border-2 border-blue-400 bg-[#21345d]" />
								<div class="size-8 rounded-md bg-[#121316]" />
								<div class="size-8 rounded-md bg-[#f3f4f6]" />
							</div>
						</section>
						<section>
							<p class="mb-2 text-white/50">Effects</p>
							<div class="space-y-2">
								<For
									each={["Rounded corners", "Drop shadow", "Cursor smoothing"]}
								>
									{(label, index) => (
										<label class="flex items-center justify-between text-white/75">
											{label}
											<input type="checkbox" checked={index() < 2} />
										</label>
									)}
								</For>
							</div>
						</section>
					</div>
				</aside>
			</main>

			<footer class="h-60 shrink-0 border-t border-white/10 bg-[#15161a] px-5 pt-4">
				<div class="flex items-center gap-4 text-sm text-white/70">
					<button type="button">▶</button>
					<button type="button">↶</button>
					<button type="button">↷</button>
					<span class="text-xs">00:00.00 / 00:42.00</span>
				</div>
				<div class="relative mt-6 h-32 overflow-hidden rounded-lg bg-[#0d0e11] px-4 pt-7">
					<div class="absolute inset-x-4 top-2 flex justify-between text-[10px] text-white/35">
						<For each={timelineMarks}>{(mark) => <span>{mark * 4}s</span>}</For>
					</div>
					<div class="h-12 rounded-md bg-linear-to-r from-blue-500/80 via-violet-500/70 to-blue-400/80" />
					<div class="mt-3 h-5 rounded bg-emerald-400/45 w-[68%]" />
					<div class="absolute bottom-0 top-0 left-[28%] w-px bg-white">
						<div class="-ml-1 size-2 rounded-full bg-white" />
					</div>
				</div>
			</footer>
		</div>
	);
}
