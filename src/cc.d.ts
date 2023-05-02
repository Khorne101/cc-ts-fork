declare class Colors {
	public white: 0x1;
	public orange: 0x2;
	public magenta: 0x4;
	public lightBlue: 0x8;
	public yellow: 0x10;
	public lime: 0x20;
	public pink: 0x40;
	public gray: 0x80;
	public lightGray: 0x100;
	public cyan: 0x200;
	public purple: 0x400;
	public blue: 0x800;
	public brown: 0x1000;
	public green: 0x2000;
	public red: 0x4000;
	public black: 0x8000;
	public combine(...args: number[]): number;
	public subtract(colors: number, ...args: number[]): number;
	public test(colors: number, color: number): boolean;
	public packRGB(r: number, g: number, b: number): number;
	public unpackRGB(rgb: number): number;
	public toBlit(color: number): string;
}

export const colors: Colors;

declare class Colours {
	public white: 0x1;
	public orange: 0x2;
	public magenta: 0x4;
	public lightBlue: 0x8;
	public yellow: 0x10;
	public lime: 0x20;
	public pink: 0x40;
	public grey: 0x80;
	public lightGrey: 0x100;
	public cyan: 0x200;
	public purple: 0x400;
	public blue: 0x800;
	public brown: 0x1000;
	public green: 0x2000;
	public red: 0x4000;
	public black: 0x8000;
	public combine(...args: number[]): number;
	public subtract(colors: number, ...args: number[]): number;
	public test(colors: number, color: number): boolean;
	public packRGB(r: number, g: number, b: number): number;
	public unpackRGB(rgb: number): number;
	public toBlit(color: number): string;
}

export const colours: Colours;

declare class Commands {
	public exec(command: string): [boolean, string[], number | undefined];
	public execAsync(command: string): number;
	public list(...args: string[]): string[];
	public getBlockPosition(): [number, number, number];
	public getBlockInfos(
		minX: number,
		minY: number,
		minZ: number,
		maxX: number,
		maxY: number,
		maxZ: number,
		dimension?: string
	): object[];
	public getBlockInfo(x: number, y: number, z: number, dimension?: string): object;
	public native: Commands;
	public async: Commands;
}

export const commands: Commands;

declare class Disk {
	public isPresent(name: string): boolean;
	public getLabel(name: string): string | undefined;
	public setLabel(name: string, label: string): string | undefined;
	public hasData(name: string): boolean;
	public getMountPath(name: string): string | undefined;
	public hasAudio(name: string): boolean;
	public getAudioTitle(name: string): string | false | undefined;
	public playAudio(name: string): string | false | undefined;
	public stopAudio(name: string): void;
	public eject(name: string): void;
	public getID(name: string): string | undefined;
}

export const disk: Disk;

declare class Fs {
	public complete(path: string, location: string, include_files?: boolean, include_dirs?: boolean): string[];
	public complete(
		path: string,
		location: string,
		options: { include_dirs?: boolean; include_files?: boolean }
	): string[];
	public isDriveRoot(path: string): boolean;
	public list(path: string): string[];
	public combine(path: string, ...args: string[]): string;
	public getName(path: string): string;
	public getDir(path: string): string;
	public getSize(path: string): number;
	public exists(path: string): boolean;
	public isDir(path: string): boolean;
	public isReadOnly(path: string): boolean;
	public move(path: string, dest: string): void;
	public open(path: string, mode: string): object | [undefined, string | undefined];
	public getDrive(path: string): string | undefined;
	public getFreeSpace(path: string): number | "unlimited";
	public find(path: string): string[];
	public getCapacity(path: string): number | undefined;
	public attributes(path: string): {
		size: number;
		isDir: boolean;
		isReadOnly: boolean;
		created: number;
		modified: number;
	};
}

export const fs: Fs;

declare class GPS {
	public CHANNEL_GPS: number;
	public locate(timeout?: number, debug?: boolean): [number, number, number];
}

export const gps: GPS;

declare class Help {
	public path(): string;
	public setPath(newPath: string): void;
	public lookup(topic: string): string | undefined;
	public topics(): object;
	public completeTopic(prefix: string): object;
}

export const help: Help;

