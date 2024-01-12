declare module "markdown" {
  export function toHTML(str: string): string;
}

declare module "mdurl" {
  export function encode(str: string): string;
  export function decode(str: string): string;
}