declare class HTTP {
	public get(url: string, headers?: Record<string, string>, binary?: boolean): object;
	public get(request: {
		url: string;
		headers?: Record<string, string>;
		binary?: boolean;
		method?: string;
		redirect?: boolean;
	}): object;
	public post(
		url: string,
		body: string,
		headers?: Record<string, string>,
		binary?: boolean
	): object | [undefined, string, object | undefined];
	public post(request: {
		url: string;
		body?: string;
		headers?: Record<string, string>;
		binary?: boolean;
		method?: string;
		redirect: boolean;
	}): object | [undefined, string, object | undefined];
	public request(url: string, body?: string, headers?: Record<string, string>, binary?: boolean): void;
	public request(request: {
		url: string;
		body?: string;
		headers?: Record<string, string>;
		binary?: boolean;
		method?: string;
		redirect?: boolean;
	}): void;
	public checkURLAsync(url: string): true | [false, string];
	public checkURL(url: string): true | [false, string];
	public websocketAsync(url: string, headers?: Record<string, string>): void;
	public websocket(url: string, headers?: Record<string, string>): object | [false, string];
}

export const http: HTTP;

declare class IO {
	public stdin: object;
	public stdout: object;
	public stderr: object;
	public close(file?: object): void;
	public flush(): void;
	public input(file?: object | string): object;
	public lines(filename?: string, ...args: unknown[]): string | undefined;
	public open(filename: string, mode?: "r" | "w" | "a"): object;
	public output(file?: object | string): object;
	public read(...args: string[]): string | undefined;
	public type(obj: object): "file" | "closed file" | undefined;
	public write(...args: string[]): void;
}

export const io: IO;

declare class Keys {
	public getName(code: number): string;
}

export const keys: Keys;

declare class Multishell {
	public getFocus(): number;
	public setFocus(n: number): boolean;
	public getTitle(n: number): string | undefined;
	public setTitle(n: number, title: string): void;
	public getCurrent(): number;
	public launch(tProgramEnv: object, sProgramPath: string, ...args: unknown[]): number;
	public getCount(): number;
}

export const multishell: Multishell;

declare class OS {
	public pullEvent(filter?: string): [string, ...any];
	public pullEventRaw(filter?: string): [string, ...any];
	public run(env: object, path: string, ...args: any[]): boolean;
	public queueEvent(name: string, ...args: any[]): void;
	public startTimer(timer: number): number;
	public cancelTimer(token: number): void;
	public setAlarm(time: number): number;
	public cancelAlarm(token: number): void;
	public shutdown(): void;
	public reboot(): void;
	public getComputerID(): number | undefined;
	public computerID(): number | undefined;
	public getComputerLabel(): string | undefined;
	public computerLabel(): string | undefined;
	public setComputerLabel(label?: string): void;
	public clock(): number;
	public time(locale?: "ingame" | "utc" | "local" | object): any;
	public day(args: "ingame" | "utc" | "local"): number;
	public epoch(args: "ingame" | "utc" | "local"): number;
	public date(format?: string, time?: number): any;
}

export const os: OS;

declare class PaintUtils {
	public parseImage(image: string): object;
	public loadImage(path: string): object | undefined;
	public drawPixel(xPos: number, yPos: number, colour?: number): void;
	public drawLine(startX: number, startY: number, endX: number, endY: number, colour?: number): void;
	public drawBox(startX: number, startY: number, endX: number, endY: number, colour?: number): void;
	public drawFilledBox(startX: number, startY: number, endX: number, endY: number, colour?: number): void;
	public drawImage(image: object, xPos: number, yPos: number): void;
}

export const paintutils: PaintUtils;

declare class Parallel {
	public waitForAny(func: () => void): void;
	public waitForAll(func: () => void): void;
}

export const parallel: Parallel;

declare class Peripheral {
	public getNames(): string[];
	public isPresent(name: string): boolean;
	public getType(peripheral: string | object): string | undefined;
	public hasType(peripheral: string | object, peripheral_type: string): boolean | undefined;
	public getMethods(name: string): string[];
	public getName(peripheral: string | object): string;
	public call(name: string, method: string, ...args: any[]): any;
	public wrap(name: string): object | undefined;
	public find(ty: string, filter?: (name: string, wrapped: object) => boolean): object;
}

export const peripheral: Peripheral;

declare class Pocket {
	public equipBack(): [boolean, string | undefined];
	public unequipBack(): [boolean, string | undefined];
}

export const pocket: Pocket;

declare class Rednet {
	public CHANNEL_BROADCAST: number;
	public CHANNEL_REPEAT: number;
	public MAX_ID_CHANNELS: 65500;
	public open(modem: string): void;
	public close(modem: string): void;
	public isOpen(modem: string): boolean;
	public send(recipient: number, message: object, protocol?: string): boolean;
	public broadcast(message: string, protocol?: string): void;
	public receive(protocol_filter?: string, timeout?: number): [number, object, string | undefined];
	public host(protocol: string, hostname: string): void;
	public unhost(protocol: string): void;
	public lookup(protocol: string, hostname?: string): number[] | number | undefined;
	private run(): void;
}

export const rednet: Rednet;

declare class Redstone {
	public getSides(): string[];
	public setOutput(side: string, on: boolean): void;
	public getOutput(side: string): boolean;
	public getIntput(side: string): string;
	public setAnalogOutput(side: string, value: number): void;
	public setAnalogueOutput(side: string, value: number): void;
	public getAnalogOutput(side: string): number;
	public getAnalogueOutput(side: string): number;
	public getAnalogInput(side: string): number;
	public getAnalogueInput(side: string): number;
	public setBundledOutput(side: string, output: number): void;
	public getBundledOutput(side: string): number;
	public getBundledInput(side: string): number;
	public testBundledInput(side: string, mask: number): boolean;
}

export const redstone: Redstone;
export const rs: Redstone;

declare class Settings {
	public define(name: string, options?: { description?: string; default?: any; type?: string }): void;
	public undefine(name: string): void;
	public set(name: string, value: any): void;
	public get(name: string, def?: any): any;
	public getDetails(name: string): { description?: string; default?: any; type?: string; value?: any };
	public unset(name: string): void;
	public clear(): void;
	public getNames(): string[];
	public load(sPath?: string): boolean;
	public save(sPath?: string): boolean;
}

export const settings: Settings;

declare class Shell {
	public execute(command: string, ...args: string[]): boolean;
	public run(...args: string[]): boolean;
	public exit(): void;
	public dir(): string;
	public setDir(dir: string): void;
	public path(): string;
	public setPath(path: string): string;
	public resolve(path: string): string | undefined;
	public resolveProgram(command: string): string | undefined;
	public programs(include_hidden?: boolean): string[];
	public complete(sLine: string): string[];
	public completeProgram(program: string): string[];
	public setCompletionFunction(
		program: string,
		complete: (shell: object, index: number, argument: string, previous: string[]) => string[]
	): void;
	public getCompletionInfo(): Record<string, { fnComplete: (...args: any) => any }>;
	public getRunningProgram(): string;
	public setAlias(command: string, program: string): void;
	public clearAlias(command: string): void;
	public aliases(): Record<string, string>;
	public openTab(...args: string[]): number;
	public switchTab(id: number): void;
}

export const shell: Shell;

declare class Term {
	public nativePaletteColour(colour: number): [number, number, number];
	public nativePaletteColor(colour: number): [number, number, number];
	public write(text: string): void;
	public scroll(y: number): void;
	public getCursorPos(): [number, number];
	public setCursorPos(x: number, y: number): void;
	public getCursorBlink(): boolean;
	public setCursorBlink(blink: boolean): void;
	public getSize(): [number, number];
	public clear(): void;
	public clearLine(): void;
	public getTextColour(): number;
	public getTextColor(): number;
	public setTextColour(colour: number): void;
	public setTextColor(colour: number): void;
	public getBackgroundColour(): number;
	public getBackgroundColor(): number;
	public setBackgroundColour(colour: number): void;
	public setBackgroundColor(colour: number): void;
	public isColour(): boolean;
	public isColor(): boolean;
	public blit(text: string, textColor: string, backgroundColor: string): void;
	public setPaletteColour(index: number, colour: number): void;
	public setPaletteColour(index: number, r: number, g: number, b: number): void;
	public setPaletteColor(index: number, colour: number): void;
	public setPaletteColor(index: number, r: number, g: number, b: number): void;
	public getPaletteColour(colour: number): [number, number, number];
	public getPaletteColor(colour: number): [number, number, number];
	public redirect(target: object): object;
	public current(): object;
	public native(): object;
}

export const term: Term;

declare class TextUtils {
	public slowWrite(text: string, rate?: number): void;
	public slowPrint(sText: string, nRate?: number): void;
	public formatTime(nTime: number, bTwentyFourHour?: boolean): string;
	public pagedPrint(text: string, free_lines?: number): number;
	public tabulate(...args: any[]): void;
	public pagedTabulate(...args: any): void;
	public readonly empty_json_array: any[];
	public readonly json_null: null;
	public serialize(t: object, opts?: { compact?: boolean; allow_repetitions?: boolean }): string;
	public serialise(t: object, opts?: { compact?: boolean; allow_repetitions?: boolean }): string;
	public unserialize(text: string): object;
	public serializeJSON(t: object, bNBTStyle?: boolean): string;
	public serialiseJSON(t: object, bNBTStyle?: boolean): string;
	public unserializeJSON(t: string, bNBTStyle?: boolean): object;
	public unserialiseJSON(t: string, bNBTStyle?: boolean): object;
	public urlEncode(str: string): string;
	public complete(sSearchText: string, tSearchTable?: object): string[];
}

export const textutils: TextUtils;

declare class Turtle {
	public craft(limit?: number): [boolean, string];
	public forward(): [boolean, string | undefined];
	public back(): [boolean, string | undefined];
	public up(): [boolean, string | undefined];
	public down(): [boolean, string | undefined];
	public turnLeft(): [boolean, string | undefined];
	public turnRight(): [boolean, string | undefined];
	public dig(side?: string): [boolean, string | undefined];
	public digUp(side?: string): [boolean, string | undefined];
	public digDown(side?: string): [boolean, string | undefined];
	public place(text?: string): [boolean, string | undefined];
	public placeUp(text?: string): [boolean, string | undefined];
	public placeDown(text?: string): [boolean, string | undefined];
	public drop(count?: number): [boolean, string | undefined];
	public dropUp(count?: number): [boolean, string | undefined];
	public dropDown(count?: number): [boolean, string | undefined];
	public select(slot: number): boolean;
	public getItemCount(slot?: number): number;
	public getItemSpace(slot?: number): number;
	public detect(): boolean;
	public detectUp(): boolean;
	public detectDown(): boolean;
	public compare(): boolean;
	public compareUp(): boolean;
	public compareDown(): boolean;
	public attack(side?: string): [boolean, string | undefined];
	public attackUp(side?: string): [boolean, string | undefined];
	public attackDown(side?: string): [boolean, string | undefined];
	public suck(count?: number): [boolean, string | undefined];
	public suckUp(count?: number): [boolean, string | undefined];
	public suckDown(count?: number): [boolean, string | undefined];
	public getFuelLevel(): number | "unlimited";
	public refuel(count?: number): [boolean, string | undefined];
	public compareTo(slot: number): boolean;
	public transferTo(slot: number, count?: number): boolean;
	public getSelectedSlot(): number;
	public getFuelLimit(): number | "umlimited";
	public equipLeft(): [boolean, string | undefined];
	public equipRight(): [boolean, string | undefined];
	public inspect(): [boolean, object | string];
	public inspectUp(): [boolean, object | string];
	public inspectDown(): [boolean, object | string];
	public getItemDetail(slot?: number, detailed?: boolean): object | undefined;
}

export const turtle: Turtle;

declare class vector {
	constructor(x: number, y: number, z: number);
	public add(o: vector): vector;
	public sub(o: vector): vector;
	public mul(m: number): vector;
	public div(m: number): vector;
	public unm(): vector;
	public dot(o: vector): vector;
	public cross(o: vector): vector;
	public length(): number;
	public normalize(): vector;
	public round(tolerance?: number): vector;
	public tostring(): string;
	public equals(other: vector): boolean;
}

declare class Window {
	public nativePaletteColour(colour: number): [number, number, number];
	public nativePaletteColor(colour: number): [number, number, number];
	public write(text: string): void;
	public scroll(y: number): void;
	public getCursorPos(): [number, number];
	public setCursorPos(x: number, y: number): void;
	public getCursorBlink(): boolean;
	public setCursorBlink(blink: boolean): void;
	public getSize(): [number, number];
	public clear(): void;
	public clearLine(): void;
	public getTextColour(): number;
	public getTextColor(): number;
	public setTextColour(colour: number): void;
	public setTextColor(colour: number): void;
	public getBackgroundColour(): number;
	public getBackgroundColor(): number;
	public setBackgroundColour(colour: number): void;
	public setBackgroundColor(colour: number): void;
	public isColour(): boolean;
	public isColor(): boolean;
	public blit(text: string, textColor: string, backgroundColor: string): void;
	public setPaletteColour(index: number, colour: number): void;
	public setPaletteColour(index: number, r: number, g: number, b: number): void;
	public setPaletteColor(index: number, colour: number): void;
	public setPaletteColor(index: number, r: number, g: number, b: number): void;
	public getPaletteColour(colour: number): [number, number, number];
	public getPaletteColor(colour: number): [number, number, number];
	public redirect(target: object): object;
	public current(): object;
	public native(): object;
}

export const window: Window;
